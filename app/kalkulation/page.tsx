"use client";

import { Suspense, useCallback, useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import type { KalkulationsErgebnis, KalkuliertePosition } from "@/lib/types";

const EUR = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
});
const ZAHL = new Intl.NumberFormat("de-DE", { maximumFractionDigits: 3 });

export default function KalkulationSeite() {
  return (
    <Suspense fallback={<main className="tool container"><p className="status">Lade…</p></main>}>
      <Kalkulation />
    </Suspense>
  );
}

function Kalkulation() {
  const searchParams = useSearchParams();
  const [laedt, setLaedt] = useState(false);
  const [fehler, setFehler] = useState<string | null>(null);
  const [ergebnis, setErgebnis] = useState<KalkulationsErgebnis | null>(null);
  const [drag, setDrag] = useState(false);
  const dateiInput = useRef<HTMLInputElement>(null);
  const demoGestartet = useRef(false);

  const kalkuliere = useCallback(async (formData: FormData) => {
    setLaedt(true);
    setFehler(null);
    try {
      const res = await fetch("/api/kalkuliere", { method: "POST", body: formData });
      const daten = await res.json();
      if (!res.ok) throw new Error(daten.fehler ?? `Fehler ${res.status}`);
      setErgebnis(daten as KalkulationsErgebnis);
    } catch (err) {
      setFehler(err instanceof Error ? err.message : "Unbekannter Fehler.");
      setErgebnis(null);
    } finally {
      setLaedt(false);
    }
  }, []);

  const starteDemo = useCallback(() => {
    const fd = new FormData();
    fd.set("demo", "1");
    void kalkuliere(fd);
  }, [kalkuliere]);

  useEffect(() => {
    if (searchParams.get("demo") === "1" && !demoGestartet.current) {
      demoGestartet.current = true;
      starteDemo();
    }
  }, [searchParams, starteDemo]);

  const verarbeiteDatei = (datei: File | undefined) => {
    if (!datei) return;
    const fd = new FormData();
    fd.set("datei", datei);
    void kalkuliere(fd);
  };

  const setzePreis = (index: number, wert: string) => {
    if (!ergebnis) return;
    const preis = parseFloat(wert.replace(",", "."));
    const positionen = ergebnis.positionen.map((p, i) =>
      i === index ? { ...p, einheitspreis: isNaN(preis) ? 0 : preis } : p
    );
    setErgebnis({ ...ergebnis, positionen });
  };

  const netto = ergebnis
    ? ergebnis.positionen.reduce((s, p) => s + p.menge * p.einheitspreis, 0)
    : 0;
  const ust = netto * 0.19;

  return (
    <main className="tool container">
      <h1>LV kalkulieren</h1>
      <p className="sub">
        GAEB-XML (.x81–.x84), GAEB 90 (.d81–.d86) oder CSV
        (oz;menge;einheit;text) hochladen.
      </p>

      <div
        className={`upload-card${drag ? " drag" : ""}`}
        onDragOver={(e) => { e.preventDefault(); setDrag(true); }}
        onDragLeave={() => setDrag(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDrag(false);
          verarbeiteDatei(e.dataTransfer.files[0]);
        }}
      >
        <p>Leistungsverzeichnis hierher ziehen oder auswählen</p>
        <div className="upload-actions">
          <button
            className="btn btn-primary"
            disabled={laedt}
            onClick={() => dateiInput.current?.click()}
          >
            Datei auswählen
          </button>
          <button className="btn btn-ghost" disabled={laedt} onClick={starteDemo}>
            Beispiel-LV laden
          </button>
        </div>
        <input
          ref={dateiInput}
          type="file"
          accept=".x81,.x82,.x83,.x84,.x85,.x86,.d81,.d82,.d83,.d84,.d85,.d86,.csv,.xml"
          style={{ display: "none" }}
          onChange={(e) => verarbeiteDatei(e.target.files?.[0])}
        />
      </div>

      {laedt && <p className="status">Kalkuliere Positionen — einen Moment…</p>}
      {fehler && <p className="status error">{fehler}</p>}

      {ergebnis && (
        <>
          {ergebnis.hinweise.map((h, i) => (
            <div className="hinweis" key={i}>{h}</div>
          ))}

          <div className="ergebnis-kopf">
            <h2>{ergebnis.projekt}</h2>
            <span className="engine-badge">
              {ergebnis.positionen.length} Positionen ·{" "}
              {ergebnis.engine === "ki"
                ? "KI-Kalkulation (Claude)"
                : "Referenzkatalog-Kalkulation"}
            </span>
          </div>

          <table className="lv">
            <thead>
              <tr>
                <th>OZ</th>
                <th>Leistung</th>
                <th className="num">Menge</th>
                <th>Einheit</th>
                <th className="num">EP netto</th>
                <th className="num">GP netto</th>
                <th>Konfidenz</th>
              </tr>
            </thead>
            <tbody>
              {ergebnis.positionen.map((p, i) => (
                <Zeile key={p.oz + i} p={p} onPreis={(w) => setzePreis(i, w)} />
              ))}
            </tbody>
          </table>

          <div className="summen">
            <div className="zeile">
              <span>Angebotssumme netto</span>
              <span>{EUR.format(netto)}</span>
            </div>
            <div className="zeile">
              <span>zzgl. 19 % USt.</span>
              <span>{EUR.format(ust)}</span>
            </div>
            <div className="zeile total">
              <span>Angebotssumme brutto</span>
              <span>{EUR.format(netto + ust)}</span>
            </div>
          </div>

          <div className="export-row">
            <button className="btn btn-primary" onClick={() => exportiereCsv(ergebnis)}>
              CSV exportieren
            </button>
            <button className="btn btn-ghost" onClick={() => window.print()}>
              Angebot drucken / PDF
            </button>
          </div>
        </>
      )}
    </main>
  );
}

function Zeile({
  p,
  onPreis,
}: {
  p: KalkuliertePosition;
  onPreis: (wert: string) => void;
}) {
  return (
    <tr>
      <td className="oz">{p.oz}</td>
      <td className="text-cell">
        <div className="kurz">{p.kurztext}</div>
        <div className="quelle">{p.quelle}</div>
      </td>
      <td className="num">{ZAHL.format(p.menge)}</td>
      <td>{p.einheit}</td>
      <td className="num">
        <input
          className="ep"
          defaultValue={p.einheitspreis.toFixed(2)}
          onBlur={(e) => onPreis(e.target.value)}
          aria-label={`Einheitspreis Position ${p.oz}`}
        />
      </td>
      <td className="num">{EUR.format(p.menge * p.einheitspreis)}</td>
      <td>
        <span className={`badge ${p.konfidenz}`}>{p.konfidenz}</span>
      </td>
    </tr>
  );
}

function exportiereCsv(ergebnis: KalkulationsErgebnis) {
  const kopf = "OZ;Leistung;Menge;Einheit;EP netto;GP netto;Konfidenz";
  const zeilen = ergebnis.positionen.map((p) =>
    [
      p.oz,
      `"${p.kurztext.replaceAll('"', "'")}"`,
      String(p.menge).replace(".", ","),
      p.einheit,
      p.einheitspreis.toFixed(2).replace(".", ","),
      (p.menge * p.einheitspreis).toFixed(2).replace(".", ","),
      p.konfidenz,
    ].join(";")
  );
  const blob = new Blob(["﻿" + [kopf, ...zeilen].join("\r\n")], {
    type: "text/csv;charset=utf-8",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "zuschlag-kalkulation.csv";
  a.click();
  URL.revokeObjectURL(url);
}
