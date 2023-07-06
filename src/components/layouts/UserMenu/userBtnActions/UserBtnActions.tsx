'use client'
import { useState } from "react";
import { SlOptions } from "react-icons/sl";
import UserMenuActions from "./userMenuActions/UserMenuActions";

const UserBtnActions = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    return (
        <button
            className="text-center relative"
            onClick={() => setIsVisible(!isVisible)}
        >
            <SlOptions className="text-2xl text-zinc-500" />
            <UserMenuActions isVisible={isVisible} />
        </button>
    );
};

export default UserBtnActions;
