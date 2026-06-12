import Anthropic from "@anthropic-ai/sdk";
import { katalogPreis, PREISKATALOG } from "./preiskatalog";
import type { KalkuliertePosition, Konfidenz, LvPosition } from "./types";

/**
 * Kalkuliert alle Positionen eines LVs.
 * Mit gesetztem ANTHROPIC_API_KEY übernimmt Claude die Preisermittlung
 * (Katalog als Referenzkontext); ohne Key rechnet die Katalog-Engine.
 */
export async function kalkuliere(
  positionen: LvPosition[]
): Promise<{ engine: "ki" | "katalog"; positionen: KalkuliertePosition[]; hinweise: string[] }> {
  const hinweise: string[] = [];

  if (process.env.ANTHROPIC_API_KEY) {
    try {
      const kiPositionen = await kalkuliereMitClaude(positionen);
      return { engine: "ki", positionen: kiPositionen, hinweise };
    } catch (err) {
      hinweise.push(
        `KI-Kalkulation nicht verfügbar (${err instanceof Error ? err.message : "Fehler"}) — Referenzkatalog verwendet.`
      );
    }
  } else {
    hinweise.push(
      "Demo-Modus: Die Preise stammen aus dem Referenzkatalog für Maler- und Trockenbauleistungen. Bitte vor Abgabe alle Positionen prüfen."
    );
  }

  return {
    engine: "katalog",
    positionen: positionen.map((p) => ({ ...p, ...katalogPreis(p) })),
    hinweise,
  };
}

// ------------------------------------------------------------- Claude-Engine

const BATCH_GROESSE = 30;

const PREIS_SCHEMA = {
  type: "object",
  properties: {
    items: {
      type: "array",
      items: {
        type: "object",
        properties: {
          oz: { type: "string" },
          einheitspreis: { type: "number" },
          konfidenz: { type: "string", enum: ["hoch", "mittel", "niedrig"] },
          quelle: { type: "string" },
        },
        required: ["oz", "einheitspreis", "konfidenz", "quelle"],
        additionalProperties: false,
      },
    },
  },
  required: ["items"],
  additionalProperties: false,
} as const;

interface KiPreis {
  oz: string;
  einheitspreis: number;
  konfidenz: Konfidenz;
  quelle: string;
}

async function kalkuliereMitClaude(
  positionen: LvPosition[]
): Promise<KalkuliertePosition[]> {
  const client = new Anthropic();

  const system = `Du bist Kalkulator in einem deutschen Maler- und Trockenbaubetrieb.
Du erhältst Positionen aus einem öffentlichen Leistungsverzeichnis (GAEB) und ermittelst
für jede Position einen marktüblichen Netto-Einheitspreis in EUR für Deutschland.

Referenzkatalog (marktübliche Preisspannen, Stand 2026):
${JSON.stringify(PREISKATALOG.map(({ keywords: _ignored, ...rest }) => rest))}

Regeln:
- Preise realistisch innerhalb oder nahe der Katalogspannen ansetzen; Leistungsumfang,
  Erschwernisse und Mengen der Position berücksichtigen (große Mengen = unteres Ende der Spanne).
- "konfidenz": "hoch" nur, wenn die Leistung eindeutig einem Katalogeintrag entspricht;
  "niedrig", wenn die Position unklar ist oder außerhalb des Gewerks liegt.
- "quelle": ein kurzer deutscher Satz, woraus sich der Preis ableitet (z. B. Katalog-ID und Anpassung).
- Für jede übergebene OZ genau ein Ergebnis liefern.`;

  const ergebnisse = new Map<string, KiPreis>();

  for (let i = 0; i < positionen.length; i += BATCH_GROESSE) {
    const batch = positionen.slice(i, i + BATCH_GROESSE);
    const response = await client.messages.create({
      model: "claude-opus-4-8",
      max_tokens: 16000,
      system,
      output_config: {
        format: { type: "json_schema", schema: PREIS_SCHEMA },
      },
      messages: [
        {
          role: "user",
          content: `Kalkuliere diese LV-Positionen:\n${JSON.stringify(
            batch.map((p) => ({
              oz: p.oz,
              text: `${p.kurztext} ${p.langtext}`.slice(0, 600),
              menge: p.menge,
              einheit: p.einheit,
            }))
          )}`,
        },
      ],
    });

    const text = response.content.find((b) => b.type === "text")?.text ?? "{}";
    const parsed = JSON.parse(text) as { items: KiPreis[] };
    for (const item of parsed.items) ergebnisse.set(item.oz, item);
  }

  return positionen.map((p) => {
    const ki = ergebnisse.get(p.oz);
    if (ki && ki.einheitspreis > 0) {
      return {
        ...p,
        einheitspreis: Math.round(ki.einheitspreis * 100) / 100,
        konfidenz: ki.konfidenz,
        quelle: `KI: ${ki.quelle}`,
      };
    }
    // Position fehlt in der KI-Antwort: Katalog-Fallback statt Lücke
    return { ...p, ...katalogPreis(p) };
  });
}
