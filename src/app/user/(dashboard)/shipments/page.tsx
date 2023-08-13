"use client";
import ButtonWithDropdown from "@/components/buttonWithDropdown/ButtonWithDropdown";
import stylesTabsBtn from "@/components/checkbox/inputCheckbox.module.scss";
import SearchShipments from "@/components/searchShipments/SearchShipments";
import { ArrivalShipment } from "@/components/tables/arrivalShipment/ArrivalShipment";
import AvailableShipmentTable from "@/components/tables/availableShipment/AvailableShipmentTable";
import { localeTime } from "@/global/LocalTime";
import { columnNameForArrivalTable } from "@/global/columnNameForArrivalTable";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useShipments } from "@/hooks/useShipments";
import {
    SEARCH,
    SET_DEFAULT,
    SORT_BY_COLUMN,
} from "@/redux/actions/shipmentsActions";
import { useState } from "react";
import styles from "./index.module.scss";

const TableShipmentPage = () => {
    const dispatch = useAppDispatch();

    const statusButtons = [
        {
            id: "arrivalId",
            name: "statusArrival",
            label: "Arrival",
        },
        {
            id: "availableId",
            name: "statusArrival",
            label: "Available",
        },
        {
            id: "departureId",
            name: "statusArrival",
            label: "Departure",
        },
    ];
    const defaultCheckedValueId = statusButtons[0].id;
    const [activeTab, setActiveTab] = useState<string>(defaultCheckedValueId);

    //data
    const dataShipments = useShipments();
    //filter settings
    const sortByColumns: typeof columnNameForArrivalTable =
        columnNameForArrivalTable;
    const arrivalDate = [
        ...new Set<string>(
            dataShipments.map((item) =>
                new Date(item.arrDate).toLocaleString(localeTime, {
                    year: "numeric",
                    day: "numeric",
                    month: "numeric",
                })
            )
        ),
    ];

    return (
        <>
            <div className={styles.content__wrapper}>
                <SearchShipments />
                <div className={styles.content__toolbar}>
                    <div className={styles.toolbar__block}>
                        <span className={styles.toolbar__title}>Shipments</span>
                        {statusButtons &&
                            statusButtons.map((field) => (
                                <button
                                    key={field.label}
                                    className={
                                        activeTab === field.id
                                            ? stylesTabsBtn.inputCheckbox__label__isChecked
                                            : stylesTabsBtn.inputCheckbox__label__isNotChecked
                                    }
                                    onClick={() => setActiveTab(field.id)}
                                >
                                    {field.label}
                                </button>
                            ))}
                    </div>
                    <div className="flex items-center gap-2">
                        <ButtonWithDropdown
                            label="Sort by"
                            values={sortByColumns}
                            defaultValue={sortByColumns[0]}
                            handlerClick={(textContent) =>
                                dispatch({
                                    type: SORT_BY_COLUMN,
                                    payload: { columnName: textContent },
                                })
                            }
                            handlerRemoveValue={() =>
                                dispatch({ type: SET_DEFAULT })
                            }
                        />
                        <ButtonWithDropdown
                            label="Arrival date"
                            values={arrivalDate}
                            defaultValue={arrivalDate[0]}
                            handlerClick={(textContent) =>
                                dispatch({
                                    type: SEARCH,
                                    payload: { arrDate: textContent },
                                })
                            }
                            handlerRemoveValue={() =>
                                dispatch({ type: SET_DEFAULT })
                            }
                        />
                    </div>
                </div>
                {activeTab === statusButtons[0].id && (
                    <ArrivalShipment data={dataShipments} />
                )}
                {activeTab === statusButtons[1].id && (
                    <AvailableShipmentTable data={dataShipments} />
                )}
            </div>
        </>
    );
};

export default TableShipmentPage;
