import { RootState } from "@/redux/store";
import { useAppSelector } from "./useAppSelector";

export const useShipments = () =>
    useAppSelector((state: RootState) => state.shipments);
