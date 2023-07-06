import { Dispatch, SetStateAction } from "react";

export type TInputRadio = {
    id: string;
    name: string;
    label: string;
    checkedValue: string;
    setCheckedValue: Dispatch<SetStateAction<string>>;
};
