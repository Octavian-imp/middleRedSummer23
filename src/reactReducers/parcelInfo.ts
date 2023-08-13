export const add_parcel = "add_parcel";
export const delete_parcels = "delete_parcels";

export type defaultStateParcelInfo = {
    tierInfo: { id: number; name: string };
    totalWeight: number;
    idParcels: number[];
};

export const defaultStateParcelInfo: defaultStateParcelInfo[] = [
    // {
    //     tierInfo: { id: 0, name: "" },
    //     totalWeight: 0,
    //     idParcels: [],
    // },
];

export function reducerParcelInfo(
    state = defaultStateParcelInfo,
    action: { type: string; payload: defaultStateParcelInfo }
) {
    switch (action.type) {
        case add_parcel:
            if (
                state.some(
                    (item) => item.tierInfo.id === action.payload.tierInfo.id
                )
            ) {
                return state;
            }
            return [
                ...state,
                {
                    tierInfo: {
                        id: action.payload.tierInfo.id,
                        name: action.payload.tierInfo.name,
                    },
                    totalWeight: action.payload.totalWeight,
                    idParcels: action.payload.idParcels,
                },
            ];
        case delete_parcels:
            return [];
        default:
            return state;
    }
}
