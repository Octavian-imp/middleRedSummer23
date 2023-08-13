import { columnNameForArrivalTable } from "@/global/columnNameForArrivalTable";
import styles from "./arrivalShipments.module.scss";
import RowTable from "./rowTable/rowTable";
import { IRowTableSeed } from "./rowTable/types";

type Props = {
    data: IRowTableSeed[];
};

export const ArrivalShipment = ({ data }: Props) => {
    return (
        <div className={styles.table__wrapper}>
            <div className={styles.table__container}>
                <div className={styles.thead__row}>
                    <span className={styles.thead__row__column__2}>
                        {columnNameForArrivalTable[0].label}
                    </span>
                    <span className={styles.thead__row__column}>
                        {columnNameForArrivalTable[1].label}
                    </span>
                    <span className={styles.thead__row__column}>
                        {columnNameForArrivalTable[2].label}
                    </span>
                    <span className={styles.thead__row__column__right}>
                        {columnNameForArrivalTable[3].label}
                    </span>
                    <span className={styles.thead__row__column}>
                        {columnNameForArrivalTable[4].label}
                    </span>
                    <span className={styles.thead__row__column}>
                        {columnNameForArrivalTable[5].label}
                    </span>
                    <span className={styles.thead__row__column}>
                        {columnNameForArrivalTable[6].label}
                    </span>
                    <span className={styles.thead__row__column}>
                        {columnNameForArrivalTable[7].label}
                    </span>
                </div>
                <div className={styles.tbody__container}>
                    {data &&
                        data.map((item, index) => (
                            <RowTable key={index} {...item} />
                        ))}
                </div>
            </div>
        </div>
    );
};
