import { getArrowByCode } from "@/data/kuwaitArrows";
import { toMM, roundMM } from "@/lib/kuwaitCode/codeConstants";
import { layoutRules } from "@/lib/kuwaitCode/layoutRules";
import { spacingRules } from "@/lib/kuwaitCode/spacingRules";
import { measureText } from "@/lib/textMeasurement/measureText";
import {
  DestinationInput,
  DestinationLayout,
  GeneralSettings,
  LayoutElement,
  SignLayout,
} from "@/types/sign";

function routeBoxWidthX(routeNumber?: string): number {
  if (!routeNumber?.trim()) return 0;
  return Math.max(routeNumber.trim().length * 0.9 + spacingRules.routeBoxPaddingX * 2, 2.5);
}

export function generateSignLayout(
  destinations: DestinationInput[],
  settings: GeneralSettings,
): SignLayout {
  const rules = layoutRules[settings.layoutType];
  const safeDestinations = destinations.length > 0 ? destinations : [];

  const destinationLayouts: DestinationLayout[] = safeDestinations.map((destination) => {
    const arrow = getArrowByCode(destination.arrowCode);
    const arabicText = measureText(destination.arabic, "arabic");
    const englishText = measureText(destination.english, "english");
    const textBlockWidthX = Math.max(arabicText.widthX, englishText.widthX);
    const textBlockHeightX = arabicText.heightX + rules.textLineGapX + englishText.heightX;
    const routeWidthX = routeBoxWidthX(destination.routeNumber);
    const rowHeightX = Math.max(textBlockHeightX, arrow.heightX);
    const totalWidthX =
      arrow.widthX +
      rules.arrowTextGapX +
      textBlockWidthX +
      (routeWidthX > 0 ? rules.routeGapX + routeWidthX : 0);

    return {
      id: destination.id,
      input: destination,
      rowTopX: 0,
      rowHeightX,
      arabicText,
      englishText,
      totalWidthX,
    };
  });

  const contentWidthX = Math.max(...destinationLayouts.map((row) => row.totalWidthX), 8);
  const widthX = contentWidthX + rules.verticalBorderSpacingX * 2;
  const rowsHeightX = destinationLayouts.reduce((sum, row) => sum + row.rowHeightX, 0);
  const gapsHeightX = Math.max(destinationLayouts.length - 1, 0) * rules.rowGapX;
  const heightX = rowsHeightX + gapsHeightX + rules.horizontalBorderSpacingX * 2;

  const elements: LayoutElement[] = [
    {
      id: "board",
      type: "board",
      xX: 0,
      yX: 0,
      widthX,
      heightX,
      fill: "#006b3a",
      stroke: "#ffffff",
    },
    {
      id: "border",
      type: "border",
      xX: spacingRules.borderWidthX / 2,
      yX: spacingRules.borderWidthX / 2,
      widthX: widthX - spacingRules.borderWidthX,
      heightX: heightX - spacingRules.borderWidthX,
      fill: "none",
      stroke: "#ffffff",
    },
  ];

  let cursorY = rules.horizontalBorderSpacingX;

  for (const row of destinationLayouts) {
    const destination = row.input;
    const arrow = getArrowByCode(destination.arrowCode);
    const routeWidthX = routeBoxWidthX(destination.routeNumber);
    const textBlockWidthX = Math.max(row.arabicText.widthX, row.englishText.widthX);
    const textBlockHeightX = row.arabicText.heightX + rules.textLineGapX + row.englishText.heightX;

    row.rowTopX = cursorY;

    const arrowX = rules.verticalBorderSpacingX;
    const arrowY = cursorY + (row.rowHeightX - arrow.heightX) / 2;
    const textX = arrowX + arrow.widthX + rules.arrowTextGapX;
    const textY = cursorY + (row.rowHeightX - textBlockHeightX) / 2;
    const routeX = textX + textBlockWidthX + rules.routeGapX;
    const routeY = cursorY + (row.rowHeightX - 1.8) / 2;

    elements.push({
      id: `${destination.id}-arrow`,
      type: "arrow",
      xX: arrowX,
      yX: arrowY,
      widthX: arrow.widthX,
      heightX: arrow.heightX,
      arrowCode: arrow.code,
      fill: "#ffffff",
      rowId: row.id,
    });

    elements.push({
      id: `${destination.id}-arabic`,
      type: "text",
      xX: textX,
      yX: textY,
      widthX: textBlockWidthX,
      heightX: row.arabicText.heightX,
      label: row.arabicText.text,
      language: "arabic",
      fontSizeX: row.arabicText.fontSizeX,
      fill: "#ffffff",
      rowId: row.id,
    });

    elements.push({
      id: `${destination.id}-english`,
      type: "text",
      xX: textX,
      yX: textY + row.arabicText.heightX + rules.textLineGapX,
      widthX: textBlockWidthX,
      heightX: row.englishText.heightX,
      label: row.englishText.text,
      language: "english",
      fontSizeX: row.englishText.fontSizeX,
      fill: "#ffffff",
      rowId: row.id,
    });

    if (routeWidthX > 0) {
      elements.push({
        id: `${destination.id}-route`,
        type: "route",
        xX: routeX,
        yX: routeY,
        widthX: routeWidthX,
        heightX: 1.8,
        routeNumber: destination.routeNumber,
        label: destination.routeNumber,
        fill: "#ffffff",
        stroke: "#ffffff",
        rowId: row.id,
      });
    }

    cursorY += row.rowHeightX + rules.rowGapX;
  }

  return {
    layoutType: settings.layoutType,
    xHeightMM: settings.xHeightMM,
    widthX,
    heightX,
    boardThicknessX: settings.boardThicknessX,
    raisedDepthX: settings.raisedDepthX,
    widthMM: roundMM(toMM(widthX, settings.xHeightMM)),
    heightMM: roundMM(toMM(heightX, settings.xHeightMM)),
    boardThicknessMM: roundMM(toMM(settings.boardThicknessX, settings.xHeightMM)),
    raisedDepthMM: roundMM(toMM(settings.raisedDepthX, settings.xHeightMM)),
    elements,
    destinationLayouts,
  };
}
