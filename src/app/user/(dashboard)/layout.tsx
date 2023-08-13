import UserMenu from "@/components/layouts/UserMenu/UserMenu";
import UserMenuProvider from "@/components/providers/UserMenuProvider";
import { gilroySemiBold } from "@/fonts/fonts";
import { Metadata } from "next";
import { FC, PropsWithChildren } from "react";

export const metadata: Metadata = {
    title: "dashboard",
    robots: "noindex",
};
const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
    return (
        <div
            className={`flex justify-between m-4 flex-1 gap-x-8 ${gilroySemiBold.className}`}
        >
            <UserMenuProvider>
                <UserMenu />
            </UserMenuProvider>
            {children}
        </div>
    );
};

export default Layout;
