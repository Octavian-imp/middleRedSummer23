import Badge from "../../badges/Badges";
import styles from "./rowGrid.module.scss";
import { IRowTable } from "./types";

const RowTable = ({
  destStart,
  destEnd,
  shipNumber,
  truck,
  totalWeight = null,
  status,
  depDate = "-",
  arrDate = "-",
}: IRowTable) => {
  return (
    <div className={styles.tbody__row}>
      <span className={styles.row__column__2}>
        {destStart} - {destEnd}
      </span>
      <span className={styles.row__column}>{shipNumber}</span>
      <span className={styles.row__column}>{truck}</span>
      <span className={styles.row__column__right}>
        {totalWeight === null ? "-" : totalWeight}
      </span>
      <span className={styles.row__column}>
        <Badge text={status.text} status={status.code} />
      </span>
      <span className={styles.row__column}>
        {depDate instanceof Date
          ? depDate.toLocaleString("en-EN", {
              day: "numeric",
              month: "short",
            })
          : "-"}
      </span>
      <span className={styles.row__column}>
        {arrDate instanceof Date
          ? arrDate.toLocaleString("en-EN", {
              day: "numeric",
              month: "short",
            })
          : "-"}
      </span>
      <span className={styles.row__column}>
        {arrDate instanceof Date && depDate instanceof Date
          ? `${Math.ceil(
              Math.abs(arrDate.getTime() - depDate.getTime()) /
                (1000 * 60 * 60 * 24)
            )} day(-s)`
          : "-"}
      </span>
    </div>
  );
};

export default RowTable;
