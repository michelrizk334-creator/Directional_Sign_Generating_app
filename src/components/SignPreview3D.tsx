import type { CSSProperties } from "react";
import { SignLayout, SignModel3D } from "@/types/sign";
import { SignPreview2D } from "./SignPreview2D";

export function SignPreview3D({ layout, model }: { layout: SignLayout; model: SignModel3D }) {
  return (
    <section className="panel preview-panel">
      <div className="panel-heading horizontal-heading">
        <div>
          <p className="eyebrow">3D source of truth</p>
          <h2>Generated 3D sign preview</h2>
          <p>The front face is generated from x-based layout rules. Thickness is shown as a physical 3D board.</p>
        </div>
        <div className="depth-pill">Depth: {model.depthMM} mm</div>
      </div>

      <div className="preview-stage">
        <div className="sign-3d" style={{ "--depth": `${Math.min(model.depthMM / 10, 24)}px` } as CSSProperties}>
          <div className="sign-3d-front">
            <SignPreview2D layout={layout} compact />
          </div>
          <div className="sign-3d-side" />
          <div className="sign-3d-bottom" />
        </div>
      </div>
    </section>
  );
}
