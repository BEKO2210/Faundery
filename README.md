# Faundery

Founder-Playbook und Produkt-MVP aus dem 7-Schritte-Prozess.

## Zuschlag — KI-Kalkulation für Bauausschreibungen (MVP)

Next.js-App: GAEB-Leistungsverzeichnis hochladen → jede Position wird mit
marktüblichen Einheitspreisen vorkalkuliert (Konfidenz + Quelle pro Position)
→ Summen, CSV-Export, druckfertiges Angebot.

### Starten

```bash
npm install
npm run dev          # http://localhost:3000
```

- **Ohne Konfiguration:** Kalkulation über den eingebauten Referenzpreis-Katalog
  (Maler-/Trockenbauarbeiten) — voll funktionsfähig im Demo-Modus.
- **Mit `ANTHROPIC_API_KEY`:** Claude kalkuliert jede Position individuell
  (Modell `claude-opus-4-8`, Structured Output).

### Unterstützte Formate

| Format | Endungen | Status |
|---|---|---|
| GAEB DA XML | .x81–.x86, .xml | vollständig |
| GAEB 90 | .d81–.d86 | Best-Effort (Beta) |
| CSV | `oz;menge;einheit;text` | vollständig |

Ein Beispiel-LV (kommunale Schulsanierung, 18 Positionen) ist eingebaut:
Button „Beispiel-LV laden" unter `/kalkulation`.

## Playbook

| Schritt | Dokument |
|---|---|
| 1 — Idee finden & validieren | [docs/schritt-1-million-dollar-idee.md](docs/schritt-1-million-dollar-idee.md) |
| 2 — Erstkunden definieren | [docs/schritt-2-erstkunden.md](docs/schritt-2-erstkunden.md) |
| 3 — Pitch | [docs/schritt-3-pitch.md](docs/schritt-3-pitch.md) |
| 4 — Erste 100 Kunden | [docs/schritt-4-erste-100-kunden.md](docs/schritt-4-erste-100-kunden.md) |
| 5 — Team | [docs/schritt-5-team.md](docs/schritt-5-team.md) |
| 6 — Entscheidungen | [docs/schritt-6-entscheidungen.md](docs/schritt-6-entscheidungen.md) |
