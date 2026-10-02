import { arabicCharacterWidths } from "@/data/arabicCharacterWidths";
import { arabicLigatures } from "@/data/arabicLigatures";
import { englishCharacterWidths } from "@/data/englishCharacterWidths";
import { codeConstants } from "@/lib/kuwaitCode/codeConstants";
import { Language, TextMeasurement } from "@/types/sign";

function measureArabic(text: string): number {
  let index = 0;
  let width = 0;

  while (index < text.length) {
    const ligature = arabicLigatures.find((item) => text.startsWith(item.sequence, index));

    if (ligature) {
      width += ligature.widthX;
      index += ligature.sequence.length;
      continue;
    }

    const char = text[index];
    width += arabicCharacterWidths[char] ?? 1.05;
    index += 1;
  }

  return width;
}

function measureEnglish(text: string): number {
  return Array.from(text).reduce((sum, char) => {
    return sum + (englishCharacterWidths[char] ?? 0.9);
  }, 0);
}

export function measureText(text: string, language: Language): TextMeasurement {
  const cleanedText = text.trim();
  const widthX = language === "arabic" ? measureArabic(cleanedText) : measureEnglish(cleanedText);

  return {
    text: cleanedText,
    language,
    widthX: Math.max(widthX, 0.1),
    heightX: language === "arabic" ? codeConstants.arabicTileHeightX : codeConstants.englishTileHeightX,
    fontSizeX: language === "arabic" ? codeConstants.alefHeightX : codeConstants.upperCaseEnglishHeightX,
  };
}
