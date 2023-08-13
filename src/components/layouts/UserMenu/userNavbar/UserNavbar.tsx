"use client";
import { EStatusCountNotification } from "@/components/badges/countNotify/types";
import { useUserMenuContext } from "@/hooks/useUserMenuContext";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { BsBox, BsTruck } from "react-icons/bs";
import { FiFlag } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { LiaEnvelopeOpenSolid } from "react-icons/lia";
import SeparatorX from "../../../separator/SeparatorX";
import NavLink from "../navLink/NavLink";

const UserNavbar = () => {
    const { isHidden } = useUserMenuContext();
    return (
        <nav className="w-full gap-y-2 flex flex-col justify-center">
            <NavLink
                href="#"
                iconComponent={<AiOutlineInfoCircle />}
                text="Requests"
                isTextHidden={isHidden}
            />
            <NavLink
                href="#"
                iconComponent={<IoMdNotificationsOutline />}
                text="Notifications"
                isTextHidden={isHidden}
            />
            <SeparatorX />
            <NavLink
                href="#"
                iconComponent={<LiaEnvelopeOpenSolid />}
                text="Dashboard"
                isTextHidden={isHidden}
            />
            <NavLink
                href="/user/shipments"
                iconComponent={<BsTruck />}
                text="Shipments"
                isTextHidden={isHidden}
                notification={{
                    count: 10,
                    status: EStatusCountNotification.danger,
                }}
            />
            <NavLink
                href="#"
                iconComponent={<BsBox />}
                text="Parcels"
                isTextHidden={isHidden}
            />
            <NavLink
                href="#"
                iconComponent={<FiFlag />}
                text="Branches"
                isTextHidden={isHidden}
            />
            <NavLink
                href="#"
                iconComponent={<BiUser />}
                text="Clients"
                isTextHidden={isHidden}
            />
        </nav>
    );
};

export default UserNavbar;
