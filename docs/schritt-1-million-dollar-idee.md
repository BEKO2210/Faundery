# Schritt 1 von 7: Die Million-Dollar-Idee — gefunden, zerlegt, neu aufgebaut

> Rolle: Founder mit drei Exits. Auftrag: Eine Idee finden, die ein Solo-Developer mit
> KI-Tools bauen kann, die schnell zahlende Kunden findet und echtes $100M-Potenzial hat.
> Recherche-Stand: Juni 2026, validiert gegen den realen Markt (Quellen am Ende).

---

## 0. Die unbequeme Wahrheit zuerst

Die wichtigste Erkenntnis aus der Marktvalidierung: **Es gibt 2026 keine „unentdeckten" offensichtlichen Nischen mehr.** Jede Idee, die ein ChatGPT-Prompt in 10 Sekunden ausspuckt („KI-Telefonassistent für Praxen", „KI für Hausverwaltungen", „PV-Bürokratie automatisieren"), hat bereits finanzierte Wettbewerber. Wer dir etwas anderes erzählt, hat nicht recherchiert.

Der Vorteil entsteht nicht mehr auf Ideen-Ebene. Er entsteht durch: **(1) eine engere Nische als alle anderen, (2) schnellere Distribution, (3) einen Daten-Moat, der mit jedem Kunden wächst.** Die folgende Idee ist nach genau diesen Kriterien gebaut.

### Der Friedhof: Ideen, die ich geprüft und verworfen habe

