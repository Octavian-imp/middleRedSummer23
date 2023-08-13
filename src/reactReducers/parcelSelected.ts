import { ILoadInfo } from "@/components/tables/arrivalShipment/rowTable/types";

export const addSelect = "addSelect";
export const decreaseSelect = "decreaseSelect";
export const setDefault = "setDefault";

export type TDefaultStateSelectParcel = {
    selected: number;
    totalWeight: number;
    parcels: Omit<ILoadInfo, "tierInfo">[];
};

export type TActionSelectParcel = {
    type: string;
    payload: {
        totalWeight: number;
        parcel?: Omit<ILoadInfo, "tierInfo">;
        parcelNumber?: string;
    };
};

export const defaultStateSelectParcel: TDefaultStateSelectParcel = {
    selected: 0,
    totalWeight: 0,
    parcels: [],
};

export function reducerSelectParcel(
    state = defaultStateSelectParcel,
    action: TActionSelectParcel
): TDefaultStateSelectParcel {
    switch (action.type) {
        case addSelect:
            if (typeof action.payload.parcel === "undefined") return state;
            return {
                selected: state.selected + 1,
                totalWeight: state.totalWeight + action.payload.totalWeight,
                parcels: [...state.parcels, action.payload.parcel],
            };
        case decreaseSelect:
            if (
                state.totalWeight <= 0 ||
                state.totalWeight - action.payload.totalWeight < 0
            ) {
                return state;
            }
            return {
                ...state,
                selected: state.selected - 1,
                totalWeight: state.totalWeight - action.payload.totalWeight,
                parcels: state.parcels.filter(
                    (parcel) =>
                        parcel.parcelNumber !== action.payload.parcelNumber
                ),
            };
        case setDefault:
            return defaultStateSelectParcel;
        default:
            return state;
    }
}
