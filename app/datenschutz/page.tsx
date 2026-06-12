import type { Metadata } from "next";

export const metadata: Metadata = { title: "Datenschutzerklärung — Zuschlag" };

/*
 * Platzhalter in eckigen Klammern vor dem oeffentlichen Betrieb fuellen und
 * die Erklaerung anwaltlich pruefen lassen — dieser Text ist ein Geruest,
 * keine Rechtsberatung.
 */
export default function Datenschutz() {
  return (
    <main className="container rechtsseite">
      <h1>Datenschutzerklärung</h1>

      <h2>1. Verantwortlicher</h2>
      <p>
        [Vor- und Nachname / Firma], [Anschrift], E-Mail: [E-Mail-Adresse]
      </p>

      <h2>2. Verarbeitung beim Besuch der Website</h2>
      <p>
        Beim Aufruf dieser Website verarbeitet unser Hosting-Anbieter (Vercel
        Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA) technisch
        notwendige Daten wie IP-Adresse, Datum und Uhrzeit des Zugriffs sowie
        die aufgerufene Seite (Server-Logs). Rechtsgrundlage ist Art. 6 Abs. 1
        lit. f DSGVO (sicherer und stabiler Betrieb). Mit Vercel besteht ein
        Auftragsverarbeitungsvertrag; die Übermittlung in die USA stützt sich
        auf das EU-US Data Privacy Framework.
      </p>

      <h2>3. Hochgeladene Leistungsverzeichnisse</h2>
      <p>
        Hochgeladene LV-Dateien werden ausschließlich zur Erstellung der
        Kalkulation im Arbeitsspeicher verarbeitet und nicht dauerhaft auf
        unseren Servern gespeichert. Die fertige Kalkulation verbleibt lokal
        in Ihrem Browser (localStorage) und kann dort jederzeit von Ihnen
        gelöscht werden. Sofern die KI-Kalkulation aktiv ist, werden die
        Positionstexte (ohne personenbezogene Daten des Nutzers) an die
        Anthropic Ireland Ltd. zur Preisermittlung übermittelt;
        Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO.
      </p>

      <h2>4. Cookies und Tracking</h2>
      <p>
        Diese Website setzt keine Tracking-Cookies und keine
        Analyse-Werkzeuge ein.
      </p>

      <h2>5. Ihre Rechte</h2>
      <p>
        Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung
        (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung
        (Art. 18), Datenübertragbarkeit (Art. 20) und Widerspruch (Art. 21)
        sowie ein Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde.
      </p>

      <p className="stand">Stand: Juni 2026</p>
    </main>
  );
}
