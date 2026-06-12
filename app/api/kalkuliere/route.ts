import { NextResponse } from "next/server";
import { parseLvDatei } from "@/lib/gaeb";
import { kalkuliere } from "@/lib/kalkulation";
import { DEMO_LV, DEMO_PROJEKT } from "@/lib/demo";
import type { KalkulationsErgebnis } from "@/lib/types";

export const maxDuration = 300;
export const runtime = "nodejs";

const MAX_DATEI_BYTES = 15 * 1024 * 1024;
const MAX_POSITIONEN = 600;

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const formData = await request.formData();

    let projekt: string;
    let positionen;
    let hinweise: string[] = [];

    if (formData.get("demo") === "1") {
      projekt = DEMO_PROJEKT;
      positionen = DEMO_LV;
    } else {
      const datei = formData.get("datei");
      if (!(datei instanceof File)) {
        return fehler(400, "Keine Datei übermittelt.");
      }
      if (datei.size > MAX_DATEI_BYTES) {
        return fehler(400, "Datei größer als 15 MB.");
      }
      const inhalt = await datei.text();
      const lv = parseLvDatei(datei.name, inhalt);
      projekt = lv.projekt;
      positionen = lv.positionen;
      hinweise = lv.hinweise;
    }

    if (positionen.length === 0) {
      return fehler(400, "Das Leistungsverzeichnis enthält keine Positionen.");
    }
    if (positionen.length > MAX_POSITIONEN) {
      hinweise.push(
        `LV enthält ${positionen.length} Positionen — kalkuliert wurden die ersten ${MAX_POSITIONEN}.`
      );
      positionen = positionen.slice(0, MAX_POSITIONEN);
    }

    const ergebnis = await kalkuliere(positionen);

    const antwort: KalkulationsErgebnis = {
      projekt,
      engine: ergebnis.engine,
      positionen: ergebnis.positionen,
      hinweise: [...hinweise, ...ergebnis.hinweise],
    };
    return NextResponse.json(antwort);
  } catch (err) {
    return fehler(
      422,
      err instanceof Error ? err.message : "Datei konnte nicht verarbeitet werden."
    );
  }
}

function fehler(status: number, meldung: string): NextResponse {
  return NextResponse.json({ fehler: meldung }, { status });
}
