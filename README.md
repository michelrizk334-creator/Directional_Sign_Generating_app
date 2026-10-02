# Directional Sign 3D Generator MVP

Phase 1 web app for a Kuwait Road Code-based directional sign generator.

The goal is to replace the two current Excel/VBA workflows with a modular web app:

1. **Text Measurement Engine**: calculates Arabic and English destination widths using x-based character rules.
2. **Kuwait Code Layout Engine**: creates sign layouts using the selected Kuwait guide-sign layout type.
3. **3D Geometry Engine**: treats the generated sign as a physical 3D board with thickness and raised elements.
4. **Export Engine**: provides a first basic DXF/JSON export foundation for AutoCAD workflows.

## Important Phase 1 rule

The user does **not** enter the final sign width and height.

Instead, the user enters:

- Arabic destination names
- English destination names
- arrow code number
- optional route number
- layout type 4-10 / 4-11 / 4-12
- x height in millimeters
- board thickness in x
- raised element depth in x

The app calculates:

- final sign width
- final sign height
- board thickness in mm
- raised element depth in mm
- 2D front layout
- simple 3D preview
- basic DXF placeholder export

## Source basis

The app is structured around the Kuwait Manual on Traffic Control Devices, Volume 2:

- Chapter 3: guide-sign arrows, route numbers, service signs, distance markers, diagrammatic arrows
- Chapter 4: text/font details and spacing rules
- Layout references: guide sign layouts 4-10, 4-11, and 4-12

All dimensions are first treated as multiples of `x`, where:

> `x = lower-case English text height`

After the user enters the value of `x` in millimeters, all dimensions are converted to full millimeter values.

## Current MVP limitations

This first version is intentionally approximate.

The following items are placeholders and should be refined in future phases:

- exact Arabic character widths
- exact English character widths
- exact arrow polygon geometry
- exact layout behavior for 4-10 / 4-11 / 4-12
- exact 3D extrusion / solid geometry
- production-ready DXF/DWG export
- BIM/Revit/Civil 3D export workflow

## Recommended next phases

### Phase 2

Replace approximate text measurement with exact data from the existing Arabic/English width Excel workbook.

### Phase 3

Digitize Kuwait Code arrow geometry so each arrow code has an exact vector polygon/path.

### Phase 4

Refine layouts 4-10, 4-11, and 4-12 using the Kuwait Code shop drawings.

### Phase 5

Improve CAD export from placeholder DXF to accurate CAD geometry.

### Phase 6

Add BIM-ready metadata and export workflow.

## Local setup

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Open:

```bash
http://localhost:3000
```

## GitHub upload

Upload the full folder to GitHub as a new repository, then run the commands above locally.

If using GitHub Codespaces or Vercel, the app should run as a normal Next.js project.
