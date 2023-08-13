"use client";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { useRef, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { LiaTimesSolid } from "react-icons/lia";
import styles from "./ButtonWithDropdown.module.scss";
import { TButtonWithDropdown } from "./types";

const ButtonWithDropdown = ({
    label,
    values,
    defaultValue,
    handlerClick,
    handlerRemoveValue,
}: TButtonWithDropdown) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isCheckedValue, setIsCheckedValue] = useState<boolean>(false);
    const [activeValue, setActiveValue] =
        useState<typeof defaultValue>(defaultValue);

    const selectRef = useRef<HTMLUListElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);
    useOutsideClick({
        elementRef: selectRef,
        triggerRef,
        onOutsideClick: () => {
            setIsOpen(false);
        },
    });

    return (
        <div
            className={styles.selectFilter__wrapper}
            onClick={() => {
                setIsOpen((prev) => !prev);
            }}
            ref={triggerRef}
        >
            <div className={styles.selectFilter__body}>
                <span className={styles.selectFilter__placeholder}>
                    {label}:
                </span>
                <span className={styles.selectFilter__activeValue}>
                    {typeof activeValue === "string"
                        ? activeValue
                        : activeValue.label}
                </span>
                {isCheckedValue ? (
                    <LiaTimesSolid
                        onClick={(el) => {
                            setActiveValue(defaultValue);
                            setIsCheckedValue(false);
                            if (typeof handlerRemoveValue === "function") {
                                handlerRemoveValue(el);
                            }
                        }}
                    />
                ) : (
                    <BsChevronDown
                        className={styles.selectFilter__icon__isNotOpen}
                    />
                )}
            </div>
            <ul
                className={
                    isOpen && !isCheckedValue
                        ? styles.selectFilter__isOpenList
                        : styles.selectFilter__isNotOpenList
                }
                ref={selectRef}
            >
                {values &&
                    values.map((item, index) => (
                        <li
                            key={index}
                            className={styles.selectFilter__listItems}
                            onClick={(el) => {
                                setActiveValue(item);
                                setIsCheckedValue(true);
                                if (typeof handlerClick === "function") {
                                    if (typeof item === "string") {
                                        handlerClick(item, el);
                                    } else {
                                        handlerClick(item.name, el);
                                    }
                                }
                            }}
                        >
                            {typeof item === "string" ? item : item.label}
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default ButtonWithDropdown;
