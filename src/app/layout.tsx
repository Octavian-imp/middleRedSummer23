import { gilroyRegular } from "@/fonts/fonts";
import { ReduxProvider } from "@/redux/ReduxProvider";
import { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
    title: "Home",
    description: "Welcome to Next.js",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${gilroyRegular.className}`}>
                <ReduxProvider>{children}</ReduxProvider>
            </body>
        </html>
    );
}