| Idee | Warum tot |
|---|---|
| PV-/Wärmepumpen-Netzanmeldung automatisieren | Besetzt: [NetzPilot](https://netz-pilot.com/), [Netzanmeldung-Digital](https://netzanmeldung-digital.de/), [autarc](https://www.autarc.energy/produkte/netzanmeldung); Netzbetreiber-Seite: epilot, envelio |
| Komplett-Workflow für Wärmepumpen-Installateure | [autarc](https://www.autarc.energy/) deckt bereits alles ab: Heizlast, hydraulischer Abgleich, Angebot, Förderung, Netzanmeldung — VC-finanziert |
| KI-Mieterkommunikation für Hausverwaltungen | Kapitalisiert: Aiden, Buena ($58M u.a. von Google Ventures, kauft Verwaltungen gleich ganz auf) |
| KI-Gutachten für KFZ-Sachverständige | Besetzt: [autoiXpert](https://www.autoixpert.de/) (2.000+ Nutzer), [Gutachten-Genie](https://www.gutachtenbuddy.de/) (KI-Gerichtsgutachten), Audatex/DAT als Daten-Gatekeeper |
| iSFP-/Energieberater-Software | Besetzt ([iSFP-Turbo](https://isfp-software.de/): 30 Min/iSFP, [reduco.ai](https://reduco.ai/), Grundsteine) **plus** Regulatorik-Risiko: GEG-Reform macht die gesamte Nachfrage politisch fragil |
| E-Rechnungs-Tools | Sevdesk/Lexware/DATEV lösen das für ihre Bestandskunden quasi kostenlos mit. Kein Wedge |
| Handwerker-Bürosoftware allgemein | ToolTime, Plancraft, HERO — zweistellige Millionen-Fundings, Verdrängungswettbewerb |

---

## 1. Die Idee

**Arbeitstitel: „Zuschlag" — KI-Kalkulation für öffentliche Bauausschreibungen.**

Ein kleiner Handwerksbetrieb lädt das Leistungsverzeichnis (GAEB-Datei) einer Ausschreibung hoch. Die KI versteht jede Position („450 m² Innenwandflächen, Dispersionsfarbe, Q3-Oberfläche…"), kalkuliert auf Basis der eigenen Stammdaten, alter Angebote und regionaler Marktpreise einen Einheitspreis pro Position — und gibt nach 15 Minuten ein abgabefertiges, vom Meister nur noch zu prüfendes Angebot zurück. Was heute zwei bis drei Feierabende des Chefs kostet, kostet dann eine Kaffeepause.

### Warum genau jetzt (das Timing-Fenster)

1. **Die Nachfrage-Flut ist beschlossen:** Das 500-Mrd.-€-Sondervermögen für Infrastruktur (2025) plus kommunaler Sanierungsstau bedeutet: Die öffentliche Hand schreibt in den nächsten 10 Jahren so viel Bauleistung aus wie nie. Gleichzeitig schrumpft die Bieterbasis (Fachkräftemangel, Betriebsaufgaben). Kommunen bekommen heute auf viele Lose nur noch ein bis drei Angebote — teils gar keins.
2. **Die Daten sind endlich maschinenlesbar:** E-Vergabe ist Pflicht, eForms ist seit 2024 EU-Standard, Ausschreibungen liegen strukturiert auf oeffentlichevergabe.de. Und das Entscheidende: **Öffentliche LVs enthalten die Mengen bereits.** Der Bieter muss keine Aufmaße machen, sondern nur Einheitspreise eintragen. Das ist ein reines, strukturiertes Pricing-Problem — der KI-tauglichste Teilschritt des gesamten Bauwesens.
3. **Die Konkurrenz ist noch embryonal:** [GAEB-Online](https://blog.gaeb-online.de/schneller-kalkulieren-mit-ki/) (Legacy-Desktop-Tool) launcht sein KI-Modul erst zum 01.06.2026. [BAUBOOST](https://ki.bauboostconsulting.de/) ist das Nebenprojekt einer Beratung. [BAU AI](https://www.bauai.eu/) zielt auf Vergaberecht und die Ausschreiber-Seite. Hero/Plancraft können GAEB importieren, kalkulieren aber nicht mit KI. **Es gibt noch keinen finanzierten Category-Leader für „kleiner Betrieb gewinnt Ausschreibung".** Dieses Fenster ist 12–18 Monate offen, nicht länger.

### Warum der Kunde sofort zahlt

Alle verworfenen Ideen oben verkaufen **Zeitersparnis** („spare 5 Stunden Admin"). Das ist ein Vitamin. Diese Idee verkauft **Umsatz**: Jedes zusätzlich abgegebene Angebot ist eine Chance auf einen Auftrag von 30.000–500.000 €. Ein Betrieb, der heute 2 von 10 interessanten Ausschreibungen beantwortet (weil Kalkulation Chefsache ist und der Chef keine Abende mehr hat), kann mit dem Tool 8 von 10 beantworten. Ein einziger zusätzlicher Zuschlag pro Jahr bezahlt das Tool für ein Jahrzehnt. Das ist Painkiller-Ökonomie.

---

## 2. Der Teardown — jede Schwäche, brutal

### Ungetestete Annahmen (in Reihenfolge der Gefährlichkeit)

1. **„Kleine Betriebe WOLLEN öffentliche Aufträge."** Das ist die Kill-Annahme Nr. 1. Viele meiden die öffentliche Hand bewusst: VOB-Bürokratie, Zahlungsziele, Nachtragsstreit, Preisdruck. Wenn das Problem nicht „ich schaffe die Kalkulation nicht" ist, sondern „ich will den Kunden Staat nicht", ist der Markt tot. → **Test in Woche 1:** 20 Telefonate mit Maler-/Trockenbau-Meistern. Frage: „Wann hast du zuletzt eine Ausschreibung NICHT beantwortet, die du gern gewonnen hättest — und warum?"
2. **„Die Kalkulation ist der Engpass — nicht das Finden, nicht der Mut, nicht die Kapazität."** Wenn Betriebe ohnehin voll sind, hilft mehr Angebotsoutput nichts. Gegenargument: Die Baukonjunktur 2024–2026 war schwach, viele Betriebe suchen aktiv Auslastung. Trotzdem: testen, nicht glauben.
3. **„Der Meister vertraut KI-Preisen."** Ein falscher Einheitspreis in Position 47 kann einen Auftrag ruinieren. Wenn der Chef sowieso jede Position nachrechnet, ist die Ersparnis weg. → Das Produkt muss Konfidenz pro Position zeigen und Unsicheres explizit markieren, sonst stirbt das Vertrauen beim ersten Fehler.
4. **„Stammdaten existieren digital."** Tun sie oft nicht — die Kalkulation lebt im Kopf des Chefs. → Onboarding muss „lade 3 alte Angebote hoch" sein, nicht „pflege deinen Artikelstamm".
5. **„GAEB ist technisch beherrschbar."** GAEB hat Formatvarianten (90, XML, DA81–86), und reale Dateien sind oft fehlerhaft exportiert. Unterschätzter Engineering-Aufwand, aber lösbar — und jede gelöste Edge-Case-Hölle ist eine Eintrittsbarriere für den Nächsten.

### Scheinmärkte und Kundensegmente, die nicht zahlen werden

- **„560.000 Handwerksbetriebe in Deutschland"** — Fake-TAM. Solo-Selbstständige und 3-Mann-Betriebe bieten nie auf Ausschreibungen. Der echte Kern: Betriebe mit ~10–100 Mitarbeitern, die bereits bieten oder bieten wollen. Realistisch 25.000–50.000 Betriebe in DACH. Das reicht — aber man muss ehrlich damit rechnen.
- **Große Bauunternehmen** — klingen attraktiv (Budget!), haben aber eigene Kalkulatoren und stecken tief in RIB iTWO/Nevaris. Enterprise-Sales-Friedhof für einen Solo-Founder.
- **Architekten/Ausschreiber** — falsche Marktseite, von AVA-Software (ORCA, California) besetzt.
- **Der „KI-begeisterte" Handwerker** — existiert auf Messen, nicht in der Buchhaltung. Verkauft wird über gewonnene Aufträge, nicht über KI.

### Warum das Ganze scheitern kann

- **Adoption-Geschwindigkeit:** Handwerk kauft langsam, über Vertrauen und Empfehlung. Der Sales-Zyklus könnte die Burn-Rate eines Bootstrappers übersteigen. (Gegenmittel: Concierge-Einstieg, siehe MVP — Geld ab Tag 1, Software später.)
- **Falsch kalkuliert = Existenzrisiko des Kunden:** Ein zu niedriger Preis, der Betrieb bekommt den Zuschlag und legt drauf. Haftungsfrage. → Produkt ist „Kalkulationsvorschlag mit Quellenangabe", Freigabe bleibt beim Meister; AGB entsprechend; und genau deshalb Konfidenz-Anzeige pro Position.
- **Hero/Plancraft bauen das Feature nach:** Realistisch in 2–3 Jahren. Ihr Fokus ist aber Privatkunden-Angebote und Betriebsorganisation; öffentliche Vergabe ist für sie ein Randfeature, für uns das ganze Produkt. Der Daten-Moat (unten) macht Nachbauen zunehmend wertlos.
- **BAUBOOST oder GAEB-Online werden schneller groß:** Echtes Risiko, reines Execution-Race. Deshalb 12–18-Monats-Fenster und Fokus auf EIN Gewerk statt „alle Gewerke".
- **Konjunktur dreht:** Wenn Betriebe wieder übervoll sind, sinkt der Hunger auf neue Ausschreibungen. Teilweise gegenläufig abgesichert: Das Sondervermögen wirkt antizyklisch und über ein Jahrzehnt.

---

## 3. Der Rebuild — die stärkste Version

### Die exakte Antwort auf jede Frage

**Das exakte Geschäftsmodell:** SaaS, das aus einer GAEB-Ausschreibung in 15 Minuten ein kalkuliertes, abgabefertiges Angebot macht — plus täglicher Feed passender Ausschreibungen nach Gewerk und Region.

**Die exakte Start-Nische:** **Maler- und Trockenbaubetriebe (10–50 Mitarbeiter) in Deutschland, die auf öffentliche und GU-Ausschreibungen bieten.** Warum dieses Gewerk: lange LVs (200–500 Positionen = maximaler Kalkulationsschmerz), hochgradig standardisierte Positionstexte (STLB-Bau = ideal für LLMs), niedrige Materialkomplexität (Preisrisiko beherrschbar), und es gibt zehntausende Betriebe. Bewusst NICHT starten mit: Tiefbau (zu komplex), Elektro (Materialpreisvolatilität), Dachdecker (Aufmaß-lastig).

**Der Kunde, der zuerst zahlt:** Der Inhaber-Meister eines 15-Mann-Malerbetriebs, 35–55 Jahre, der sonntagabends am Küchentisch LV-Positionen in Excel tippt, während die Familie schläft. Er hat letzten Monat zwei Ausschreibungen verfallen lassen, weil die Abgabefrist vor seinem freien Wochenende lag.

**Sein schmerzhaftes Problem, heute:** Kalkulation ist Chefsache und nicht delegierbar — sein Engpass ist nicht Aufträge finden, sondern Angebote rechtzeitig herauskriegen. Jedes nicht abgegebene Angebot ist ein verlorener Lottoschein auf 50.000–300.000 € Umsatz.

**Warum er sofort zahlt:** Weil das erste hochgeladene LV ihm den Beweis in seinem eigenen Projekt liefert — nicht in einer Demo. Und weil 149 € gegen einen potenziellen Sechsstellig-Auftrag keine Budgetentscheidung sind, sondern ein Reflex.

**Das einfachste MVP (Concierge-first, 4 Wochen):**
1. Woche 1–2: Landingpage + Angebot: *„Schick uns dein LV, du bekommst in 24 h die fertige Kalkulation. 99 € pro LV, Geld zurück wenn unbrauchbar."* Im Hintergrund: GAEB-Parser (offene Spezifikation, Libraries existieren) + LLM-Pipeline (Position → Leistungskategorie → Einheitspreis aus Referenzdaten: alte Angebote des Kunden, BKI-Baukosten, regionale Lohnsätze) + manuelle Qualitätskontrolle durch mich.
2. Woche 3–4: Die manuellen Schritte nacheinander automatisieren. Erst wenn 20 LVs bezahlt durchgelaufen sind, wird aus dem Service ein Self-Service-Produkt.
   Kein Pitch-Deck, kein Funding, kein „Plattform"-Gerede. Ein Parser, ein Prompt-System, ein Stripe-Link.

**Pricing:**
- Einstieg: **149 €/LV** (pay-per-use, null Commitment — Handwerker hassen Abos, die sie nicht verstehen)
- Abo: **299 €/Monat** (5 LVs + Ausschreibungs-Feed) | **599 €/Monat** (unlimitiert + Win/Loss-Auswertung)
- Später: Preisintelligenz-Upsell (s. Moat). Ziel-ACV Jahr 1: ~3.000–5.000 €. 100 Kunden ≈ 400.000 € ARR — als Solo-Founder profitabel.

**Die ersten 10 zahlenden Kunden (Wochen 1–8):** Kein Ads-Budget. Direkt dorthin, wo der Schmerz ausgesprochen wird: Maler-/Stuckateur-Innungen (Obermeister anrufen, 15-Minuten-Demo beim Innungsabend anbieten), Facebook-Gruppen für Malermeister, malerblatt-/Handwerksforen. Der Hook ist nicht „KI", sondern: *„Ich kalkuliere dein nächstes Leistungsverzeichnis für 99 €. Wenn's nichts taugt, zahlst du nichts."* Risiko-Umkehr schlägt jede Anzeige.

**Von 10 auf 100 (Monate 3–12):** Der Ausschreibungs-Feed wird zur Akquise-Maschine: Aus den öffentlichen Vergabedaten sehe ich, *welcher Betrieb in welcher Region bieten könnte* — und schreibe ihn mit einer konkreten, aktuell laufenden Ausschreibung an („Diese drei Ausschreibungen in deinem Landkreis passen zu deinem Betrieb — soll ich dir eine davon probekalkulieren?"). Hyperrelevante Cold-Outreach mit eingebautem Anlass. Dazu: Empfehlungsschleife über Innungen (Handwerk kauft, was der Kollege lobt) und ein monatlicher öffentlicher „Was zahlt die öffentliche Hand pro m²?"-Preisreport als Linkmagnet und Vertrauensbeweis.

**Der schwer kopierbare Vorteil:** **Die Preisdatenbank, die sich selbst füttert.** Jedes kalkulierte LV + jede Zuschlags-/Absage-Rückmeldung erzeugt einen Datensatz, den es nirgendwo zu kaufen gibt: reale, regionale, aktuelle Einheitspreise für Bauleistungen inklusive Gewinnwahrscheinlichkeit („Mit 4,80 €/m² gewinnst du in Mittelhessen mit 70 % Wahrscheinlichkeit, mit 5,40 € verlierst du"). Das UI kann jeder in einem Wochenende nachbauen. Diese Daten kann niemand nachbauen, der später startet — der Vorsprung wächst mit jedem Kunden. Das ist der Moat.

**Die $100M-Version:** Vom Kalkulations-Tool zum **Marktpreis-Index für Bauleistungen** — die Bloomberg-Daten des Bauhandwerks. Expansionspfad: (1) Gewerk für Gewerk (Maler → Trockenbau → GaLaBau → Elektro → Tiefbau), (2) GU-/Nachunternehmer-Ausschreibungen (privater Markt, ein Vielfaches des öffentlichen Volumens), (3) EU-weit — eForms ist ein EU-Standard, dieselbe Maschine läuft in Österreich, Frankreich, den Niederlanden, (4) die andere Marktseite: Kommunen und GUs zahlen für Preis-Benchmarks und Bietervorhersagen. Öffentliche Bauvergabe allein in der EU ist ein Markt von mehreren hundert Milliarden Euro pro Jahr; wer die Preisdaten-Schicht darüber besitzt, ist ein $100M+-Unternehmen — gebaut auf einem 149-€-Produkt für einen Malermeister am Küchentisch.

---

## 4. Go / No-Go-Kriterien (bevor eine Zeile Produktcode entsteht)

| Test | Frist | Kill-Kriterium |
|---|---|---|
| 20 Meister-Telefonate (Maler/Trockenbau) | Woche 1 | Wenn <8 von 20 sagen „ich lasse regelmäßig Ausschreibungen liegen" → Nische wechseln (erst GU-Anfragen statt öffentl. Vergabe prüfen, dann Idee kippen) |
| 10 bezahlte Concierge-Kalkulationen à 99 € | Woche 4 | Wenn trotz Geld-zurück-Garantie keine 10 Käufer → kein echter Schmerz, stoppen |
| 3 Kunden kaufen ein zweites LV | Woche 8 | Keine Wiederkäufe = Ergebnis war nicht gut genug → erst Qualität fixen, nicht skalieren |

---

## Quellen (Auswahl)

- Wärmepumpenmarkt 2025/26: [BWP — Absatz +55 % auf 299.000 Geräte, Prognose 410.000–530.000 für 2026](https://www.waermepumpe.de/presse/news/details/ueber-50-prozent-im-plus-waermepumpen-absatz-steigt-2025-deutlich/), [Handelsblatt](https://www.handelsblatt.com/unternehmen/energie/heizung-comeback-der-waermepumpe-absatz-um-55-prozent-gestiegen/100195244.html)
- Besetzte Nischen: [autarc](https://www.autarc.energy/), [NetzPilot](https://netz-pilot.com/), [Netzanmeldung-Digital](https://netzanmeldung-digital.de/), [autoiXpert](https://www.autoixpert.de/), [Gutachten-Genie](https://www.gutachtenbuddy.de/), [iSFP-Turbo](https://isfp-software.de/), [reduco.ai](https://reduco.ai/blog/energieberater-software-vergleich)
- GAEB-/Ausschreibungs-KI-Wettbewerb: [GAEB-Online KI-PreisNavigator (Launch 01.06.2026)](https://blog.gaeb-online.de/schneller-kalkulieren-mit-ki/), [BAUBOOST](https://ki.bauboostconsulting.de/), [BAU AI](https://www.bauai.eu/), [Bidfix](https://bidfix.ai/guide/leistungsverzeichnis-erstellen), [HERO GAEB-Schnittstelle](https://hero-software.de/features/schnittstellen/gaeb)

---

*Nächster Schritt (2 von 7): „Find the customers who buy first" — mit diesem Produkt als Input ist der Kunde bereits scharf gestellt: der Inhaber-Meister am Sonntagabend. Schritt 2 verfeinert, wo genau er ist und mit welchem Satz man ihn erreicht.*
