import { useUserMenuContext } from "@/hooks/useUserMenuContext";
import { AiOutlineLeft } from "react-icons/ai";
import showMenuBtnStyles from './showHideMenu.module.scss';

const ShowHideMenuBtn = () => {
    const { isHidden, setIsHidden } = useUserMenuContext();
    function changeSizeMenu() {
        setIsHidden(!isHidden);
    }
    return (
        <button
            className={
                isHidden
                    ? showMenuBtnStyles.button__wrapper__hidden
                    : showMenuBtnStyles.button__wrapper
            }
            onClick={changeSizeMenu}
        >
            <AiOutlineLeft className={showMenuBtnStyles.icon} />
        </button>
    );
};

export default ShowHideMenuBtn;
