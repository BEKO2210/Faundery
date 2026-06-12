# Schritt 6 von 7: Die Entscheidung, die das Geschäft verzehnfacht

> Produkt: „Zuschlag" ([Schritt 1](./schritt-1-million-dollar-idee.md) – [Schritt 5](./schritt-5-team.md)).
> Auftrag: Die exakte Entscheidung analysieren, vor der die Firma nach den ersten
> ~30 zahlenden Kunden stehen wird — aus drei Blickwinkeln, mit der Entscheidung,
> die der $100M-Founder trifft, und der Begründung, die jede andere Option im
> Rückblick offensichtlich falsch aussehen lässt.

---

## 0. Die Entscheidung, präzise benannt

Bei ~30 Kunden wird die Datenlage so aussehen (das ist kein Pessimismus, das ist das Muster jedes Concierge-MVPs):

> **Der 99-€-Concierge-Service konvertiert hervorragend — Kunden lieben es, ein fertig kalkuliertes LV zurückzubekommen, und fragen nach mehr. Der Self-Service im Produkt konvertiert deutlich schwächer — der Meister vertraut der Tabelle weniger als dem Menschen dahinter. Gleichzeitig frisst jede Concierge-Kalkulation Stunden des Teams.**

Daraus folgt die Weggabelung: **Werden wir ein Kalkulationsbüro mit Software (Dienstleister skalieren: Kalkulatoren einstellen, Service als Hauptprodukt verkaufen) — oder erzwingen wir das Self-Service-Produkt (Concierge abschalten, auch wenn die Konversion einbricht)?** Beide Lager werden im Team gute Argumente haben. Beide Reinformen sind falsch.

## 1. Blickwinkel A — Schützen, was bereits funktioniert

Was nachweislich funktioniert, ist nicht „der Service" und nicht „das Produkt", sondern drei Dinge dahinter:

1. **Das Vertrauensritual.** Der Kunde zahlt, weil ein Mensch mit Bauverstand für das Ergebnis geradesteht. Das ist bei einem Produkt, dessen Fehler den Kunden existenziell treffen können (Schritt 1, Teardown), kein Übergangsphänomen, sondern Teil des Wertversprechens.
2. **Die Datenpipeline.** Jede Concierge-Kalkulation erzeugt den höchstwertigen Trainingsdatensatz überhaupt: maschinell vorgeschlagene Preise plus Korrektur eines Meisters plus späteres Zuschlags-Feedback. Den Service abzuschalten hieße, die Fütterung des einzigen Moats zu stoppen.
3. **Die Risiko-Umkehr im Vertrieb.** „99 €, Geld zurück" ist der Türöffner der gesamten Akquise-Maschine (Schritt 4). Ohne Concierge verliert der Verlierer-Brief seinen Schlusssatz.

Wer nur diesen Winkel einnimmt, stellt Kalkulator um Kalkulator ein — und wacht in drei Jahren als Ingenieurbüro mit 35 % Marge auf, bewertet wie ein Dienstleister, nicht wie eine Datenfirma.

## 2. Blickwinkel B — Wetten auf das, was funktionieren könnte

Die Wette des Geschäftsmodells war nie „Menschen kalkulieren schneller mit Software". Sie war: **Der Datensatz aus realen, korrigierten, regionalen Einheitspreisen mit Win/Loss-Signal wird das wertvollste Asset der Branche** (Schritt 1, $100M-Version). Diese Wette verlangt Volumen, und Volumen verlangt, dass die Grenzkosten einer Kalkulation gegen null gehen. Ein Kalkulationsbüro skaliert mit Personal; der Index skaliert mit Kunden. Nur der zweite Pfad rechtfertigt die Firma.

Wer nur diesen Winkel einnimmt, schaltet den Service ab, verliert das Vertrauensritual und die beste Datenquelle zugleich — und optimiert ein Produkt, dem der Markt noch nicht genug vertraut, um es allein zu benutzen.

## 3. Blickwinkel C — Eliminieren, was leise bremst

Bevor zwischen A und B entschieden wird, gehört auf den Tisch, was weder schützt noch wettet, sondern nur Zeit frisst:

