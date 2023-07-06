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
        second: "numeric",
        hourCycle: 'h23'
    };
    const [clock, setClock] = useState<string | null>(null);
    useEffect(() => {
        const getTime = setInterval(() => {
            setClock(new Date().toLocaleString(localeTime, clockOptions));
        }, 1000);
        return () => clearInterval(getTime);
    }, []);
    return <span>{clock}</span>;
};

export default Clock;
