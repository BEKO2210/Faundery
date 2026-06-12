import { XMLParser } from "fast-xml-parser";
import type { LvPosition } from "./types";

export interface ParsedLv {
  projekt: string;
  positionen: LvPosition[];
  hinweise: string[];
}

/**
 * Parst eine GAEB-Datei (DA XML .x81/.x82/.x83/.x84, GAEB90 .d81-.d86)
 * oder eine CSV-Datei (oz;menge;einheit;text) in eine Positionsliste.
 */
export function parseLvDatei(dateiname: string, inhalt: string): ParsedLv {
  const name = dateiname.toLowerCase();
  const kopf = inhalt.slice(0, 8);
  if (kopf.startsWith("%PDF")) {
    throw new Error(
      "Das ist eine PDF-Datei. Bitte laden Sie das Leistungsverzeichnis als GAEB-Datei (.x83) aus dem Vergabeportal herunter — dort meist unter „Vergabeunterlagen“ neben dem PDF."
    );
  }
  if (kopf.startsWith("PK")) {
    throw new Error(
      "Das sieht nach einer Office- oder ZIP-Datei aus. Bitte laden Sie das Leistungsverzeichnis als GAEB-Datei (.x83) oder als CSV (oz;menge;einheit;text) hoch."
    );
  }
  if (name.endsWith(".csv")) return parseCsv(inhalt);
  if (/\.d8\d$/.test(name)) return parseGaeb90(inhalt);
  // GAEB DA XML (auch wenn die Endung nicht stimmt, am Inhalt erkennen)
  if (inhalt.trimStart().startsWith("<")) return parseGaebXml(inhalt);
  if (/\.x8\d$/.test(name)) return parseGaebXml(inhalt);
  return parseGaeb90(inhalt);
}

// ---------------------------------------------------------------- GAEB DA XML

function parseGaebXml(xml: string): ParsedLv {
  const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: "@_",
    removeNSPrefix: true,
    parseTagValue: false,
  });
  const doc = parser.parse(xml);
  const hinweise: string[] = [];

  const gaeb = doc.GAEB ?? doc;
  const award = gaeb.Award ?? {};
  const projekt =
    textOf(gaeb.PrjInfo?.LblPrj) ||
    textOf(award.PrjInfo?.LblPrj) ||
    textOf(gaeb.PrjInfo?.NamePrj) ||
    "Unbenanntes Projekt";

  const boq = award.BoQ ?? gaeb.BoQ;
  if (!boq) {
    throw new Error(
      "Keine Leistungsverzeichnis-Struktur (BoQ) in der GAEB-Datei gefunden."
    );
  }

  const positionen: LvPosition[] = [];
  sammleItems(boq.BoQBody, "", positionen);

  if (positionen.length === 0) {
    hinweise.push("Die Datei enthält keine kalkulierbaren Positionen.");
  }
  return { projekt, positionen, hinweise };
}

/* eslint-disable @typescript-eslint/no-explicit-any */
function sammleItems(body: any, ozPrefix: string, out: LvPosition[]): void {
  if (!body) return;
  for (const ctg of alsListe(body.BoQCtgy)) {
    const teil = ctg["@_RNoPart"] ? `${ctg["@_RNoPart"]}.` : "";
    sammleItems(ctg.BoQBody, ozPrefix + teil, out);
  }
  const itemlist = body.Itemlist;
  if (!itemlist) return;
  for (const item of alsListe(itemlist.Item)) {
    const rno = item["@_RNoPart"] ?? item["@_ID"] ?? "";
    const texte = extrahiereTexte(item.Description);
    const menge = parseFloat(String(item.Qty ?? "0").replace(",", "."));
    out.push({
      oz: ozPrefix + String(rno),
      kurztext: texte.kurz,
      langtext: texte.lang,
      menge: isNaN(menge) ? 0 : menge,
      einheit: textOf(item.QU) || "psch",
    });
  }
}

function extrahiereTexte(description: any): { kurz: string; lang: string } {
  if (!description) return { kurz: "", lang: "" };
  const kurz = tiefenText(description.CompleteText?.OutlineText ?? description.OutlineText);
  const lang = tiefenText(description.CompleteText?.DetailTxt ?? description.DetailTxt);
  return {
    kurz: kurz || lang.slice(0, 120),
    lang: lang || kurz,
  };
}

