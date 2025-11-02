import { PRICE_TABLE } from "./constants";
export interface PhotoItem {
  file: File;
  size: keyof typeof PRICE_TABLE; // "4x6" | "5x7" | "8x10"
}

