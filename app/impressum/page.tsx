import type { Metadata } from "next";

export const metadata: Metadata = { title: "Impressum — Zuschlag" };

/*
 * Platzhalter in eckigen Klammern vor dem oeffentlichen Betrieb mit den
 * echten Betreiberdaten fuellen (§ 5 DDG verlangt vollstaendige Angaben).
 */
export default function Impressum() {
  return (
    <main className="container rechtsseite">
      <h1>Impressum</h1>
      <h2>Angaben gemäß § 5 DDG</h2>
      <p>
        [Vor- und Nachname / Firma]<br />
        [Straße und Hausnummer]<br />
        [PLZ und Ort]<br />
        Deutschland
      </p>
      <h2>Kontakt</h2>
      <p>
        E-Mail: [E-Mail-Adresse]<br />
        Telefon: [Telefonnummer]
      </p>
      <h2>Umsatzsteuer-ID</h2>
      <p>
        Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: [USt-IdNr., sofern
        vorhanden]
      </p>
      <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
      <p>[Vor- und Nachname, Anschrift wie oben]</p>
      <h2>Haftung für Inhalte</h2>
      <p>
        Kalkulationsvorschläge von Zuschlag sind Richtwerte und ersetzen keine
        fachliche Prüfung. Die Verantwortung für abgegebene Angebote,
        insbesondere für Auskömmlichkeit und Vollständigkeit der Preise, liegt
        beim anbietenden Betrieb.
      </p>
    </main>
  );
}
