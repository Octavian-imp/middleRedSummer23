import { localeTime } from "@/global/LocalTime";
import { IRowTable } from "../rowTable/types";

type Props = {
    data: IRowTable[];
};

const AvailableShipmentTable = ({ data }: Props) => {
    return (
        <div className={`flex flex-wrap gap-4`}>
            {data &&
                data.map((item) => (
                    <div
                        key={item.shipNumber}
                        className="flex flex-col flex-[1_1_45%] gap-y-4 rounded-lg p-6 bg-white"
                    >
                        <div className="flex justify-between items-center">
                            <div className="flex font-semibold items-end gap-x-3 text-xl">
                                <span>
                                    {item.destStart} - {item.destEnd}
                                </span>
                                <span className="text-sm text-gray-400">
                                    {new Date(item.depDate).toLocaleString(
                                        localeTime,
                                        {
                                            day: "numeric",
                                            month: "short",
                                            year: "numeric",
                                        }
                                    )}
                                </span>
                            </div>
                            <span
                                className="text-green-500 text-3xl"
                                title={`${item.totalWeight}/${item.maxWeight}`}
                            >
                                {item.totalWeight &&
                                    item.maxWeight &&
                                    (
                                        (item.totalWeight * 100) /
                                        item.maxWeight
                                    ).toFixed(0)}
                                %
                            </span>
                        </div>
                        <div className="flex flex-col justify-center">
                            <span className="text-gray-400">Available, kg</span>
                            <span>
                                <span>{item.totalWeight}</span>/
                                <span className="text-gray-400">
                                    {item.maxWeight}
                                </span>
                            </span>
                        </div>
                        <div className="flex flex-col justify-center">
                            <span className="text-gray-400">
                                Shipment number
                            </span>
                            <span>{item.shipNumber}</span>
                        </div>
                        <div className="flex flex-col justify-center">
                            <span className="text-gray-400">Truck</span>
                            <span>{item.truck}</span>
                        </div>
                        <progress
                            className="rounded-full self-end"
                            value={`${item.totalWeight}`}
                            max={`${item.maxWeight}`}
                        ></progress>
                    </div>
                ))}
        </div>
    );
};

export default AvailableShipmentTable;
