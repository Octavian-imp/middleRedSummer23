import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

export const useFilterShip = () =>
    useSelector((state: RootState) => state.filterShipments);
