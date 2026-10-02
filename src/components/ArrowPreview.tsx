import { getArrowByCode } from "@/data/kuwaitArrows";
import { ArrowDirection } from "@/types/sign";

function rotationForDirection(direction: ArrowDirection): number {
  switch (direction) {
    case "RIGHT": return 0;
    case "UP_RIGHT": return -45;
    case "UP": return -90;
    case "UP_LEFT": return -135;
    case "LEFT": return 180;
    case "DOWN_LEFT": return 135;
    case "DOWN": return 90;
    case "DOWN_RIGHT": return 45;
    default: return 0;
  }
}

function curvedPath(direction: ArrowDirection) {
  if (direction === "U_TURN") {
    return "M72 22 C42 22 28 39 28 55 L28 66 L15 66 L35 88 L56 66 L43 66 L43 55 C43 47 50 39 60 39 L72 39 Z";
  }

  if (direction === "CURVE_LEFT") {
    return "M72 72 C50 72 35 56 35 38 L35 32 L22 32 L43 12 L64 32 L50 32 L50 38 C50 49 59 57 72 57 Z";
  }

  return "M28 72 C50 72 65 56 65 38 L65 32 L78 32 L57 12 L36 32 L50 32 L50 38 C50 49 41 57 28 57 Z";
}

export function ArrowPreview({ code, className = "" }: { code: string; className?: string }) {
  const arrow = getArrowByCode(code);
  const isCurved = ["CURVE_RIGHT", "CURVE_LEFT", "U_TURN"].includes(arrow.direction);

  return (
    <svg viewBox="0 0 100 100" className={className} aria-label={`Arrow ${code}`} role="img">
      {isCurved ? (
        <path d={curvedPath(arrow.direction)} fill="currentColor" />
      ) : (
        <g transform={`rotate(${rotationForDirection(arrow.direction)} 50 50)`}>
          <polygon points="8,39 58,39 58,20 94,50 58,80 58,61 8,61" fill="currentColor" />
        </g>
      )}
    </svg>
  );
}
