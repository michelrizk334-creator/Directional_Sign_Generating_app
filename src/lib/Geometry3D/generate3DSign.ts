import { toMM, roundMM } from "@/lib/kuwaitCode/codeConstants";
import { ExtrudedPart, SignLayout, SignModel3D } from "@/types/sign";

export function generate3DSign(layout: SignLayout): SignModel3D {
  const parts: ExtrudedPart[] = [];

  for (const element of layout.elements) {
    const isBoard = element.type === "board";
    const isBorder = element.type === "border";
    const depthMM = isBoard ? layout.boardThicknessMM : layout.raisedDepthMM;
    const zMM = isBoard ? 0 : layout.boardThicknessMM;

    parts.push({
      id: `3d-${element.id}`,
      sourceElementId: element.id,
      type: element.type,
      xMM: roundMM(toMM(element.xX, layout.xHeightMM)),
      yMM: roundMM(toMM(element.yX, layout.xHeightMM)),
      zMM,
      widthMM: roundMM(toMM(element.widthX, layout.xHeightMM)),
      heightMM: roundMM(toMM(element.heightX, layout.xHeightMM)),
      depthMM: isBorder ? layout.raisedDepthMM : depthMM,
      label: element.label,
    });
  }

  return {
    widthMM: layout.widthMM,
    heightMM: layout.heightMM,
    depthMM: layout.boardThicknessMM + layout.raisedDepthMM,
    parts,
  };
}
