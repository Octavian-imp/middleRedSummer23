"use client";

import {
    addSelect,
    decreaseSelect,
    defaultStateSelectParcel,
    reducerSelectParcel,
} from "@/reactReducers/parcelSelected";
import { DragEventHandler, useReducer, useRef } from "react";
import { BsBoxFill } from "react-icons/bs";
import styles from "./parcelTable.module.scss";

type Props = {
    parcels: {
        id: string;
        totalWeight: number;
        admissionDate: string;
    }[];
};

const ParcelTable = ({ parcels }: Props) => {
    const [parcelSelected, dispatchParcelSelected] = useReducer(
        reducerSelectParcel,
        defaultStateSelectParcel
    );
    const handleDragStart: DragEventHandler<HTMLLabelElement> = (el) => {
        popupRef.current?.classList.remove("hidden");
        popupRef.current?.classList.add("flex");

        const crt = document.createElement("span");

        el.dataTransfer.setDragImage(crt, 0, 0);
        el.dataTransfer.setData(
            "application/json",
            JSON.stringify(parcelSelected)
        );
    };
    const handleDragEnd: DragEventHandler<HTMLLabelElement> = () => {
        popupRef.current?.classList.add("hidden");
    };
    const handleDrag: DragEventHandler<HTMLLabelElement> = (el) => {
        if (popupRef.current !== null) {
            popupRef.current.style.top = `${el.clientY + 10}px`;
            popupRef.current.style.left = `${el.clientX - 100}px`;
        }
    };
    const popupRef = useRef<HTMLDivElement>(null);

    return (
        <div className={styles.table__wrapper}>
            <div
                id="dragPopup"
                className="items-center hidden gap-x-2 p-2 fixed bg-white rounded-lg shadow-lg pointer-events-none"
                ref={popupRef}
            >
                <div className="rounded-full bg-info text-center p-2 text-primary">
                    <BsBoxFill className="text-sm" />
                </div>
                <div className="flex flex-col">
                    <span className="text-primary-dark">
                        {parcelSelected.selected} parcels
                    </span>
                    <span className="text-info text-sm">
                        Total weight:{parcelSelected.totalWeight} kg
                    </span>
                </div>
            </div>
            <div className="flex items-center text-primary-dark">
                <span className="text-2xl mr-4">Truck load</span>
                <span className="text-info">Selected:</span>
                {parcelSelected.selected}
                <span className="text-info ml-2">Weight, kg:</span>
                {parcelSelected.totalWeight}
            </div>

            <div className={styles.table__thead}>
                <span className={`col-span-2 ${styles.thead__td}`}>
                    <label
                        htmlFor="isCheckedOnce"
                        className={
                            parcelSelected.selected > 0
                                ? styles.checkbox__isCheckedOnce
                                : styles.checkbox__isNotCheckedOnce
                        }
                    >
                        <input
                            type="checkbox"
                            className="hidden"
                            id="isCheckedOnce"
                            readOnly
                        />
                    </label>
                    <span>Parcel number</span>
                </span>
                <span className={`col-span-1 ${styles.thead__td}`}>
                    Volume Weight
                </span>
                <span className={`col-span-1 ${styles.thead__td}`}>
                    Admission date
                </span>
            </div>
            <div className="flex flex-col">
                {parcels.map((parcel) => (
                    <label
                        key={parcel.id}
                        htmlFor={parcel.id}
                        className={styles.tbody__tr}
                        draggable={true}
                        onDragStart={handleDragStart}
                        onDrag={handleDrag}
                        onDragEnd={handleDragEnd}
                    >
                        <span className="col-span-2 font-semibold">
                            <input
                                type="checkbox"
                                className="accent-primary w-4 h-4 mr-2"
                                id={parcel.id}
                                value={parcel.id}
                                data-weight={parcel.totalWeight}
                                onChange={(el) => {
                                    if (
                                        typeof el.target.dataset.weight !==
                                        "undefined"
                                    ) {
                                        if (el.target.checked) {
                                            dispatchParcelSelected({
                                                type: addSelect,
                                                payload: {
                                                    totalWeight:
                                                        +el.target.dataset
                                                            .weight,
                                                    parcelNumber: el.target.id,
                                                },
                                            });
                                        } else {
                                            dispatchParcelSelected({
                                                type: decreaseSelect,
                                                payload: {
                                                    totalWeight:
                                                        +el.target.dataset
                                                            .weight,
                                                    parcelNumber: el.target.id,
                                                },
                                            });
                                        }
                                    }
                                }}
                            />
                            <span>{parcel.id}</span>
                        </span>
                        <span className="col-span-1">{parcel.totalWeight}</span>
                        <span className="col-span-1">
                            {parcel.admissionDate}
                        </span>
                    </label>
                ))}
            </div>
        </div>
    );
};

export default ParcelTable;
