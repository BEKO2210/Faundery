export interface LvPosition {
  /** Ordnungszahl / Positionsnummer aus dem LV */
  oz: string;
  kurztext: string;
  langtext: string;
  menge: number;
  einheit: string;
}

export type Konfidenz = "hoch" | "mittel" | "niedrig";

export interface KalkuliertePosition extends LvPosition {
  einheitspreis: number;
  konfidenz: Konfidenz;
  /** Woraus der Preis abgeleitet wurde (Katalogeintrag, KI-Begründung) */
  quelle: string;
}

export interface KalkulationsErgebnis {
  projekt: string;
  engine: "ki" | "katalog";
  positionen: KalkuliertePosition[];
  hinweise: string[];
}
