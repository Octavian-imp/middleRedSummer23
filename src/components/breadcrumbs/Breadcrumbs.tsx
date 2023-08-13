"use client";

import { usePathname } from "next/navigation";
import Crumb from "./crumb/Crumb";

const Breadcrumbs = () => {
    const path = usePathname();
    function getCrumbsArr(pathname: string): { href: string; text: string }[] {
        const arrPath = pathname.split("/").splice(1);
        return arrPath.map((subpath, index) => {
            const href = "/" + arrPath.slice(0, index + 1).join("/");
            return { href, text: subpath };
        });
    }
    const crumbs = getCrumbsArr(path);
    return (
        <div>
            {crumbs.map((crumb, index) => (
                <Crumb
                    key={crumb.text}
                    text={crumb.text}
                    href={crumb.href}
                    last={index === crumbs.length - 1}
                />
            ))}
        </div>
    );
};

export default Breadcrumbs;
