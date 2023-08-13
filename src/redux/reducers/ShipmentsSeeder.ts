import {
    IRowTable,
    IRowTableSeed,
} from "@/components/tables/arrivalShipment/rowTable/types";
import { localeTime } from "@/global/LocalTime";
import { columnNameForArrivalTable } from "@/global/columnNameForArrivalTable";
import dataTableShipment from "@/seeders/dataTableShipment";
import { AnyAction } from "redux";
import {
    SEARCH,
    SET_DEFAULT,
    SET_SHIPMENTS,
    SORT_BY_COLUMN,
} from "../actions/shipmentsActions";

const defaultState: IRowTable[] | IRowTableSeed[] = dataTableShipment;

export const ShipmentsSeederReducer = (
    state = defaultState,
    action: AnyAction
): typeof defaultState => {
    switch (action.type) {
        case SET_SHIPMENTS:
            return action.payload;
        case SEARCH:
            const {
                shipNumber,
                destEnd: city,
                department,
                arrDate,
            } = action.payload;
            return defaultState.filter((itemState) => {
                if (
                    (shipNumber &&
                        itemState.shipNumber
                            .toLowerCase()
                            .includes(shipNumber.toLowerCase())) ||
                    (city &&
                        itemState.destEnd
                            .toLowerCase()
                            .includes(city.toLowerCase())) ||
                    (department &&
                        itemState.department.toString() === department) ||
                    (arrDate &&
                        new Date(itemState.arrDate).toLocaleString(localeTime, {
                            day: "numeric",
                            month: "numeric",
                            year: "numeric",
                        }) === arrDate)
                ) {
                    return true;
                }
                return false;
            });
        case SORT_BY_COLUMN:
            const { columnName } = action.payload;
            if (!columnName || columnName.length === 0) {
                return state;
            }
            let currState = [...state];
            //sort by destination column
            if (columnName === columnNameForArrivalTable[0].name) {
                return currState.sort((curr, next) =>
                    curr.destStart > next.destStart ? -1 : 1
                );
            }
            // sort by shipment number column
            else if (columnName === columnNameForArrivalTable[1].name) {
                return currState.sort((curr, next) =>
                    curr.shipNumber > next.shipNumber ? -1 : 1
                );
            }
            // sort by truck column
            else if (columnName === columnNameForArrivalTable[2].name) {
                return currState.sort((curr, next) =>
                    curr.truck > next.truck ? -1 : 1
                );
            }
            //sort by total weight column
            else if (columnName === columnNameForArrivalTable[3].name) {
                return currState.sort(
                    (curr, next) => curr.totalWeight - next.totalWeight
                );
            }
            // sort by status column
            else if (columnName === columnNameForArrivalTable[4].name) {
                return currState.sort((curr, next) =>
                    curr.status.text > next.status.text ? -1 : 1
                );
            }
            // sort by departure date column
            else if (columnName === columnNameForArrivalTable[5].name) {
                return currState.sort(
                    (curr, next) =>
                        new Date(curr.depDate).getTime() -
                        new Date(next.depDate).getTime()
                );
            }
            // sort by arrival date column
            else if (columnName === columnNameForArrivalTable[6].name) {
                return currState.sort(
                    (curr, next) =>
                        new Date(curr.arrDate).getTime() -
                        new Date(next.arrDate).getTime()
                );
            }
            return state;
        case SET_DEFAULT:
            return defaultState;
        default:
            return state;
    }
};
