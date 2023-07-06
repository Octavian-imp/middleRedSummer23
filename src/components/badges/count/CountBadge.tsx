import { EStatusCountNotification, ICountNotifProps } from "./types";

const CountBadge = ({ status, text }: ICountNotifProps) => {
    if (status === EStatusCountNotification.danger) {
        return (
            <span className="py-1 px-3 bg-red-500 text-white text-sm rounded-[inherit]">
                {text}
            </span>
        );
    }
    return (
        <span className="py-1 px-3 bg-purple-100 text-purple-500 text-sm rounded-[inherit]">
            {text}
        </span>
    );
};

export default CountBadge;
