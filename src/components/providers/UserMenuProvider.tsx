'use client'
import { FC, PropsWithChildren, useMemo, useState } from "react";
import {
    UserMenuContext,
    initValueUserContext,
} from "../../Contexts/UserMenuContext";

export const UserMenuProvider: FC<PropsWithChildren<unknown>> = ({
    children,
}) => {
    const [isHidden, setIsHidden] = useState<boolean>(
        initValueUserContext.isHidden
    );
    const value = useMemo(() => ({ isHidden, setIsHidden }), [isHidden]);
    return (
        <UserMenuContext.Provider value={value}>
            {children}
        </UserMenuContext.Provider>
    );
};

export default UserMenuProvider;
