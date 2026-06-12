import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zuschlag — KI-Kalkulation für Bauausschreibungen",
  description:
    "Leistungsverzeichnis hochladen, in 15 Minuten ein abgabefertiges Angebot erhalten. KI-Kalkulation für Maler- und Trockenbaubetriebe.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body>
        <header className="topbar">
          <div className="container topbar-inner">
            <Link href="/" className="brand">
              Zu<em>schlag</em>
            </Link>
            <nav>
              <Link href="/kalkulation" className="btn btn-primary" style={{ padding: "9px 18px", fontSize: 14 }}>
                LV kalkulieren
              </Link>
            </nav>
          </div>
        </header>
        {children}
        <footer className="site">
          <div className="container footer-inner">
            <span>
              Zuschlag — Kalkulationsvorschläge sind Richtwerte; die Freigabe der
              Preise liegt beim Betrieb. Keine Gewähr für Vollständigkeit oder
              Auskömmlichkeit.
            </span>
            <nav className="footer-links">
              <Link href="/impressum">Impressum</Link>
              <Link href="/datenschutz">Datenschutz</Link>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
