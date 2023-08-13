"use client";
import SecondaryButton from "@/components/buttons/secondary/SecondaryButton";
import ModalTable from "@/components/modals/ModalTable";
import PercentProgress from "@/components/progressbar/percent/PercentProgress";
import TruckProgress from "@/components/progressbar/truck/TruckProgress";
import {
    ILoadInfo,
    IRowTableSeed,
} from "@/components/tables/arrivalShipment/rowTable/types";
import IconTooltip from "@/components/tooltips/iconTooltip/IconTooltip";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { TActionSelectParcel, defaultStateSelectParcel, setDefault } from "@/reactReducers/parcelSelected";
import { ADD_PARCELS } from "@/redux/actions/shipmentsActions";
import { TParcelsList } from "@/seeders/parcelsShipment";
import { usePathname } from "next/navigation";
import {
    Dispatch,
    DragEventHandler,
    SetStateAction,
    useEffect,
    useState,
} from "react";
import { BsBox, BsTruck } from "react-icons/bs";

type Props = {
    truckInfo: IRowTableSeed;
    setChangeParcels: Dispatch<SetStateAction<TParcelsList[]>>;
    dispatchParcelSelected: Dispatch<TActionSelectParcel>;
};

const TruckLoad = ({ truckInfo, setChangeParcels, dispatchParcelSelected }: Props) => {
    const path = usePathname();
    const reduxDispatch = useAppDispatch();

    const [loadParcelsInfo, setLoadParcelsInfo] = useState<ILoadInfo[]>([]);

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
            if (
                maxWeight > dropDataJson.totalWeight &&
                currentWeightTruck + +dropDataJson.totalWeight <=
                    truckInfo.maxWeight
            ) {
                setTimeout(() => {
                    setChangeParcels((prev) => {
                        return prev.filter((curr) => {
                            if (
                                data.parcels.some(
                                    (el: Omit<ILoadInfo, "tierInfo">) =>
                                        el.parcelNumber === curr.parcelNumber
                                )
                            ) {
                                return false;
                            } else {
                                return true;
                            }
                        });
                    });
                }, 0);

                maxWeight -= +dropDataJson.totalWeight;
                setCurrentWeightTruck(
                    (prev) => prev + +dropDataJson.totalWeight
                );
                el.target.classList.remove("bg-success");
                el.target.classList.add("bg-primary", "pointer-events-none");

                const data = {
                    tierInfo: {
                        idCell: +el.target.id,
                        name: el.target.dataset.tierName,
                    },
                    ...dropDataJson,
                };
                setLoadParcelsInfo((prev) => [
                    ...prev,
                    ...data.parcels.map(
                        (parcel: Omit<ILoadInfo, "tierInfo">): ILoadInfo => ({
                            tierInfo: { ...data.tierInfo },
                            parcelNumber: parcel.parcelNumber,
                            admissionDate: parcel.admissionDate,
                            weight: parcel.weight,
                        })
                    ),
                ]);
                dispatchParcelSelected({type: setDefault, payload: defaultStateSelectParcel})
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
                        <span className="mr-2 capitalize">{tier.name}</span>
                        <IconTooltip tooltipText="Tooltip" />
                    </div>
                    <div className="flex gap-x-2 ">
                        {tier.cells.map((cell, index) => (
                            <label
                                key={cell.maxWeight}
                                htmlFor={`${tier.name}_${index}`}
                                data-tier-name={`${tier.name}`}
                                className={`flex-1 ${
                                    cell.isAvailable
                                        ? "bg-success"
                                        : "bg-slate-300 pointer-events-none"
                                } h-24 rounded-xl`}
                                data-max-weight={cell.maxWeight}
                                title={`max weight: ${cell.maxWeight}`}
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
                    handlerClick={(e) => {
                        try {
                            reduxDispatch({
                                type: ADD_PARCELS,
                                payload: {
                                    loadParcelsInfo,
                                    shipNumber: path.split("/").at(-1),
                                },
                            });
                        } catch (error) {
                            e.preventDefault();
                            console.error(error);
                        }
                    }}
                />
            </div>
        </div>
    );
};

export default TruckLoad;
