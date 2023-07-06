"use client";
import styles from "./inputCheckbox.module.scss";
import { TInputCheckbox } from "./types";

const InputCheckbox = ({
    id,
    name,
    label,
    isChecked,
    handler,
}: TInputCheckbox) => {
    return (
        <>
            <label
                className={
                    isChecked
                        ? styles.inputCheckbox__label__isChecked
                        : styles.inputCheckbox__label__isNotChecked
                }
                htmlFor={id}
            >
                <input
                    type="checkbox"
                    className={styles.inputCheckbox__input}
                    name={name}
                    id={id}
                    checked={isChecked}
                    onChange={handler}
                />
                {label}
            </label>
        </>
    );
};

export default InputCheckbox;
