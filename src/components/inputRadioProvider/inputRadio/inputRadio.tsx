"use client";
import styles from "@/components/checkbox/inputCheckbox.module.scss";
import { TInputRadio } from "./types";

function InputRadio({
    id,
    name,
    label,
    checkedValue,
    setCheckedValue,
}: TInputRadio) {
    return (
        <label
            className={
                checkedValue === id
                    ? styles.inputCheckbox__label__isChecked
                    : styles.inputCheckbox__label__isNotChecked
            }
            htmlFor={id}
        >
            {checkedValue === id ? (
                <input
                    type="radio"
                    className={styles.inputCheckbox__input}
                    name={name}
                    id={id}
                    onChange={(el) => setCheckedValue(el.target.id)}
                    value={id}
                />
            ) : (
                <input
                    type="radio"
                    className={styles.inputCheckbox__input}
                    name={name}
                    id={id}
                    onChange={(el) => setCheckedValue(el.target.id)}
                    value={id}
                />
            )}
            {label}
        </label>
    );
}

export default InputRadio;
