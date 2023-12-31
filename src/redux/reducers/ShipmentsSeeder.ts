import {
    ICellsInfo,
    ILoadInfo,
    IRowTable,
    IRowTableSeed,
} from "@/components/tables/arrivalShipment/rowTable/types";
import { localeTime } from "@/global/LocalTime";
import { columnNameForArrivalTable } from "@/global/columnNameForArrivalTable";
import dataTableShipment from "@/seeders/dataTableShipment";
import { AnyAction } from "redux";
import {
    ADD_PARCELS,
    SEARCH,
    SET_DEFAULT,
    SET_SHIPMENTS,
    SORT_BY_COLUMN,
} from "../actions/shipmentsActions";

type TShortInfoWeightParcels = {
    tierInfo: ILoadInfo["tierInfo"];
    totalWeight: number;
};

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
        case ADD_PARCELS:
            const indexShip = state.findIndex(
                (item) =>
                    item.shipNumber.toLowerCase() ===
                    action.payload.shipNumber.toLowerCase()
            );
            if (indexShip === -1 || typeof indexShip === "undefined") {
                return state;
            }

            // находим и уменьшаем допустимый к погрузке вес
            let shortInfoWeightParcels: TShortInfoWeightParcels[] = [];
            action.payload.loadParcelsInfo.forEach((current: ILoadInfo) => {
                const index = shortInfoWeightParcels.findIndex(
                    (item) =>
                        item.tierInfo.name.toLowerCase() ===
                            current.tierInfo.name.toLowerCase() &&
                        item.tierInfo.idCell === current.tierInfo.idCell
                );
                if (index === -1) {
                    return shortInfoWeightParcels.push({
                        tierInfo: {
                            idCell: current.tierInfo.idCell,
                            name: current.tierInfo.name,
                        },
                        totalWeight: current.weight,
                    });
                }
                return (shortInfoWeightParcels[index].totalWeight +=
                    current.weight);
            });
            if (shortInfoWeightParcels.length === 0) {
                return state;
            }

            const newTierInfoState: IRowTableSeed["tiersInfo"] = [];
            shortInfoWeightParcels.forEach((current) => {
                for (const tier of state[indexShip].tiersInfo) {
                    if (
                        tier.name.toLowerCase() ===
                        current.tierInfo.name.toLowerCase()
                    ) {
                        newTierInfoState.push({
                            name: tier.name,
                            cells: tier.cells.map((cell): ICellsInfo => {
                                if (cell.id === current.tierInfo.idCell) {
                                    return {
                                        ...cell,
                                        maxWeight:
                                            cell.maxWeight -
                                            current.totalWeight,
                                        isAvailable:
                                            cell.maxWeight -
                                                current.totalWeight <=
                                            0
                                                ? false
                                                : cell.isAvailable,
                                    };
                                }
                                return cell;
                            }),
                        });
                    }
                }
            });
            for(const tier of state[indexShip].tiersInfo){
                if(newTierInfoState.findIndex(newTier=>newTier.name === tier.name) === -1){
                    newTierInfoState.push(tier)
                }
            }

            if (newTierInfoState.length === 0) {
                return state;
            }
            //вычисляем общий вес посылок
            const totalWeightParcels = action.payload.loadParcelsInfo.reduce(
                (accum: number, curr: ILoadInfo) => accum + curr.weight,
                0
            );

            return state.map((item, index) => {
                if (index === indexShip) {
                    return {
                        ...item,
                        totalWeight: item.totalWeight + totalWeightParcels,
                        tiersInfo: newTierInfoState,
                        loadInfo: [
                            ...item.loadInfo,
                            ...action.payload.loadParcelsInfo,
                        ],
                    };
                }
                return item;
            });
        case SET_DEFAULT:
            return defaultState;
        default:
            return state;
    }
};
