import { DestinationInput, GeneralSettings } from "@/types/sign";

export const defaultSettings: GeneralSettings = {
  xHeightMM: 200,
  layoutType: "4-10",
  boardThicknessX: 0.4,
  raisedDepthX: 0.05,
};

export const sampleDestinations: DestinationInput[] = [
  {
    id: "dest-1",
    arabic: "مدينة الكويت",
    english: "Kuwait City",
    arrowCode: "501",
    routeNumber: "40",
  },
  {
    id: "dest-2",
    arabic: "السالمية",
    english: "Salmiya",
    arrowCode: "510",
    routeNumber: "30",
  },
];
