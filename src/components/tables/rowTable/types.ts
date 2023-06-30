import { EStatuses } from "@/global/EStatuses";

export interface IRowTable {
  destStart: string;
  destEnd: string;
  shipNumber: string;
  truck: string;
  totalWeight?: number | null;
  status: { text: "delayed" | "on way" | "arrived"; code: EStatuses };
  depDate?: Date | "-";
  arrDate?: Date | "-";
}
