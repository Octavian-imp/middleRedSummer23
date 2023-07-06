import { createContext } from "react";

type TInitValueUserMenuContext = {
    isHidden: boolean;
    setIsHidden: (val: boolean) => void;
};

export const initValueUserContext: TInitValueUserMenuContext = {
    isHidden: false,
    setIsHidden: () => {},
};

export const UserMenuContext =
    createContext<TInitValueUserMenuContext>(initValueUserContext);
