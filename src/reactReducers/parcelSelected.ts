export const addSelect = "addSelect";
export const decreaseSelect = "decreaseSelect";

export type TDefaultStateSelectParcel = {
    selected: number;
    totalWeight: number;
    parcelIds: string[];
};

export const defaultStateSelectParcel: TDefaultStateSelectParcel = {
    selected: 0,
    totalWeight: 0,
    parcelIds: [],
};

export function reducerSelectParcel(
    state = defaultStateSelectParcel,
    action: {
        type: string;
        payload: Omit<TDefaultStateSelectParcel, "selected" | "parcelIds"> & {
            parcelNumber: string;
        };
    }
) {
    switch (action.type) {
        case addSelect:
            return {
                selected: state.selected + 1,
                totalWeight: state.totalWeight + action.payload.totalWeight,
                parcelIds: [...state.parcelIds, action.payload.parcelNumber],
            };
        case decreaseSelect:
            if (
                typeof action.payload.parcelNumber !== "string" ||
                state.totalWeight <= 0 ||
                state.totalWeight - action.payload.totalWeight < 0
            ) {
                return state;
            }
            return {
                selected: state.selected - 1,
                totalWeight: state.totalWeight - action.payload.totalWeight,
                parcelIds: state.parcelIds.splice(
                    state.parcelIds.indexOf(action.payload.parcelNumber)
                ),
            };
        default:
            return state;
    }
}
