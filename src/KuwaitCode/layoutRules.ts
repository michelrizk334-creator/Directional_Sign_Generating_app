import { SignLayoutType } from "@/types/sign";
import { spacingRules } from "./spacingRules";

export type LayoutRuleSet = {
  name: string;
  verticalBorderSpacingX: number;
  horizontalBorderSpacingX: number;
  rowGapX: number;
  arrowTextGapX: number;
  textLineGapX: number;
  routeGapX: number;
};

export const layoutRules: Record<SignLayoutType, LayoutRuleSet> = {
  "4-10": {
    name: "Guide Signs Shop Drawing Details - Stack-Up Type",
    verticalBorderSpacingX: spacingRules.verticalBorderToLegendStackX,
    horizontalBorderSpacingX: spacingRules.horizontalBorderToLegendX,
    rowGapX: spacingRules.rowGapX,
    arrowTextGapX: spacingRules.textOrNumeralToArrowLogoCardinalX,
    textLineGapX: 0.35,
    routeGapX: spacingRules.textToNumeralX,
  },
  "4-11": {
    name: "Guide Signs Shop Drawing Details - Overhead Type",
    verticalBorderSpacingX: spacingRules.verticalBorderToLegendHorizontalX,
    horizontalBorderSpacingX: spacingRules.horizontalBorderToLegendX,
    rowGapX: 0.65,
    arrowTextGapX: spacingRules.textOrNumeralToArrowLogoCardinalX,
    textLineGapX: 0.35,
    routeGapX: spacingRules.textToNumeralX,
  },
  "4-12": {
    name: "Guide Signs Shop Drawing Details - Chevron Type",
    verticalBorderSpacingX: spacingRules.verticalBorderToLegendHorizontalX,
    horizontalBorderSpacingX: spacingRules.horizontalBorderToLegendX,
    rowGapX: 0.75,
    arrowTextGapX: spacingRules.textOrNumeralToArrowLogoCardinalX,
    textLineGapX: 0.35,
    routeGapX: spacingRules.textToNumeralX,
  },
};
