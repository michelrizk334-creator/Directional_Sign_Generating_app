import { DestinationInput } from "@/types/sign";
import { ArrowSelector } from "./ArrowSelector";

export function DestinationEditor({
  destination,
  index,
  onChange,
  onRemove,
}: {
  destination: DestinationInput;
  index: number;
  onChange: (destination: DestinationInput) => void;
  onRemove: () => void;
}) {
  return (
    <div className="destination-card">
      <div className="destination-card-header">
        <h3>Destination {index + 1}</h3>
        <button type="button" className="small-button danger" onClick={onRemove}>Remove</button>
      </div>

      <label>
        Arabic destination
        <input
          dir="rtl"
          value={destination.arabic}
          onChange={(event) => onChange({ ...destination, arabic: event.target.value })}
          placeholder="مدينة الكويت"
        />
      </label>

      <label>
        English destination
        <input
          value={destination.english}
          onChange={(event) => onChange({ ...destination, english: event.target.value })}
          placeholder="Kuwait City"
        />
      </label>

      <label>
        Optional route number
        <input
          value={destination.routeNumber ?? ""}
          onChange={(event) => onChange({ ...destination, routeNumber: event.target.value })}
          placeholder="40"
        />
      </label>

      <div className="field-block">
        <div className="field-title">Select Kuwait Code arrow</div>
        <ArrowSelector
          value={destination.arrowCode}
          onChange={(arrowCode) => onChange({ ...destination, arrowCode })}
        />
      </div>
    </div>
  );
}
