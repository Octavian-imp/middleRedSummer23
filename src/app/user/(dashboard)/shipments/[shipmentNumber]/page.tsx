"use client";
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import { IRowTableSeed } from "@/components/tables/arrivalShipment/rowTable/types";
import ParcelTable from "@/components/tables/parcelTable/ParcelTable";
import TruckLoad from "@/components/truckInfo/truckLoad/TruckLoad";
import { localeTime, settingsShortTime } from "@/global/LocalTime";
import { useShipments } from "@/hooks/useShipments";
import { parcels } from "@/seeders/parcelsShipment";

type Props = { params: { shipmentNumber: string } };

function ShipmentNumberPage({ params }: Props) {
    const shipmentInfo = useShipments().find(
        (el) => el.shipNumber === params.shipmentNumber
    ) as IRowTableSeed;

    return (
        <div className="flex-1 flex flex-col mt-4 gap-y-4 animate-inner-fade justify-between">
            <Breadcrumbs />
            <div className="flex gap-x-4 items-center">
                <span className="font-bold text-2xl text-primary-dark">
                    {shipmentInfo?.destStart} - {shipmentInfo?.destEnd},{" "}
                    {shipmentInfo?.shipNumber}
                </span>
                <span className=" text-info text-sm">
                    {new Date(shipmentInfo?.arrDate).toLocaleString(
                        localeTime,
                        settingsShortTime
                    )}
                </span>
            </div>
            <div className="flex gap-x-4">
                <TruckLoad truckInfo={shipmentInfo} />
                <div className="bg-white p-8 flex-1 rounded-lg">
                    <ParcelTable parcels={parcels} />
                </div>
            </div>
        </div>
    );
}

export default ShipmentNumberPage;
