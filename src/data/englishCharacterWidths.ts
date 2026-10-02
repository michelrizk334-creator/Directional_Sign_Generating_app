/**
 * Phase 1 approximate English character tile widths in x-units.
 * Replace/refine from the official Kuwait Code font tiles and existing Excel workbook.
 */
export const englishCharacterWidths: Record<string, number> = {
  " ": 1.0,
  A: 1.15, B: 1.05, C: 1.1, D: 1.1, E: 0.95, F: 0.9, G: 1.15, H: 1.1, I: 0.45,
  J: 0.75, K: 1.05, L: 0.9, M: 1.35, N: 1.15, O: 1.2, P: 1.0, Q: 1.2, R: 1.05,
  S: 1.0, T: 0.95, U: 1.1, V: 1.05, W: 1.45, X: 1.05, Y: 1.0, Z: 1.0,
  a: 0.85, b: 0.9, c: 0.8, d: 0.9, e: 0.85, f: 0.55, g: 0.9, h: 0.9, i: 0.35,
  j: 0.4, k: 0.85, l: 0.35, m: 1.35, n: 0.9, o: 0.9, p: 0.9, q: 0.9, r: 0.6,
  s: 0.75, t: 0.55, u: 0.9, v: 0.8, w: 1.2, x: 0.8, y: 0.8, z: 0.75,
  "0": 0.95, "1": 0.65, "2": 0.95, "3": 0.95, "4": 1.0, "5": 0.95, "6": 0.95, "7": 0.9, "8": 0.95, "9": 0.95,
  "-": 0.6, "/": 0.6, ".": 0.35, ",": 0.35, "'": 0.25, "&": 1.1,
};
