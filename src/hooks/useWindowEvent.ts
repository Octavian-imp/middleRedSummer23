import { useEffect } from "react";
import { useLatest } from "./useLatest";

type GetWindowEvent<Type extends string> = Type extends keyof WindowEventMap
    ? WindowEventMap[Type]
    : Event;

export function useWindowEvent<Type extends string>(
    type: Type,
    cb: (event: Event) => void
): void {
    const latestCb = useLatest(cb);
    useEffect(() => {
        console.log('=========')
        const handler = (event: Event) => {
            latestCb.current(event);
        };
        window.addEventListener(type, handler);
        return () => window.addEventListener(type, handler);
    }, [type, latestCb]);
}
