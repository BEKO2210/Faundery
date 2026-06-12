import type { KalkulationsErgebnis } from "./types";

export type UstModus = "regel" | "13b";

/**
 * Erzeugt eine GAEB-DA-XML-Angebotsdatei (DA84: Angebotsabgabe) mit den
 * kalkulierten Einheitspreisen. Struktur nach GAEB DA XML 3.2 (Award/BoQ),
 * flache Positionsliste — von gängigen AVA-Systemen und Vergabeportalen
 * als Beta-Abgabedatei lesbar; maßgeblich bleibt das geprüfte Angebot.
 */
export function erzeugeX84(
  ergebnis: KalkulationsErgebnis,
  ustModus: UstModus
): string {
  const heute = new Date().toISOString().slice(0, 10);
  const netto = ergebnis.positionen.reduce(
    (s, p) => s + p.menge * p.einheitspreis,
    0
  );
  const ustSatz = ustModus === "13b" ? 0 : 19;
  const ust = netto * (ustSatz / 100);

  const items = ergebnis.positionen
    .map((p) => {
      const gp = p.menge * p.einheitspreis;
      return [
        `        <Item RNoPart="${xml(p.oz)}">`,
        `          <Qty>${num(p.menge, 3)}</Qty>`,
        `          <QU>${xml(p.einheit)}</QU>`,
        `          <Description>`,
        `            <CompleteText>`,
        `              <DetailTxt><Text><p><span>${xml(p.langtext || p.kurztext)}</span></p></Text></DetailTxt>`,
        `              <OutlineText><OutlTxt><TextOutlTxt><p><span>${xml(p.kurztext)}</span></p></TextOutlTxt></OutlTxt></OutlineText>`,
        `            </CompleteText>`,
        `          </Description>`,
        `          <UP>${num(p.einheitspreis, 2)}</UP>`,
        `          <IT>${num(gp, 2)}</IT>`,
        `        </Item>`,
      ].join("\n");
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<GAEB xmlns="http://www.gaeb.de/GAEB_DA_XML/DA84/3.2">
  <GAEBInfo>
    <Version>3.2</Version>
    <Date>${heute}</Date>
    <ProgSystem>Zuschlag</ProgSystem>
  </GAEBInfo>
  <PrjInfo>
    <LblPrj>${xml(ergebnis.projekt)}</LblPrj>
  </PrjInfo>
  <Award>
    <DP>84</DP>
    <AwardInfo>
      <Cur>EUR</Cur>
      <CurLbl>Euro</CurLbl>${
        ustModus === "13b"
          ? "\n      <!-- Steuerschuldnerschaft des Leistungsempfaengers gem. § 13b UStG -->"
          : ""
      }
    </AwardInfo>
    <BoQ>
      <BoQInfo>
        <Name>${xml(ergebnis.projekt)}</Name>
        <Date>${heute}</Date>
      </BoQInfo>
      <BoQBody>
        <Itemlist>
${items}
        </Itemlist>
      </BoQBody>
    </BoQ>
    <TotalPrice>
      <Total>${num(netto, 2)}</Total>
      <VAT>${num(ustSatz, 1)}</VAT>
      <TotalVAT>${num(ust, 2)}</TotalVAT>
      <TotalGross>${num(netto + ust, 2)}</TotalGross>
    </TotalPrice>
  </Award>
</GAEB>
`;
}

function xml(s: string): string {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function num(n: number, stellen: number): string {
  return n.toFixed(stellen);
}
