"use client";
import { useState } from "react";
import InputRadio from "./inputRadio/inputRadio";
import { TInputRadio } from "./inputRadio/types";

type Props = {
    fields: Array<Pick<TInputRadio, "id" | "name" | "label">>;
    // FIXME: добавить более строгое типизирование
    defaultCheckedValueId: string;
};

const InputRadioProvider = ({ fields, defaultCheckedValueId }: Props) => {
    const [checkedValue, setCheckedValue] = useState<string>(defaultCheckedValueId);
    return (
        <fieldset className="flex gap-x-3">
            {fields &&
                fields.map((field) => (
                    <InputRadio
                        key={field.label}
                        id={field.id}
                        name={field.name}
                        label={field.label}
                        checkedValue={checkedValue}
                        setCheckedValue={setCheckedValue}
                    />
                ))}
        </fieldset>
    );
};

export default InputRadioProvider;
