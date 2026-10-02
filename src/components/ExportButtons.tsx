import { exportDXF, downloadTextFile } from "@/lib/export/exportDXF";
import { SignLayout, SignModel3D } from "@/types/sign";

export function ExportButtons({ layout, model }: { layout: SignLayout; model: SignModel3D }) {
  function downloadLayoutJson() {
    downloadTextFile("directional-sign-layout.json", JSON.stringify({ layout, model }, null, 2), "application/json");
  }

  function downloadDxf() {
    downloadTextFile("directional-sign-phase-1.dxf", exportDXF(layout), "application/dxf");
  }

  return (
    <div className="export-actions">
      <button type="button" className="secondary-button" onClick={downloadLayoutJson}>
        Export layout JSON
      </button>
      <button type="button" className="secondary-button" onClick={downloadDxf}>
        Export basic DXF
      </button>
    </div>
  );
}
