import { EStatuses } from "@/global/EStatuses";
import styles from "./statusBadge.module.scss";
import { TBadge } from "./types";

const StatusBadge = ({ text, status }: TBadge) => {
  if (status === EStatuses.success) {
    return <span className={styles.badge__success}>{text}</span>;
  }
  if (status === EStatuses.warning) {
    return <span className={styles.badge__warning}>{text}</span>;
  }
  if (status === EStatuses.danger) {
    return <span className={styles.badge__danger}>{text}</span>;
  }
  return <span className={styles.badge__info}>{text}</span>;
};

export default StatusBadge;
