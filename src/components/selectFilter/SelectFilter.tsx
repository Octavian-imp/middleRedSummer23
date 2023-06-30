import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import styles from "./selectFilter.module.scss";
import { TSelectFilter } from "./types";

const SelectFilter = ({ label, values, defaultValue }: TSelectFilter) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeValue, setActiveValue] = useState(defaultValue);
  return (
    <div
      className={styles.selectFilter__wrapper}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className={styles.selectFilter__body}>
        <span className={styles.selectFilter__placeholder}>{label}:</span>
        <span className={styles.selectFilter__activeValue}>{activeValue}</span>
        <BsChevronDown
          className={
            isOpen
              ? styles.selectFilter__isOpen
              : styles.selectFilter__isNotOpen
          }
        />
      </div>
      <ul
        className={
          isOpen
            ? styles.selectFilter__isOpenList
            : styles.selectFilter__isNotOpenList
        }
      >
        {values &&
          values.map((item, index) => (
            <li
              key={index}
              className={styles.selectFilter__listItems}
              onClick={() => setActiveValue(item)}
            >
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default SelectFilter;
