import { ArrowDefinition } from "@/types/sign";
import { ArrowPreview } from "./ArrowPreview";

export function ArrowCard({
  arrow,
  selected,
  onSelect,
}: {
  arrow: ArrowDefinition;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      className={`arrow-card ${selected ? "arrow-card-selected" : ""}`}
      onClick={onSelect}
      title={arrow.description}
    >
      <div className="arrow-card-code">{arrow.code}</div>
      <ArrowPreview code={arrow.code} className="arrow-card-icon" />
      <div className="arrow-card-name">{arrow.name}</div>
    </button>
  );
}