/** Sammelt rekursiv alle Textknoten (GAEB-Texte sind tief verschachtelt: Text > p > span). */
function tiefenText(knoten: any): string {
  if (knoten == null) return "";
  if (typeof knoten === "string" || typeof knoten === "number") {
    return String(knoten).trim();
  }
  if (Array.isArray(knoten)) {
    return knoten.map(tiefenText).filter(Boolean).join(" ");
  }
  if (typeof knoten === "object") {
    return Object.entries(knoten)
      .filter(([k]) => !k.startsWith("@_"))
      .map(([, v]) => tiefenText(v))
      .filter(Boolean)
      .join(" ");
  }
  return "";
}

function textOf(v: any): string {
  if (v == null) return "";
  if (typeof v === "object") return tiefenText(v);
  return String(v).trim();
}

function alsListe(v: any): any[] {
  if (v == null) return [];
  return Array.isArray(v) ? v : [v];
}
/* eslint-enable @typescript-eslint/no-explicit-any */

// ------------------------------------------------------------- GAEB 90 (.d83)

/**
 * Best-Effort-Parser für das alte zeilenbasierte GAEB-90-Format.
 * Satzart steht in den ersten beiden Zeichen jeder Zeile:
 *   11 = Position (OZ, Menge, Einheit), 25 = Kurztext, 26 = Langtext.
 */
function parseGaeb90(inhalt: string): ParsedLv {
  const zeilen = inhalt.split(/\r?\n/);
  const positionen: LvPosition[] = [];
  const hinweise: string[] = [
    "GAEB-90-Format erkannt (Beta-Unterstützung). Bei unvollständigen Positionen bitte die Ausschreibung als GAEB-XML (.x83) exportieren.",
  ];
  let aktuelle: LvPosition | null = null;

  for (const zeile of zeilen) {
    const sa = zeile.slice(0, 2);
    if (sa === "11") {
      if (aktuelle) positionen.push(aktuelle);
      const oz = zeile.slice(2, 11).trim();
      const mengeRoh = zeile.slice(38, 53).trim().replace(",", ".");
      const einheit = zeile.slice(57, 61).trim() || zeile.slice(53, 57).trim();
      const menge = parseFloat(mengeRoh);
      aktuelle = {
        oz: oz.replace(/^0+/, "") || oz,
        kurztext: "",
        langtext: "",
        menge: isNaN(menge) ? 0 : menge,
        einheit: einheit || "psch",
      };
    } else if ((sa === "25" || sa === "26") && aktuelle) {
      const text = zeile.slice(2).trim();
      if (sa === "25" && !aktuelle.kurztext) aktuelle.kurztext = text;
      else aktuelle.langtext = (aktuelle.langtext + " " + text).trim();
    }
  }
  if (aktuelle) positionen.push(aktuelle);

  if (positionen.length === 0) {
    throw new Error(
      "Aus der GAEB-90-Datei konnten keine Positionen gelesen werden. Bitte als GAEB-XML (.x83) oder CSV (oz;menge;einheit;text) hochladen."
    );
  }
  for (const p of positionen) {
    if (!p.kurztext) p.kurztext = p.langtext.slice(0, 120) || `Position ${p.oz}`;
  }
  return { projekt: "GAEB-90-Import", positionen, hinweise };
}

// ----------------------------------------------------------------------- CSV

function parseCsv(inhalt: string): ParsedLv {
  const zeilen = inhalt.split(/\r?\n/).filter((z) => z.trim().length > 0);
  const positionen: LvPosition[] = [];
  for (const zeile of zeilen) {
    const teile = zeile.split(";").map((t) => t.trim());
    if (teile.length < 4) continue;
    const [oz, mengeRoh, einheit, ...text] = teile;
    if (oz.toLowerCase() === "oz") continue; // Kopfzeile
    const menge = parseFloat(mengeRoh.replace(",", "."));
    positionen.push({
      oz,
      kurztext: text.join("; ").slice(0, 120),
      langtext: text.join("; "),
      menge: isNaN(menge) ? 0 : menge,
      einheit: einheit || "psch",
    });
  }
  if (positionen.length === 0) {
    throw new Error(
      "CSV konnte nicht gelesen werden. Erwartetes Format: oz;menge;einheit;text (Semikolon-getrennt)."
    );
  }
  return { projekt: "CSV-Import", positionen, hinweise: [] };
}