- **GAEB-Sonderfall-Archäologie.** Stunden in kaputten GAEB-90-Exporten einzelner Architekturbüros. Regel: Zwei Stunden Parser-Arbeit pro Sonderfall, danach bekommt der Kunde eine Anleitung für den X83-Export — nicht jede Datei ist es wert, unterstützt zu werden.
- **Nicht-ICP-Kunden.** Der 80-Mann-Betrieb, der Sonderintegrationen will; der Elektro-Betrieb, der „auch mal probieren" möchte. Jeder davon zieht das Produkt vom Maler-Sweet-Spot weg (Schritt 2, Anti-Profil). Höflich ablehnen, Warteliste für Gewerk Nr. 2.
- **Feature-Wünsche unterhalb der Kernschleife.** Rechnungsmodul, Zeiterfassung, „könnt ihr auch Aufmaß?" — alles Dinge, die Hero/Plancraft besser können und die vom einzigen Job ablenken: LV rein, vertrauenswürdige Preise raus, Zuschlag gewinnen.

Dieses Eliminieren ist keine Fußnote: Es finanziert die Entscheidung. Die Stunden, die hier frei werden, sind genau die Stunden, die der Hybrid unten braucht.

## 4. Die Entscheidung des $100M-Founders

**Der Concierge-Service wird nicht skaliert und nicht abgeschaltet — er wird zur Trainingsabteilung des Produkts umgebaut.** Konkret:

1. **Jede Concierge-Kalkulation läuft ab sofort vollständig durch das Produkt.** Der Bau-Insider (Schritt 5) korrigiert nicht in Excel, sondern in der Zuschlag-Oberfläche. Jede Korrektur ist ein gelabelter Datenpunkt. Service-Arbeit, die nicht durchs Produkt läuft, ist verboten — ohne Ausnahme, denn sonst trainiert sie nichts.
2. **Die eine Steuerungs-Metrik der nächsten zwölf Monate:** **Anteil der Positionen, die der Prüfer unverändert übernimmt** (Autonomie-Quote). Sie macht aus dem Glaubenskrieg „Service vs. Produkt" eine Messreihe: Bei 60 % ist Concierge nötig, bei 85 % ist er ein Premium-Add-on, bei 95 % ist er Geschichte. Die Organisation streitet dann nicht mehr über Strategie, sondern verbessert eine Zahl.
3. **Preislogik dreht sich um:** Self-Service wird der Normalfall (Abo, Schritt 1), Concierge wird „Prüfung durch einen Meister" als sichtbar bepreister Aufpreis (+99 €/LV). Damit bezahlt der Kunde die Datenerzeugung, statt dass sie Marge frisst — und der Aufpreis erzeugt von allein den Sog Richtung Self-Service.
4. **Eliminierungs-Liste aus Blickwinkel C wird sofort umgesetzt** — sie ist die Kapazitätsquelle für Punkte 1–3.

**Warum jede andere Option im Rückblick offensichtlich falsch aussehen wird:** Das Kalkulationsbüro (reines A) hätte mit jedem neuen Kunden Personal aufgebaut und den Tag des skalierbaren Produkts nie erlebt — Dienstleister-Bewertung, Dienstleister-Decke. Der harte Produkt-Schnitt (reines B) hätte das Vertrauen und die Datenquelle abgeschnitten, bevor das Produkt gut genug war, beides zu ersetzen — Wachstumsknick genau im Konkurrenz-Zeitfenster von 18 Monaten. Der Hybrid ist nicht der bequeme Mittelweg, sondern der einzige Pfad, auf dem **jede Service-Stunde das Produkt besser macht und jede Produktverbesserung die Service-Stunden senkt** — eine Schleife, die sich selbst abschafft, und zwar genau in dem Tempo, das die Autonomie-Quote vorgibt. Der $100M-Founder entscheidet hier nicht zwischen zwei Zuständen, sondern installiert den Mechanismus, der den Übergang misst und erzwingt.

## 5. Übertragbares Entscheidungsraster (für jede künftige Weggabelung)

1. **Benenne, was wirklich funktioniert** — nicht die Oberfläche („der Service läuft"), sondern den Mechanismus dahinter (Vertrauen, Daten, Risiko-Umkehr).
2. **Benenne die ursprüngliche Wette** — und prüfe, welche Option auf sie einzahlt. Eine Firma, die ihre Wette wechselt, ohne es zu merken, ist die häufigste Form des Scheiterns nach Traction.
3. **Eliminiere zuerst** — die meisten „Entweder-oder"-Entscheidungen sind in Wahrheit Kapazitätsprobleme, die verschwinden, wenn das leise Bremsende gestrichen ist.
4. **Ersetze die Entscheidung durch eine Metrik mit Schwellwerten** — wo immer möglich, entscheidet danach die Messreihe, nicht das Meeting.

---

*Nächster Schritt (7 von 7): „Turn a startup into an empire" — die Skalierungs-Roadmap von erstem nennenswertem Umsatz bis 10 Mio. € Jahresumsatz.*
