import React, { ReactNode } from "react";

type Props = {
    text: string;
    iconComponent?: ReactNode;
    className?: string;
};

const PrimaryButton = ({ iconComponent, text, className = "" }: Props) => {
    return (
        <button
            type="button"
            className={`flex items-center justify-center gap-x-3 bg-primary text-white py-3 px-2 rounded-lg ${className}`}
        >
            {iconComponent}
            <span>{text}</span>
        </button>
    );
};

export default PrimaryButton;
