'use client'
import { CgOptions } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";
import styles from "./userMenuActions.module.scss";

type TUserMenuActionsProps = {
    isVisible: boolean;
};

const UserMenuActions = ({ isVisible }: TUserMenuActionsProps) => {
    return (
        <ul
            className={
                isVisible
                    ? styles.menu__wrapper__visible
                    : styles.menu__wrapper__hidden
            }
        >
            <li className={styles.menu__item}>
                <CgOptions />
                <span>Settings</span>
            </li>
            <li className={styles.menu__item}>
                <FiLogOut />
                <span>Logout</span>
            </li>
        </ul>
    );
};

export default UserMenuActions;
