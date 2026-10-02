import { getArrowByCode } from "@/data/kuwaitArrows";
import { toMM } from "@/lib/kuwaitCode/codeConstants";
import { LayoutElement, SignLayout } from "@/types/sign";

function dxfLine(x1: number, y1: number, x2: number, y2: number, layer = "GEOMETRY") {
  return `0
LINE
8
${layer}
10
${x1}
20
${-y1}
30
0
11
${x2}
21
${-y2}
31
0
`;
}

function dxfText(text: string, x: number, y: number, height: number, layer = "TEXT") {
  const safeText = text.replace(/\n/g, " ");
  return `0
TEXT
8
${layer}
10
${x}
20
${-y}
30
0
40
${height}
1
${safeText}
50
0
72
1
73
2
11
${x}
21
${-y}
31
0
`;
}

function dxfRect(x: number, y: number, w: number, h: number, layer = "GEOMETRY") {
  return [
    dxfLine(x, y, x + w, y, layer),
    dxfLine(x + w, y, x + w, y + h, layer),
    dxfLine(x + w, y + h, x, y + h, layer),
    dxfLine(x, y + h, x, y, layer),
  ].join("");
}

function dxfArrowPlaceholder(element: LayoutElement, xHeightMM: number) {
  const arrow = getArrowByCode(element.arrowCode ?? "501");
  const x = toMM(element.xX, xHeightMM);
  const y = toMM(element.yX, xHeightMM);
  const w = toMM(element.widthX, xHeightMM);
  const h = toMM(element.heightX, xHeightMM);
  const cx = x + w / 2;
  const cy = y + h / 2;

  // Phase 1: export a bounding rectangle and code label.
  // Later phase: replace with exact DXF polyline geometry for each arrow code.
  return [
    dxfRect(x, y, w, h, "ARROW_BOUNDING_BOX"),
    dxfText(`ARROW ${arrow.code}`, cx, cy, Math.max(h * 0.18, 60), "ARROW_LABELS"),
  ].join("");
}

export function exportDXF(layout: SignLayout): string {
  const header = `0
SECTION
2
HEADER
9
$INSUNITS
70
4
0
ENDSEC
0
SECTION
2
ENTITIES
`;
  const footer = `0
ENDSEC
0
EOF
`;

  let body = "";

  for (const element of layout.elements) {
    const x = toMM(element.xX, layout.xHeightMM);
    const y = toMM(element.yX, layout.xHeightMM);
    const w = toMM(element.widthX, layout.xHeightMM);
    const h = toMM(element.heightX, layout.xHeightMM);

    if (element.type === "board" || element.type === "border") {
      body += dxfRect(x, y, w, h, element.type.toUpperCase());
    }

    if (element.type === "text" && element.label) {
      body += dxfText(element.label, x + w / 2, y + h / 2, toMM(element.fontSizeX ?? 1, layout.xHeightMM), "TEXT");
    }

    if (element.type === "route" && element.label) {
      body += dxfRect(x, y, w, h, "ROUTE_BOX");
      body += dxfText(element.label, x + w / 2, y + h / 2, h * 0.6, "ROUTE_TEXT");
    }

    if (element.type === "arrow") {
      body += dxfArrowPlaceholder(element, layout.xHeightMM);
    }
  }

  return header + body + footer;
}

export function downloadTextFile(filename: string, content: string, mimeType = "text/plain") {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  anchor.click();
  URL.revokeObjectURL(url);
}
