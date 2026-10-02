/**
 * Kuwait Manual on Traffic Control Devices - Volume 2, Chapter 4 basis.
 * All values are stored in x-units, where x = lower-case English text height.
 * Phase 1 uses these as rule constants; later phases should refine all geometry
 * against the official shop drawings.
 */
export const codeConstants = {
  lowerCaseEnglishHeightX: 1.0,
  upperCaseEnglishHeightX: 1.4,
  englishStrokeWidthX: 0.2,
  englishTileHeightX: 2.0,
  alefHeightX: 1.4,
  arabicStrokeWidthX: 0.3,
  arabicTileHeightX: 2.8,
  backgroundGridWidthX: 0.2,
};

export function toMM(valueInX: number, xHeightMM: number): number {
  return valueInX * xHeightMM;
}

export function roundMM(value: number): number {
  return Math.round(value * 10) / 10;
}
