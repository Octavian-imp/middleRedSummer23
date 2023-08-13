"use client";
import { Dispatch, SetStateAction } from "react";
import { ILoadInfo } from "../tables/arrivalShipment/rowTable/types";
import styles from "./modalTableStyles.module.scss";

type Props = {
    isActive: boolean;
    setIsActive: Dispatch<SetStateAction<boolean>>;
    data: ILoadInfo[];
    columns: string[];
};

const ModalTable = ({ isActive, setIsActive, data, columns }: Props) => {
    if (!isActive) {
        return;
    }
    return (
        <div
            className="fixed h-full w-full flex items-center justify-center bg-opacity-60 bg-black top-0 left-0 z-10"
            onClick={() => setIsActive(false)}
        >
            <div
                className="bg-white rounded-lg p-4 flex flex-col"
                onClick={(el) => el.stopPropagation()}
            >
                <div className={styles.table__thead}>
                    {columns.map((column, index) => (
                        <span
                            key={column}
                            className={`col-span-1 ${styles.thead__td}`}
                        >
                            {columns.at(index)}
                        </span>
                    ))}
                </div>
                {data.map((item) => (
                    <div key={item.parcelNumber} className={styles.tbody__tr}>
                        <span className="col-span-1">{item.parcelNumber}</span>
                        <span className="col-span-1">{item.weight}</span>
                        <span className="col-span-1">{item.admissionDate}</span>
                        <span className="col-span-1">
                            {item.tierInfo.name}_{item.tierInfo.idCell}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ModalTable;
