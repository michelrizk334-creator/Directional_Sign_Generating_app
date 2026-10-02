import { ArrowDefinition } from "@/types/sign";

/**
 * Phase 1 Kuwait Guide Sign arrow library.
 * Each item has a visible preview in the UI and a geometry key used by the layout engine.
 * The final version should replace simplified geometry with exact polygon/path data from the code sheets.
 */
export const kuwaitArrows: ArrowDefinition[] = [
  {
    code: "501",
    name: "Straight Up",
    category: "Guide Arrow",
    direction: "UP",
    widthX: 2.6,
    heightX: 3.0,
    description: "Standard upward guide arrow.",
    sourceReference: "Kuwait Code Vol. 2 Chapter 3, Guide Signs",
  },
  {
    code: "502",
    name: "Straight Left",
    category: "Guide Arrow",
    direction: "LEFT",
    widthX: 3.0,
    heightX: 2.3,
    description: "Standard left guide arrow.",
    sourceReference: "Kuwait Code Vol. 2 Chapter 3, Guide Signs",
  },
  {
    code: "503",
    name: "Straight Right",
    category: "Guide Arrow",
    direction: "RIGHT",
    widthX: 3.0,
    heightX: 2.3,
    description: "Standard right guide arrow.",
    sourceReference: "Kuwait Code Vol. 2 Chapter 3, Guide Signs",
  },
  {
    code: "504",
    name: "Diagonal Up-Left",
    category: "Guide Arrow",
    direction: "UP_LEFT",
    widthX: 3.2,
    heightX: 2.5,
    description: "Diagonal up-left guide arrow.",
    sourceReference: "Kuwait Code Vol. 2 Chapter 3, Guide Signs",
  },
  {
    code: "505",
    name: "Diagonal Up-Right",
    category: "Guide Arrow",
    direction: "UP_RIGHT",
    widthX: 3.2,
    heightX: 2.5,
    description: "Diagonal up-right guide arrow.",
    sourceReference: "Kuwait Code Vol. 2 Chapter 3, Guide Signs",
  },
  {
    code: "506",
    name: "Curved Right",
    category: "Guide Arrow",
    direction: "CURVE_RIGHT",
    widthX: 3.0,
    heightX: 3.5,
    description: "Curved right guide arrow.",
    sourceReference: "Kuwait Code Vol. 2 Chapter 3, Guide Signs",
  },
  {
    code: "507",
    name: "Curved Left",
    category: "Guide Arrow",
    direction: "CURVE_LEFT",
    widthX: 3.0,
    heightX: 3.5,
    description: "Curved left guide arrow.",
    sourceReference: "Kuwait Code Vol. 2 Chapter 3, Guide Signs",
  },
  {
    code: "508",
    name: "U-Turn",
    category: "Guide Arrow",
    direction: "U_TURN",
    widthX: 4.0,
    heightX: 4.0,
    description: "U-turn guide arrow.",
    sourceReference: "Kuwait Code Vol. 2 Chapter 3, Guide Signs",
  },
  {
    code: "510",
    name: "Diagonal Up-Right Large",
    category: "Guide Arrow",
    direction: "UP_RIGHT",
    widthX: 4.0,
    heightX: 2.5,
    description: "Large diagonal up-right arrow, shown in Kuwait Code sheet 3-5.",
    sourceReference: "Kuwait Code Vol. 2 Chapter 3, Guide Signs, arrow 510",
  },
];

export function getArrowByCode(code: string): ArrowDefinition {
  return kuwaitArrows.find((arrow) => arrow.code === code) ?? kuwaitArrows[0];
}
