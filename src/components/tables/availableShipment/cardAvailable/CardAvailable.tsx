import PercentProgress from "@/components/progressbar/percent/PercentProgress";
import TruckProgress from "@/components/progressbar/truck/TruckProgress";
import { localeTime, settingsShortTime } from "@/global/LocalTime";
import Link from "next/link";
import { IRowTableSeed } from "../../arrivalShipment/rowTable/types";

const CardAvailable = ({
    destStart,
    destEnd,
    depDate,
    totalWeight,
    maxWeight,
    shipNumber,
    truck,
}: Omit<IRowTableSeed, "arrDate">) => {
    return (
        <Link
            href={`/user/shipments/${shipNumber}`}
            className="flex flex-col flex-[1_1_45%] animate-inner-fade gap-y-4 rounded-lg p-6 bg-white"
        >
            <div className="flex justify-between items-center">
                <div className="flex font-semibold items-end gap-x-3 text-xl bg-gradient-to-t">
                    <span>
                        {destStart} - {destEnd}
                    </span>
                    <span className="text-sm text-gray-400">
                        {new Date(depDate).toLocaleString(
                            localeTime,
                            settingsShortTime
                        )}
                    </span>
                </div>
                <PercentProgress
                    totalValue={totalWeight}
                    maxValue={maxWeight}
                />
            </div>
            <div className="flex justify-between">
                <div className="flex flex-col">
                    <div className="flex flex-col justify-center">
                        <span className="text-gray-400">Available, kg</span>
                        <span>
                            <span>{totalWeight}</span>
                            <span className="text-gray-400">/{maxWeight}</span>
                        </span>
                    </div>
                    <div className="flex flex-col justify-center">
                        <span className="text-gray-400">Shipment number</span>
                        <span>{shipNumber}</span>
                    </div>
                    <div className="flex flex-col justify-center">
                        <span className="text-gray-400">Truck</span>
                        <span>{truck}</span>
                    </div>
                </div>
                <TruckProgress maxValue={maxWeight} totalValue={totalWeight} />
            </div>
        </Link>
    );
};

export default CardAvailable;
