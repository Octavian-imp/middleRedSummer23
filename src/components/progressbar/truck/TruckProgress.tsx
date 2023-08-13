import { percentValue } from "@/global/PercentValue";
import {
    settingsProgressDanger,
    settingsProgressWarning,
} from "@/global/settingsProgress";
import truckImg from "@/static/truck.png";
import Image from "next/image";
import { CSSProperties } from "react";
import styles from "./truckProgress.module.scss";

type Props = {
    totalValue: number;
    maxValue: number;
};

const TruckProgress = ({ maxValue, totalValue }: Props) => {
    const progressWidth =
        totalValue && maxValue ? percentValue(totalValue, maxValue) : 0;
    const progressColorBg =
        progressWidth > settingsProgressWarning
            ? progressWidth > settingsProgressDanger
                ? styles.bg_stripes_danger
                : styles.bg_stripes_warning
            : styles.bg_stripes_success;
    return (
        <div className="relative max-w-xs flex justify-end items-start flex-1 overflow-hidden">
            <Image src={truckImg} alt="" className="w-full h-full opacity-60" />
            <div className={styles.truck__progress_bar__wrapper}>
                <div
                    className={`
                                ${styles.truck__progress_bar__width} ${progressColorBg}
                            `}
                    style={
                        {
                            "--progress-width": progressWidth + "%",
                        } as CSSProperties
                    }
                ></div>
            </div>
        </div>
    );
};

export default TruckProgress;
