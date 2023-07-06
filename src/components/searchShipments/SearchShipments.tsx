import { useGetShipmentsQuery } from "@/redux/api/shipmentApi";
import { ChangeEventHandler, useState } from "react";
import { CiSearch } from "react-icons/ci";
import Clock from "../Clock/Clock";
import SelectFilter from "../selectFilter/SelectFilter";


const SearchFilterShipments = () => {
    const { data: dataShipments, isSuccess } = useGetShipmentsQuery({});

    const [shipNumberValue, setShipNumberValue] = useState<string>();
    const onChange: ChangeEventHandler<HTMLInputElement> = (el) => {
        setShipNumberValue(el.target.value);
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
            {isSuccess && (
                <SelectFilter
                    label="City"
                    defaultValue={dataShipments[0].destStart}
                    values={[
                        ...new Set<string>(
                            dataShipments.map((item) => item.destStart)
                        ),
                    ]}
                />
            )}
            <SelectFilter label="Department" defaultValue="1" values={[]} />
            <Clock />
        </div>
    );
};

export default SearchFilterShipments;
