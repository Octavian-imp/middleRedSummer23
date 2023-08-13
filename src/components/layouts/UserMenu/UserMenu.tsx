"use client";
import PrimaryButton from "@/components/buttons/primary/PrimaryButton";
import { useUserMenuContext } from "@/hooks/useUserMenuContext";
import avatar from "@/static/avatar.png";
import Image from "next/image";
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
                <PrimaryButton
                    iconComponent={<HiPlus className="text-lg" />}
                    text={!isHidden ? "Create shipment" : ""}
                    className="w-full"
                />
                <SeparatorX />
                <div
                    className={`flex items-center ${
                        !isHidden ? "justify-between" : "justify-center"
                    } w-full`}
                >
                    <div className="flex gap-x-3 items-center ">
                        <Image
                            src={avatar}
                            alt=""
                            className="w-7 h-7 rounded-full"
                        />
                        {!isHidden && (
                            <div className="flex flex-col justify-between">
                                <span className="font-semibold text-sm">
                                    Otto Octavius
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
