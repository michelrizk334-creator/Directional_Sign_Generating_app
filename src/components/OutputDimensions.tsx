import { SignLayout } from "@/types/sign";

export function OutputDimensions({ layout }: { layout: SignLayout }) {
  return (
    <section className="dimension-grid">
      <div className="dimension-card">
        <span>Generated width</span>
        <strong>{layout.widthMM} mm</strong>
        <small>{layout.widthX.toFixed(2)}x</small>
      </div>
      <div className="dimension-card">
        <span>Generated height</span>
        <strong>{layout.heightMM} mm</strong>
        <small>{layout.heightX.toFixed(2)}x</small>
      </div>
      <div className="dimension-card">
        <span>Board thickness</span>
        <strong>{layout.boardThicknessMM} mm</strong>
        <small>{layout.boardThicknessX.toFixed(2)}x</small>
      </div>
      <div className="dimension-card">
        <span>Raised depth</span>
        <strong>{layout.raisedDepthMM} mm</strong>
        <small>{layout.raisedDepthX.toFixed(2)}x</small>
      </div>
    </section>
  );
}
