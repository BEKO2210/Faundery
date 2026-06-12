import type { Konfidenz, LvPosition } from "./types";

/**
 * Referenz-Preiskatalog Maler- & Trockenbauarbeiten.
 * Netto-Einheitspreise in EUR, marktübliche Spannen Deutschland (Stand 2026).
 * Dient als Grundlage für das Keyword-Matching und als Kontext für die KI.
 */
export interface KatalogEintrag {
  id: string;
  leistung: string;
  einheit: string;
  preisVon: number;
  preisBis: number;
  keywords: string[];
}

export const PREISKATALOG: KatalogEintrag[] = [
  { id: "M01", leistung: "Innenwandfläche streichen, Dispersionsfarbe, zweimaliger Anstrich", einheit: "m2", preisVon: 8.0, preisBis: 12.5, keywords: ["wandfläche", "wandflächen", "innenwand", "dispersion", "anstrich", "streichen", "wand"] },
  { id: "M02", leistung: "Deckenfläche streichen, Dispersionsfarbe, zweimaliger Anstrich", einheit: "m2", preisVon: 9.5, preisBis: 14.0, keywords: ["decke", "deckenfläche", "deckenflächen", "dispersion", "anstrich", "streichen"] },
  { id: "M03", leistung: "Grundierung / Tiefgrund auftragen", einheit: "m2", preisVon: 2.2, preisBis: 4.0, keywords: ["grundierung", "tiefgrund", "tiefengrund", "grundieren", "haftgrund"] },
  { id: "M04", leistung: "Spachtelarbeiten Qualitätsstufe Q2", einheit: "m2", preisVon: 5.5, preisBis: 9.0, keywords: ["spachteln", "spachtelarbeiten", "q2", "verspachteln", "spachtelung"] },
  { id: "M05", leistung: "Spachtelarbeiten Qualitätsstufe Q3", einheit: "m2", preisVon: 9.0, preisBis: 14.0, keywords: ["spachteln", "spachtelarbeiten", "q3", "verspachteln", "spachtelung"] },
  { id: "M06", leistung: "Malervlies / Glasfasertapete kleben inkl. Anstrich", einheit: "m2", preisVon: 15.0, preisBis: 22.0, keywords: ["malervlies", "glasfaser", "glasgewebe", "vlies", "tapezieren", "gewebe"] },
  { id: "M07", leistung: "Raufasertapete tapezieren", einheit: "m2", preisVon: 6.5, preisBis: 10.0, keywords: ["raufaser", "rauhfaser", "tapete", "tapezieren"] },
  { id: "M08", leistung: "Alttapete entfernen / Untergrund vorbereiten", einheit: "m2", preisVon: 3.5, preisBis: 6.5, keywords: ["alttapete", "entfernen", "abreißen", "untergrund", "ablaugen", "tapete"] },
  { id: "M09", leistung: "Türzarge lackieren (Stahl/Holz)", einheit: "St", preisVon: 45.0, preisBis: 75.0, keywords: ["zarge", "türzarge", "lackieren", "lackierung"] },
  { id: "M10", leistung: "Türblatt beidseitig lackieren", einheit: "St", preisVon: 110.0, preisBis: 180.0, keywords: ["türblatt", "tür", "lackieren", "beidseitig", "lackierung"] },
  { id: "M11", leistung: "Heizkörper lackieren", einheit: "St", preisVon: 40.0, preisBis: 85.0, keywords: ["heizkörper", "lackieren", "heizung", "lackierung"] },
  { id: "M12", leistung: "Fensterrahmen lackieren", einheit: "m2", preisVon: 55.0, preisBis: 95.0, keywords: ["fenster", "fensterrahmen", "lackieren", "lackierung", "rahmen"] },
  { id: "M13", leistung: "Fassadenanstrich Silikonharz/Silikat, zweimalig", einheit: "m2", preisVon: 15.0, preisBis: 25.0, keywords: ["fassade", "fassadenanstrich", "silikat", "siliconharz", "silikonharz", "außenanstrich"] },
  { id: "M14", leistung: "Risse in Putzflächen schließen", einheit: "m", preisVon: 4.5, preisBis: 9.0, keywords: ["risse", "riss", "schließen", "verharzen", "putz"] },
  { id: "M15", leistung: "Lackierung Stahlbauteile / Geländer (Korrosionsschutz)", einheit: "m2", preisVon: 18.0, preisBis: 32.0, keywords: ["stahl", "geländer", "korrosionsschutz", "eisenglimmer", "stahlbauteile"] },
  { id: "M16", leistung: "Abkleben und Abdecken von Flächen", einheit: "m2", preisVon: 1.2, preisBis: 2.8, keywords: ["abkleben", "abdecken", "schutzfolie", "abdeckung", "schützen"] },
  { id: "M17", leistung: "Silikonfuge erneuern", einheit: "m", preisVon: 5.0, preisBis: 9.5, keywords: ["silikon", "fuge", "verfugen", "acryl", "dauerelastisch"] },
  { id: "T01", leistung: "Metallständerwand GK, einfach beplankt (CW 75/100)", einheit: "m2", preisVon: 52.0, preisBis: 75.0, keywords: ["ständerwand", "metallständer", "gipskarton", "einfach", "beplankt", "trennwand", "cw"] },
  { id: "T02", leistung: "Metallständerwand GK, doppelt beplankt", einheit: "m2", preisVon: 68.0, preisBis: 95.0, keywords: ["ständerwand", "metallständer", "gipskarton", "doppelt", "beplankt", "trennwand"] },
  { id: "T03", leistung: "Abgehängte GK-Decke inkl. Unterkonstruktion", einheit: "m2", preisVon: 55.0, preisBis: 85.0, keywords: ["abgehängte", "decke", "abhängen", "unterkonstruktion", "gipskarton", "deckenbekleidung"] },
  { id: "T04", leistung: "Mineralwolle-Dämmung in Ständerwand einlegen", einheit: "m2", preisVon: 7.0, preisBis: 12.0, keywords: ["dämmung", "mineralwolle", "mineralfaser", "einlegen", "dämmstoff"] },
  { id: "T05", leistung: "Vorsatzschale GK auf Wand", einheit: "m2", preisVon: 40.0, preisBis: 62.0, keywords: ["vorsatzschale", "vorwand", "wandtrockenputz", "gipskarton"] },
  { id: "T06", leistung: "Trockenestrich-Element verlegen", einheit: "m2", preisVon: 35.0, preisBis: 55.0, keywords: ["trockenestrich", "estrichelement", "verlegen", "fermacell"] },
  { id: "T07", leistung: "Revisionsklappe einbauen", einheit: "St", preisVon: 65.0, preisBis: 120.0, keywords: ["revisionsklappe", "revision", "einbauen", "klappe"] },
  { id: "T08", leistung: "Türöffnung in Ständerwand inkl. UA-Profil", einheit: "St", preisVon: 120.0, preisBis: 220.0, keywords: ["türöffnung", "ua-profil", "aussparung", "öffnung"] },
  { id: "T09", leistung: "Brandschutzbeplankung F30/F90 Zulage", einheit: "m2", preisVon: 14.0, preisBis: 28.0, keywords: ["brandschutz", "f30", "f90", "feuerwiderstand", "zulage"] },
  { id: "A01", leistung: "Baustelleneinrichtung / Baustellenräumung", einheit: "psch", preisVon: 250.0, preisBis: 900.0, keywords: ["baustelleneinrichtung", "einrichten", "räumen", "baustelle", "vorhalten"] },
  { id: "A02", leistung: "Stundenlohnarbeiten Geselle", einheit: "h", preisVon: 52.0, preisBis: 68.0, keywords: ["stundenlohn", "geselle", "facharbeiter", "stundenlohnarbeiten"] },
  { id: "A03", leistung: "Stundenlohnarbeiten Vorarbeiter/Meister", einheit: "h", preisVon: 68.0, preisBis: 88.0, keywords: ["stundenlohn", "meister", "vorarbeiter", "stundenlohnarbeiten"] },
  { id: "A04", leistung: "Schutz- und Abdeckmaßnahmen Bodenflächen", einheit: "m2", preisVon: 1.5, preisBis: 3.5, keywords: ["bodenflächen", "schutz", "abdecken", "milchfolie", "hartfaser"] },
  { id: "A05", leistung: "Entsorgung Bauschutt / Verschnitt", einheit: "psch", preisVon: 120.0, preisBis: 450.0, keywords: ["entsorgung", "entsorgen", "bauschutt", "abfall", "container"] },
];

