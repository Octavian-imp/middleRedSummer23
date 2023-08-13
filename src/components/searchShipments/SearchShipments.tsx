import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useShipments } from "@/hooks/useShipments";
import { SEARCH, SET_DEFAULT } from "@/redux/actions/shipmentsActions";
import { ChangeEventHandler, useState } from "react";
import { CiSearch } from "react-icons/ci";
import Clock from "../Clock/Clock";
import { default as ButtonWithDropdown, default as SelectFilter } from "../buttonWithDropdown/ButtonWithDropdown";

const SearchFilterShipments = () => {
    const dataShipments = useShipments();
    const dispatch = useAppDispatch();
    const cities = [
        ...new Set<string>(dataShipments.map((item) => item.destEnd)),
    ];
    const departments = [
        ...new Set<string>(dataShipments.map((item) => item.department)),
    ];

    const [shipNumberValue, setShipNumberValue] = useState<string>("");
    const onChange: ChangeEventHandler<HTMLInputElement> = (el) => {
        setShipNumberValue(el.target.value);
        if (el.target.value.length === 0) {
            dispatch({ type: SET_DEFAULT });
        } else {
            dispatch({
                type: SEARCH,
                payload: { shipNumber: el.target.value },
            });
        }
    };

    //filter settings
    return (
        <div className="w-full bg-white rounded-lg flex items-center px-3 py-3 mb-8 gap-x-2">
            <CiSearch className="text-gray-500 text-xl" />
            <input
                type="text"
                placeholder="Search by Shipment Number"
                className="flex flex-1 px-2 py-1"
                defaultValue={shipNumberValue}
                onChange={onChange}
            />

            <ButtonWithDropdown
                label="City"
                defaultValue={cities[0]}
                values={cities}
                handlerClick={(textContent) => {
                    dispatch({
                        type: SEARCH,
                        payload: { destEnd: textContent },
                    });
                }}
                handlerRemoveValue={() => dispatch({ type: SET_DEFAULT })}
            />
            <SelectFilter
                label="Department"
                defaultValue={departments[0]}
                values={departments}
                handlerClick={(textContent) => {
                    dispatch({
                        type: SEARCH,
                        payload: { department: textContent },
                    });
                }}
                handlerRemoveValue={() => dispatch({ type: SET_DEFAULT })}
            />
            <Clock />
        </div>
    );
};

export default SearchFilterShipments;
