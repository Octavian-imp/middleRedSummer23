"use client";
import StatusBadge from "@/components/badges/status/StatusBadge";
import { localeTime, settingsShortTime, settingsShortTimeWithHour } from "@/global/LocalTime";
import styles from "./rowGrid.module.scss";
import { IRowTableSeed } from "./types";

const RowTable = ({
    destStart,
    destEnd,
    shipNumber,
    truck,
    totalWeight = 0,
    status,
    depDate,
    arrDate,
}: Omit<IRowTableSeed, "maxWeight">) => {
    return (
        <div className={styles.tbody__row}>
            <span className={styles.row__column__2}>
                {destStart} - {destEnd}
            </span>
            <span className={styles.row__column}>{shipNumber}</span>
            <span className={styles.row__column}>{truck}</span>
            <span className={styles.row__column__right}>
                {totalWeight === 0 ? "-" : totalWeight}
            </span>
            <span className={styles.row__column}>
                <StatusBadge text={status.text} status={status.code} />
            </span>
            <span className={styles.row__column}>
                {new Date(depDate).toLocaleString(
                    localeTime,
                    settingsShortTimeWithHour
                )}
            </span>
            <span className={styles.row__column}>
                {new Date(arrDate).toLocaleString(
                    localeTime,
                    settingsShortTimeWithHour
                )}
            </span>
            <span className={styles.row__column}>
                {`${Math.ceil(
                    Math.abs(
                        new Date(arrDate).getTime() -
                            new Date(depDate).getTime()
                    ) /
                        (1000 * 60 * 60 * 24)
                )} day(-s)`}
            </span>
        </div>
    );
};

export default RowTable;
