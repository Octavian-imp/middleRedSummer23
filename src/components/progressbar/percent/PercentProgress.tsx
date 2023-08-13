'use client';
import { percentValue } from "@/global/PercentValue";
import {
    settingsProgressDanger,
    settingsProgressWarning,
} from "@/global/settingsProgress";

type Props = {
    totalValue: number;
    maxValue: number;
};

const PercentProgress = ({ totalValue, maxValue }: Props) => {
    const progressWidth =
        totalValue && maxValue ? percentValue(totalValue, maxValue) : 0;
    const progressColorText =
        progressWidth > settingsProgressWarning
            ? progressWidth > settingsProgressDanger
                ? "text-danger"
                : "text-warning"
            : "text-success";
    return (
        <span
            className={`${progressColorText} text-3xl`}
            title={`${totalValue}/${maxValue}`}
        >
            {progressWidth}%
        </span>
    );
};

export default PercentProgress;
