import { EStatusCountNotification } from "@/components/badges/count/types";
import { Url } from "next/dist/shared/lib/router/router";
import { ReactNode } from "react";

export interface INavLinkProps {
    href: Url;
    isTextHidden: boolean;
    text: string;
    iconComponent: ReactNode;
    notification?: { status?: EStatusCountNotification; count: number };
}
// export type NavLinkProps = TNavLinkProps & TNavLinkPropsWithNotifyProps;
