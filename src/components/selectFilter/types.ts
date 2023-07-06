import { First } from "@/global/First";

export type TSelectFilter = {
    label: string;
    values: Array<string>;
    defaultValue: First<TSelectFilter["values"]>;
};
