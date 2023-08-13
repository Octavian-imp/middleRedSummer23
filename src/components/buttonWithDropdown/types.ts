import { First } from "@/global/First";
import { MouseEvent, TouchEvent } from "react";

export type TButtonWithDropdown = {
    label: string;
    values: { label: string; name: string }[] | string[];
    defaultValue: First<TButtonWithDropdown["values"]>;
    handlerClick?(
        textContent: string,
        triggerElem: MouseEvent<HTMLLIElement>
    ): void;
    handlerRemoveValue?(triggerElem?: MouseEvent | TouchEvent): void;
};
