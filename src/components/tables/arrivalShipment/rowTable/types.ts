import { EStatuses } from "@/global/EStatuses";

export type IRowTable = {
    destStart: string;
    destEnd: string;
    shipNumber: string;
    truck: string;
    totalWeight: number;
    maxWeight: number;
    status: { text: "delayed" | "on way" | "arrived"; code: EStatuses };
    depDate: Date;
    arrDate: Date;
    department: number;
};

export interface ICellsInfo {
    id: number;
    maxWeight: number;
    isAvailable: boolean;
}

export interface ILoadInfo {
    tierInfo: { name: string; idCell: number };
    parcelNumber: string;
    weight: number;
    admissionDate: string;
}

export type IRowTableSeed = {
    destStart: string;
    destEnd: string;
    shipNumber: string;
    truck: string;
    totalWeight: number;
    maxWeight: number;
    status: { text: "delayed" | "on way" | "arrived"; code: EStatuses };
    depDate: string;
    arrDate: string;
    department: string;
    tiersInfo: { name: string; cells: ICellsInfo[] }[];
    loadInfo: ILoadInfo[];
};
