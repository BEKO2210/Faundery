import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="hero container">
        <h1>
          Das Leistungsverzeichnis kostet Sie <em>zwei Sonntagabende</em>. Oder
          15 Minuten.
        </h1>
        <p className="lead">
          Zuschlag kalkuliert öffentliche Bauausschreibungen für Maler- und
          Trockenbaubetriebe: GAEB-Datei hochladen, jede Position wird mit
          marktüblichen Einheitspreisen vorkalkuliert — Sie prüfen, korrigieren
          und geben ab. Mehr Angebote raus, mehr Zuschläge rein.
        </p>
        <div className="cta-row">
          <Link href="/kalkulation" className="btn btn-primary">
            Jetzt LV kalkulieren
          </Link>
          <Link href="/kalkulation?demo=1" className="btn btn-ghost">
            Demo mit Beispiel-LV ansehen
          </Link>
        </div>
      </section>

      <section className="container feature-grid">
        <div className="feature">
          <h3>GAEB rein, Angebot raus</h3>
          <p>
            Unterstützt GAEB-XML (.x83), GAEB 90 (.d83) und CSV. Die Mengen
            stehen im LV — kalkuliert werden nur noch Ihre Einheitspreise.
          </p>
        </div>
        <div className="feature">
          <h3>Konfidenz statt Blindflug</h3>
          <p>
            Jede Position zeigt, woraus sich der Preis ableitet und wie sicher
            der Vorschlag ist. Unsicheres wird markiert, nicht versteckt — die
            Freigabe bleibt beim Meister.
          </p>
        </div>
        <div className="feature">
          <h3>Ihre Preise, Ihr Markt</h3>
          <p>
            Kalkuliert auf Basis marktüblicher Referenzpreise für
            Maler- und Trockenbauarbeiten — anpassbar pro Position, exportierbar
            als CSV oder druckfertiges Angebot.
          </p>
        </div>
      </section>

      <section className="container preise">
        <h2 className="section-title">Preise</h2>
        <div className="preis-grid">
          <div className="preis-card">
            <h3>Einzel-LV</h3>
            <div className="preis">149 €<small> / LV</small></div>
            <ul>
              <li>Ein komplettes Leistungsverzeichnis kalkuliert</li>
              <li>Kein Abo, keine Bindung</li>
              <li>Geld zurück, wenn die Kalkulation nichts taugt</li>
            </ul>
            <Link href="/kalkulation" className="btn btn-ghost">Einzeln kalkulieren</Link>
          </div>
          <div className="preis-card hervor">
            <span className="preis-tag">Beliebt</span>
            <h3>Betrieb</h3>
            <div className="preis">299 €<small> / Monat</small></div>
            <ul>
              <li>5 Leistungsverzeichnisse pro Monat</li>
              <li>Ausschreibungs-Feed für Ihr Gewerk und Ihre Region</li>
              <li>CSV-Export &amp; druckfertige Angebote</li>
            </ul>
            <Link href="/kalkulation" className="btn btn-primary">14 Tage testen</Link>
          </div>
          <div className="preis-card">
            <h3>Profi</h3>
            <div className="preis">599 €<small> / Monat</small></div>
            <ul>
              <li>Unbegrenzte Leistungsverzeichnisse</li>
              <li>Win/Loss-Auswertung Ihrer Angebote</li>
              <li>Regionale Preisbenchmarks</li>
            </ul>
            <Link href="/kalkulation" className="btn btn-ghost">Anfragen</Link>
          </div>
        </div>
      </section>

      <section className="container steps">
        <h2>So funktioniert&rsquo;s</h2>
        <div className="step-row">
          <span className="step-num">1</span>
          <p>
            <strong>LV hochladen.</strong> Die GAEB-Datei aus dem Vergabeportal
            — so wie Sie sie heruntergeladen haben.
          </p>
        </div>
        <div className="step-row">
          <span className="step-num">2</span>
          <p>
            <strong>Kalkulation prüfen.</strong> Alle Positionen mit
            Einheitspreis, Gesamtpreis und Konfidenz. Drei Werte korrigieren
            statt 380 Positionen tippen.
          </p>
        </div>
        <div className="step-row">
          <span className="step-num">3</span>
          <p>
            <strong>Abgeben.</strong> Angebotssummen, CSV-Export für Ihr
            Vergabeportal oder druckfertiges Angebot. Der Sonntagabend gehört
            wieder Ihnen.
          </p>
        </div>
      </section>
    </main>
  );
}