const EINHEIT_ALIAS: Record<string, string> = {
  "m²": "m2", qm: "m2", m2: "m2",
  m: "m", lfm: "m", lfdm: "m",
  st: "St", stk: "St", stck: "St", stück: "St",
  h: "h", std: "h", stunde: "h",
  psch: "psch", pa: "psch", pauschal: "psch", le: "psch",
};

export function normEinheit(e: string): string {
  return EINHEIT_ALIAS[e.trim().toLowerCase()] ?? e.trim();
}

export interface KatalogTreffer {
  einheitspreis: number;
  konfidenz: Konfidenz;
  quelle: string;
}

/**
 * Keyword-basiertes Matching einer LV-Position gegen den Referenzkatalog.
 * Liefert immer ein Ergebnis — bei fehlendem Treffer einen als "niedrig"
 * markierten Einheits-Schätzwert, den der Meister prüfen muss.
 */
export function katalogPreis(pos: LvPosition): KatalogTreffer {
  const text = `${pos.kurztext} ${pos.langtext}`.toLowerCase();
  const einheit = normEinheit(pos.einheit);

  let bester: { eintrag: KatalogEintrag; score: number } | null = null;
  for (const eintrag of PREISKATALOG) {
    let score = eintrag.keywords.filter((k) => text.includes(k)).length;
    if (score === 0) continue;
    if (normEinheit(eintrag.einheit) === einheit) score += 2;
    if (!bester || score > bester.score) bester = { eintrag, score };
  }

  if (bester && bester.score >= 3) {
    const e = bester.eintrag;
    return {
      einheitspreis: runde((e.preisVon + e.preisBis) / 2),
      konfidenz: bester.score >= 5 ? "hoch" : "mittel",
      quelle: `Katalog ${e.id}: ${e.leistung} (${e.preisVon.toFixed(2)}–${e.preisBis.toFixed(2)} €)`,
    };
  }

  // Kein belastbarer Treffer: konservativer Schätzwert nach Einheit
  const schaetzung: Record<string, number> = { m2: 12, m: 8, St: 80, h: 60, psch: 400 };
  return {
    einheitspreis: schaetzung[einheit] ?? 0,
    konfidenz: "niedrig",
    quelle: "Kein Katalogtreffer — Schätzwert, bitte manuell prüfen",
  };
}

function runde(n: number): number {
  return Math.round(n * 100) / 100;
}
