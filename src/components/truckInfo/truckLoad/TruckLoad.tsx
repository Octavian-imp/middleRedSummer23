"use client";
import SecondaryButton from "@/components/buttons/secondary/SecondaryButton";
import ModalTable from "@/components/modals/ModalTable";
import PercentProgress from "@/components/progressbar/percent/PercentProgress";
import TruckProgress from "@/components/progressbar/truck/TruckProgress";
import { IRowTableSeed } from "@/components/tables/arrivalShipment/rowTable/types";
import IconTooltip from "@/components/tooltips/iconTooltip/IconTooltip";
import { DragEventHandler, useEffect, useState } from "react";
import { BsBox, BsTruck } from "react-icons/bs";

const tier = [
    {
        label: "Upper tier",
        cells: [
            { maxWeight: 150, isEdit: true },
            { maxWeight: 100, isEdit: false },
            { maxWeight: 200, isEdit: false },
        ],
    },
    {
        label: "Middle tier",
        cells: [
            { maxWeight: 35, isEdit: false },
            { maxWeight: 50, isEdit: true },
            { maxWeight: 75, isEdit: false },
        ],
    },
    {
        label: "Low tier",
        cells: [
            { maxWeight: 10, isEdit: false },
            { maxWeight: 15, isEdit: true },
            { maxWeight: 20, isEdit: true },
        ],
    },
];

type Props = {
    truckInfo: IRowTableSeed;
};

const TruckLoad = ({ truckInfo }: Props) => {
    const [currentWeightTruck, setCurrentWeightTruck] = useState<number>(0);
    useEffect(() => {
        if (typeof truckInfo?.totalWeight !== "undefined") {
            setCurrentWeightTruck(truckInfo?.totalWeight);
        }
    }, [truckInfo.totalWeight]);

    const handleOnDrop: DragEventHandler<HTMLLabelElement> = (el: any) => {
        let dropDataJson = JSON.parse(
            el.dataTransfer.getData("application/json")
        );

        if (typeof dropDataJson !== "undefined") {
            let maxWeight = +el.target.dataset.maxWeight;
            if (maxWeight > dropDataJson.totalWeight) {
                maxWeight -= +dropDataJson.totalWeight;
                setCurrentWeightTruck(
                    (prev) => prev + +dropDataJson.totalWeight
                );
                el.target.classList.remove("bg-success");
                el.target.classList.add("bg-primary", "pointer-events-none");
                const data = {
                    tierInfo: {
                        id: el.target.id,
                        name: el.target.dataset.name,
                    },
                    data: dropDataJson,
                };
            } else {
                alert("Total weight is over");
            }
        }
    };

    const [openModal, setOpenModal] = useState(false);

    return (
        <div className="flex flex-col bg-white p-8 flex-1 rounded-lg">
            <div className="flex justify-between">
                <span className="text-primary-dark text-2xl">Truck load</span>
                <PercentProgress
                    totalValue={currentWeightTruck}
                    maxValue={truckInfo.maxWeight}
                />
            </div>
            <div className="flex justify-between">
                <div className="flex flex-col justify-center">
                    <span className="text-gray-400 text-lg">Available, kg</span>
                    <span className=" text-2xl">
                        <span>{currentWeightTruck}</span>
                        <span className="text-gray-400">
                            /{truckInfo.maxWeight}
                        </span>
                    </span>
                </div>
                <TruckProgress
                    totalValue={currentWeightTruck}
                    maxValue={truckInfo.maxWeight}
                />
            </div>
            {truckInfo.tiersInfo.map((tier) => (
                <div key={tier.name} className="flex flex-col mb-4 gap-y-4">
                    <div className="flex items-center">
                        <span className="mr-2">{tier.name}</span>
                        <IconTooltip tooltipText="Tooltip" />
                    </div>
                    <div className="flex gap-x-2 ">
                        {tier.cells.map((cell, index) => (
                            <label
                                key={cell.maxWeight}
                                htmlFor={`${tier.name}_${index}`}
                                data-name={`${tier.name}`}
                                className={`flex-1 ${
                                    cell.isAvailable
                                        ? "bg-success"
                                        : "bg-slate-300 pointer-events-none"
                                } h-24 rounded-xl`}
                                data-max-weight={cell.maxWeight}
                                id={`${index}`}
                                onDragOver={(el) => el.preventDefault()}
                                onDrop={handleOnDrop}
                            >
                                <input
                                    type="checkbox"
                                    value={cell.maxWeight}
                                    data-index={index}
                                    className="hidden"
                                    id={`${tier.name}_${index}`}
                                />
                            </label>
                        ))}
                    </div>
                </div>
            ))}
            <div className="flex gap-x-4 items-center">
                <SecondaryButton
                    className="flex-1"
                    iconComponent={<BsBox />}
                    text="View parcels list"
                    handlerClick={() => {
                        setOpenModal(true);
                    }}
                />
                <ModalTable
                    isActive={openModal}
                    setIsActive={setOpenModal}
                    data={truckInfo.loadInfo}
                    columns={[
                        "Parcel number",
                        "Weight",
                        "admission date",
                        "tier info",
                    ]}
                ></ModalTable>
                <SecondaryButton
                    link={"/user/shipments"}
                    className="flex-1"
                    iconComponent={<BsTruck />}
                    text="Finish loading"
                />
            </div>
        </div>
    );
};

export default TruckLoad;
