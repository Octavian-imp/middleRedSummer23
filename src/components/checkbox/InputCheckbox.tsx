import { useState } from "react";
import styles from "./inputCheckbox.module.scss";
import { TInputCheckbox } from "./types";

const InputCheckbox = ({ id, name, label }: TInputCheckbox) => {
  const [isChecked, setIsChecked] = useState(false);
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
          defaultChecked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
        {label}
      </label>
    </>
  );
};

export default InputCheckbox;
