import { IRowTable } from "@/components/tables/arrivalShipment/rowTable/types";
import { AnyAction } from "@reduxjs/toolkit";
import { SET_CITY } from "../actions/cityTypeActions";

export interface IFilterShipmentsState {
    city: Array<string> | null;
    department: Array<number> | null;
    sortBy: Array<string> | null;
    arrDate: Array<Date> | null;
}
const defaultState: IFilterShipmentsState = {
    city: null,
    department: null,
    sortBy: null,
    arrDate: null,
};

export const FilterShipmentsReducer = (
    state = defaultState,
    action: AnyAction
): IFilterShipmentsState => {
    switch (action.type) {
        case SET_CITY:
            return {
                ...state,
                city: [
                    ...new Set<string>(
                        action.payload.map((item: IRowTable) => item.destEnd)
                    ),
                ],
            };
        default:
            return state;
    }
};
