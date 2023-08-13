import { RefObject, useEffect } from "react";
import { useEventFn } from "./useEventFn";

interface UseOutsideClick {
    elementRef: RefObject<HTMLElement>;
    triggerRef: RefObject<HTMLElement>;
    enabled?: boolean;
    onOutsideClick(e: MouseEvent | TouchEvent): void;
}

export function useOutsideClick({
    elementRef,
    triggerRef,
    onOutsideClick,
    enabled = true,
}: UseOutsideClick) {
    const handleOutsideClick = useEventFn(onOutsideClick);
    useEffect(() => {
        if (!enabled) {
            return;
        }
        const handlerClick = (e: MouseEvent | TouchEvent) => {
            const target = e.target;
            if (!(target instanceof Node)) {
                return;
            }
            if (!elementRef.current) {
                return;
            }
            const ignoreEls = [elementRef.current, triggerRef.current];
            if (!triggerRef?.current) {
                ignoreEls.push(triggerRef.current);
            }
            if (!ignoreEls.some((element) => element?.contains(target))) {
                handleOutsideClick(e);
            }
        };
        document.addEventListener("mousedown", handlerClick);
        document.addEventListener("touchstart", handlerClick);
        return () => {
            document.removeEventListener("mousedown", handlerClick);
            document.removeEventListener("touchstart", handlerClick);
        };
    }, [enabled, elementRef, triggerRef, handleOutsideClick]);
}
