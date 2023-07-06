"use client";
import CountBadge from "@/components/badges/count/CountBadge";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navLink.module.scss";
import { INavLinkProps } from "./types";

const NavLink = ({
    iconComponent,
    isTextHidden,
    text,
    href,
    notification,
}: INavLinkProps) => {
    const pathname = usePathname();
    if (pathname === href) {
        return (
            <Link
                href={href}
                className={
                    isTextHidden
                        ? styles.link__wrapper__center__active
                        : styles.link__wrapper__between__active
                }
            >
                <span className={styles.placeholder__visible} />
                <div className={styles.content}>
                    {iconComponent}
                    {!isTextHidden && text}
                </div>
                {notification && !isTextHidden && (
                    <CountBadge
                        text={notification.count}
                        status={notification.status}
                    />
                )}
            </Link>
        );
    }
    return (
        <Link
            href={href}
            className={
                isTextHidden
                    ? styles.link__wrapper__center
                    : styles.link__wrapper__between
            }
        >
            <div className={styles.content}>
                {iconComponent}
                {!isTextHidden && text}
            </div>
            {notification && !isTextHidden && (
                <CountBadge
                    text={notification.count}
                    status={notification.status}
                />
            )}
        </Link>
    );
};

export default NavLink;
