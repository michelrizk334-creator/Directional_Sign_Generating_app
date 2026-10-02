import { kuwaitArrows } from "@/data/kuwaitArrows";
import { ArrowCard } from "./ArrowCard";

export function ArrowSelector({
  value,
  onChange,
}: {
  value: string;
  onChange: (code: string) => void;
}) {
  return (
    <div className="arrow-selector">
      {kuwaitArrows.map((arrow) => (
        <ArrowCard
          key={arrow.code}
          arrow={arrow}
          selected={value === arrow.code}
          onSelect={() => onChange(arrow.code)}
        />
      ))}
    </div>
  );
}
