import type { LvPosition } from "./types";

/**
 * Demo-Leistungsverzeichnis: Malerarbeiten Schulsanierung (verkürzt).
 * Entspricht typischen Positionen einer kommunalen Ausschreibung.
 */
export const DEMO_PROJEKT =
  "Sanierung Grundschule Lindenstraße — Los 4: Maler- und Trockenbauarbeiten";

export const DEMO_LV: LvPosition[] = [
  { oz: "01.01.0010", kurztext: "Baustelle einrichten und räumen", langtext: "Baustelleneinrichtung für Maler- und Trockenbauarbeiten einrichten, vorhalten und nach Abschluss räumen, inkl. aller Nebenleistungen.", menge: 1, einheit: "psch" },
  { oz: "01.01.0020", kurztext: "Bodenflächen abdecken", langtext: "Bodenflächen mit Abdeckvlies und Hartfaserplatten gegen Beschädigung und Verschmutzung schützen, nach Abschluss entfernen.", menge: 1850, einheit: "m2" },
  { oz: "01.02.0010", kurztext: "Alttapete entfernen", langtext: "Vorhandene Tapeten von Wandflächen vollständig entfernen, Untergrund reinigen und für Folgearbeiten vorbereiten, Entsorgung einkalkulieren.", menge: 1240, einheit: "m2" },
  { oz: "01.02.0020", kurztext: "Tiefgrund auftragen", langtext: "Saugende Untergründe mit lösemittelfreiem Tiefgrund grundieren.", menge: 1240, einheit: "m2" },
  { oz: "01.02.0030", kurztext: "Wandflächen spachteln Q3", langtext: "Wandflächen ganzflächig spachteln, Qualitätsstufe Q3 nach Merkblatt, schleifen und entstauben.", menge: 680, einheit: "m2" },
  { oz: "01.02.0040", kurztext: "Malervlies kleben und streichen", langtext: "Malervlies (Glattvlies) auf vorbereitete Wandflächen kleben und mit Dispersionsfarbe, zweimaliger Anstrich, scheuerbeständig Klasse 2, beschichten. Farbton nach Wahl AG.", menge: 1240, einheit: "m2" },
  { oz: "01.02.0050", kurztext: "Deckenflächen streichen", langtext: "Deckenflächen mit Dispersionsfarbe weiß matt, zweimaliger Anstrich, beschichten.", menge: 1850, einheit: "m2" },
  { oz: "01.03.0010", kurztext: "Türzargen lackieren", langtext: "Stahlzargen schleifen, grundieren und mit PU-Lack seidenmatt zweimal lackieren, Farbton RAL nach Wahl AG.", menge: 46, einheit: "St" },
  { oz: "01.03.0020", kurztext: "Türblätter lackieren", langtext: "Türblätter beidseitig schleifen, grundieren und mit PU-Lack seidenmatt lackieren.", menge: 46, einheit: "St" },
  { oz: "01.03.0030", kurztext: "Heizkörper lackieren", langtext: "Heizkörper und Rohrleitungen reinigen, anschleifen und mit Heizkörperlack weiß lackieren.", menge: 64, einheit: "St" },
  { oz: "02.01.0010", kurztext: "Metallständerwand doppelt beplankt", langtext: "Metallständerwand CW 100, beidseitig doppelt beplankt mit GKB 12,5 mm, inkl. Verspachtelung Q2, Anschlüsse dauerelastisch.", menge: 220, einheit: "m2" },
  { oz: "02.01.0020", kurztext: "Mineralwolle einlegen", langtext: "Mineralwolle-Dämmung 80 mm in Ständerwerk einlegen.", menge: 220, einheit: "m2" },
  { oz: "02.01.0030", kurztext: "Türöffnung mit UA-Profil", langtext: "Türöffnung in Ständerwand herstellen, Aussteifung mit UA-Profilen, für Türblatt 885 x 2110 mm.", menge: 8, einheit: "St" },
  { oz: "02.02.0010", kurztext: "GK-Decke abhängen", langtext: "Abgehängte Gipskartondecke, Abhanghöhe bis 40 cm, inkl. Unterkonstruktion CD 60/27, Beplankung GKB 12,5 mm, Verspachtelung Q2.", menge: 420, einheit: "m2" },
  { oz: "02.02.0020", kurztext: "Revisionsklappen einbauen", langtext: "Revisionsklappen 40 x 40 cm in GK-Decke einbauen, staubdicht.", menge: 12, einheit: "St" },
  { oz: "03.01.0010", kurztext: "Risse schließen", langtext: "Risse in Putzflächen aufweiten, schließen und überarbeiten, rissüberbrückend armieren.", menge: 85, einheit: "m" },
  { oz: "03.01.0020", kurztext: "Silikonfugen erneuern", langtext: "Schadhafte Anschlussfugen ausräumen und mit Silikon dauerelastisch neu verfugen.", menge: 140, einheit: "m" },
  { oz: "04.01.0010", kurztext: "Stundenlohnarbeiten Geselle", langtext: "Stundenlohnarbeiten Geselle, Abrechnung nur nach besonderer Anordnung des AG.", menge: 40, einheit: "h" },
];
