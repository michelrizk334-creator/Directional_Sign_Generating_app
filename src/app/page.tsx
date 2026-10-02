"use client";

import { useMemo, useState } from "react";
import { defaultSettings, sampleDestinations } from "@/data/sampleSign";
import { generate3DSign } from "@/lib/geometry3d/generate3DSign";
import { generateSignLayout } from "@/lib/layout/generateSignLayout";
import { DestinationInput, GeneralSettings } from "@/types/sign";
import { ExportButtons } from "@/components/ExportButtons";
import { InputPanel } from "@/components/InputPanel";
import { OutputDimensions } from "@/components/OutputDimensions";
import { SignPreview2D } from "@/components/SignPreview2D";
import { SignPreview3D } from "@/components/SignPreview3D";

export default function Home() {
  const [settings, setSettings] = useState<GeneralSettings>(defaultSettings);
  const [destinations, setDestinations] = useState<DestinationInput[]>(sampleDestinations);

  const layout = useMemo(() => generateSignLayout(destinations, settings), [destinations, settings]);
  const model = useMemo(() => generate3DSign(layout), [layout]);

  return (
    <main className="app-shell">
      <header className="hero">
        <div>
          <p className="eyebrow">Kuwait Road Code · Phase 1</p>
          <h1>Directional Sign 3D Generator</h1>
          <p>
            Enter destinations and select arrows. The app calculates the sign size from x, generates a front layout,
            creates a first 3D board preview, and prepares CAD export data.
          </p>
        </div>
        <div className="hero-badge">Content in → x-rules → 3D sign</div>
      </header>

      <div className="workspace">
        <InputPanel
          settings={settings}
          destinations={destinations}
          onSettingsChange={setSettings}
          onDestinationsChange={setDestinations}
        />

        <div className="preview-stack">
          <OutputDimensions layout={layout} />

          <section className="panel preview-panel">
            <div className="panel-heading horizontal-heading">
              <div>
                <p className="eyebrow">2D front view</p>
                <h2>Generated sign layout</h2>
                <p>Width and height are calculated outputs, not user inputs.</p>
              </div>
              <div className="layout-pill">Layout {layout.layoutType}</div>
            </div>
            <SignPreview2D layout={layout} />
          </section>

          <SignPreview3D layout={layout} model={model} />

          <section className="panel export-panel">
            <div className="panel-heading horizontal-heading">
              <div>
                <p className="eyebrow">Export foundation</p>
                <h2>AutoCAD preparation</h2>
                <p>Phase 1 DXF export is a basic CAD placeholder. Exact arrow/text geometry will be refined next.</p>
              </div>
              <ExportButtons layout={layout} model={model} />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
