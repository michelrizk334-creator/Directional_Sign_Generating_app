import { DestinationInput, GeneralSettings, SignLayoutType } from "@/types/sign";
import { DestinationEditor } from "./DestinationEditor";

function newDestination(): DestinationInput {
  return {
    id: `dest-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    arabic: "",
    english: "",
    arrowCode: "501",
    routeNumber: "",
  };
}

export function InputPanel({
  settings,
  destinations,
  onSettingsChange,
  onDestinationsChange,
}: {
  settings: GeneralSettings;
  destinations: DestinationInput[];
  onSettingsChange: (settings: GeneralSettings) => void;
  onDestinationsChange: (destinations: DestinationInput[]) => void;
}) {
  function updateDestination(index: number, destination: DestinationInput) {
    const updated = [...destinations];
    updated[index] = destination;
    onDestinationsChange(updated);
  }

  function removeDestination(index: number) {
    onDestinationsChange(destinations.filter((_, itemIndex) => itemIndex !== index));
  }

  return (
    <aside className="panel input-panel">
      <div className="panel-heading">
        <p className="eyebrow">Phase 1 MVP</p>
        <h2>Sign content</h2>
        <p>Enter what is inside the sign. Width and height are calculated automatically from x.</p>
      </div>

      <div className="settings-grid">
        <label>
          x height (mm)
          <input
            type="number"
            min="1"
            value={settings.xHeightMM}
            onChange={(event) => onSettingsChange({ ...settings, xHeightMM: Number(event.target.value) })}
          />
        </label>

        <label>
          Layout type
          <select
            value={settings.layoutType}
            onChange={(event) => onSettingsChange({ ...settings, layoutType: event.target.value as SignLayoutType })}
          >
            <option value="4-10">4-10 Stack-Up</option>
            <option value="4-11">4-11 Overhead</option>
            <option value="4-12">4-12 Chevron</option>
          </select>
        </label>

        <label>
          Board thickness (x)
          <input
            type="number"
            step="0.05"
            min="0"
            value={settings.boardThicknessX}
            onChange={(event) => onSettingsChange({ ...settings, boardThicknessX: Number(event.target.value) })}
          />
        </label>

        <label>
          Raised depth (x)
          <input
            type="number"
            step="0.01"
            min="0"
            value={settings.raisedDepthX}
            onChange={(event) => onSettingsChange({ ...settings, raisedDepthX: Number(event.target.value) })}
          />
        </label>
      </div>

      <div className="destination-list">
        {destinations.map((destination, index) => (
          <DestinationEditor
            key={destination.id}
            destination={destination}
            index={index}
            onChange={(updated) => updateDestination(index, updated)}
            onRemove={() => removeDestination(index)}
          />
        ))}
      </div>

      <button type="button" className="primary-button" onClick={() => onDestinationsChange([...destinations, newDestination()])}>
        Add destination
      </button>
    </aside>
  );
}
