import { useUserMenuContext } from "@/hooks/useUserMenuContext";
import { FaTruckFast } from "react-icons/fa6";
import logoStyles from "./logo.module.scss";

const Logo = () => {
    const { isHidden } = useUserMenuContext();
    return (
        <div
            className={
                isHidden
                    ? logoStyles.logo__wrapper__hidden
                    : logoStyles.logo__wrapper
            }
        >
            <FaTruckFast className={logoStyles.icon} />
            {!isHidden && (
                <div className={logoStyles.content__wrapper}>
                    <span className={logoStyles.company__name}>Wayels</span>
                    <span className={logoStyles.company__service}>
                        workspace
                    </span>
                </div>
            )}
        </div>
    );
};

export default Logo;
