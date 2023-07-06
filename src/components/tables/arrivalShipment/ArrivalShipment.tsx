import RowTable from "../rowTable/rowTable";
import { IRowTable } from "../rowTable/types";
import styles from "./arrivalShipments.module.scss";

type Props = {
    data: IRowTable[];
};

export const ArrivalShipment = ({data}:Props) => {
    return (
        <div className={styles.table__wrapper}>
            <div className={styles.table__container}>
                <div className={styles.thead__row}>
                    <span className={styles.thead__row__column__2}>
                        Destination
                    </span>
                    <span className={styles.thead__row__column}>
                        Shipment number
                    </span>
                    <span className={styles.thead__row__column}>Truck</span>
                    <span className={styles.thead__row__column__right}>
                        Total weight, kg
                    </span>
                    <span className={styles.thead__row__column}>Status</span>
                    <span className={styles.thead__row__column}>
                        Departure date
                    </span>
                    <span className={styles.thead__row__column}>
                        Arrival date
                    </span>
                    <span className={styles.thead__row__column}>
                        Time delay
                    </span>
                </div>
                <div className={styles.tbody__container}>
                    {data &&
                        data.map((item, index) => (
                            <RowTable
                                key={index}
                                destStart={item.destStart}
                                destEnd={item.destEnd}
                                shipNumber={item.shipNumber}
                                status={item.status}
                                truck={item.truck}
                                arrDate={item.arrDate}
                                depDate={item.depDate}
                                totalWeight={item.totalWeight}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
};
