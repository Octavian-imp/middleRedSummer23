import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { MouseEventHandler, PropsWithChildren, ReactNode } from "react";

type Props = {
    text: string;
    iconComponent?: ReactNode;
    className?: string;
    link?: Url;
    handlerClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
};
const SecondaryButton = ({
    text,
    iconComponent,
    className,
    children,
    link,
    handlerClick,
}: PropsWithChildren & Props) => {
    if (typeof link !== "undefined") {
        return (
            <Link
                href={link}
                className={`flex items-center justify-center gap-x-3 text-primary bg-info hover:brightness-95 py-3 px-2 rounded-lg ${className}`}
                onClick={handlerClick}
            >
                {iconComponent}
                <span>{text ? text : children}</span>
            </Link>
        );
    }
    return (
        <button
            type="button"
            className={`flex items-center justify-center gap-x-3 text-primary bg-info hover:brightness-95 py-3 px-2 rounded-lg ${className}`}
            onClick={handlerClick}
        >
            {iconComponent}
            <span>{text ? text : children}</span>
        </button>
    );
};

export default SecondaryButton;
