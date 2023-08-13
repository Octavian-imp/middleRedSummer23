"use client";
import { localeTime } from "@/global/LocalTime";
import { useEffect, useState } from "react";

const Clock = () => {
    const clockOptions: Intl.DateTimeFormatOptions = {
        day: "numeric",
        weekday: "short",
        month: "short",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
    };
    const [clock, setClock] = useState<string | null>(null);
    useEffect(() => {
        const getTime = setInterval(() => {
            setClock(new Date().toLocaleString(localeTime, clockOptions));
        }, 15000);
        return () => clearInterval(getTime);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return <span>{clock}</span>;
};

export default Clock;
