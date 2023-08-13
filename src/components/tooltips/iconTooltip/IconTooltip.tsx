import { ReactNode } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import styles from "./iconTooltip.module.scss";

type Props = {
    iconComponent?: ReactNode;
    tooltipText: string;
};

const IconTooltip = ({ iconComponent, tooltipText }: Props) => {
    if (typeof iconComponent === "undefined") {
        return (
            <div className={styles.tooltip__icon} data-tooltip={tooltipText}>
                <AiOutlineInfoCircle />
            </div>
        );
    }
    return (
        <div className={styles.tooltip__icon} data-tooltip={tooltipText}>
            {iconComponent}
        </div>
    );
};

export default IconTooltip;
