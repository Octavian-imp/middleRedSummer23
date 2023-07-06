import { ChangeEventHandler } from "react";

export type TInputCheckbox = {
    id: string;
    name: string;
    label: string;
    isChecked: boolean;
    handler: ChangeEventHandler<HTMLInputElement>;
};
