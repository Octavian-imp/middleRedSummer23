"use client";
import stylesTabsBtn from "@/components/checkbox/inputCheckbox.module.scss";
import SearchShipments from "@/components/searchShipments/SearchShipments";
import SelectFilter from "@/components/selectFilter/SelectFilter";
import { ArrivalShipment } from "@/components/tables/arrivalShipment/ArrivalShipment";
import AvailableShipmentTable from "@/components/tables/availableShipment/AvailableShipmentTable";
import { localeTime } from "@/global/LocalTime";
import { useGetShipmentsQuery } from "@/redux/api/shipmentApi";
import { useState } from "react";
import styles from "./index.module.scss";

const TableShipmentPage = () => {
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
    const { data: dataShipments, isSuccess } = useGetShipmentsQuery({});
    //filter settings
    const sortByValues = [
        "Destination",
        "Shipment number",
        "Total weight, kg",
        "Departure date",
        "Arrival date",
        "Time delay",
    ];
    let arrivalDate: string[] = [];
    if (isSuccess) {
        arrivalDate = dataShipments.map((item) =>
            new Date(item.arrDate).toLocaleString(localeTime, {
                year: "numeric",
                day: "numeric",
                month: "numeric",
            })
        );
    }

    return (
        <>
            <div className={styles.content__wrapper}>
                {isSuccess && <SearchShipments />}
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
                        <SelectFilter
                            label="Sort by"
                            values={sortByValues}
                            defaultValue={sortByValues[0]}
                        />
                        <SelectFilter
                            label="Arrival date"
                            values={arrivalDate}
                            defaultValue="15.06.2023"
                        />
                    </div>
                </div>
                {isSuccess && activeTab === statusButtons[0].id && (
                    <ArrivalShipment data={dataShipments} />
                )}
                {isSuccess && activeTab === statusButtons[1].id && (
                    <AvailableShipmentTable data={dataShipments} />
                )}
            </div>
        </>
    );
};

export default TableShipmentPage;
