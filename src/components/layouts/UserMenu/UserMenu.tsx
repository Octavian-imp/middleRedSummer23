"use client";
import { useUserMenuContext } from "@/hooks/useUserMenuContext";
import { HiPlus } from "react-icons/hi";
import SeparatorX from "../../separator/SeparatorX";
import Logo from "./logo/Logo";
import ShowHideMenuBtn from "./showHideMenu/ShowHideMenuBtn";
import UserBtnActions from "./userBtnActions/UserBtnActions";
import menuStyles from "./userMenu.module.scss";
import UserNavbar from "./userNavbar/UserNavbar";

const UserMenu = () => {
    const { isHidden } = useUserMenuContext();
    return (
        <div
            className={
                isHidden
                    ? menuStyles.menu__wrapper__hidden
                    : menuStyles.menu__wrapper
            }
        >
            <ShowHideMenuBtn />
            <Logo />
            <UserNavbar />
            <div className="flex flex-col items-center mt-auto w-full gap-y-4">
                <button className="flex items-center justify-center gap-x-3 bg-purple-600 text-white py-3 px-2 w-full rounded-lg">
                    <HiPlus className="text-lg" />
                    {!isHidden && <span>Create shipment</span>}
                </button>
                <SeparatorX />
                <div
                    className={`flex items-center ${
                        !isHidden ? "justify-between" : "justify-center"
                    } w-full`}
                >
                    <div className="flex gap-x-3 items-center ">
                        <span className="w-7 h-7 rounded-full bg-purple-600"></span>
                        {!isHidden && (
                            <div className="flex flex-col justify-between">
                                <span className="font-semibold text-sm">
                                    Darrell Steward
                                </span>
                                <span className="text-xs text-zinc-500">
                                    Manager
                                </span>
                            </div>
                        )}
                    </div>
                    {!isHidden && <UserBtnActions />}
                </div>
            </div>
        </div>
    );
};

export default UserMenu;
