import { IRowTable } from "@/components/tables/rowTable/types";
import { EStatuses } from "@/global/EStatuses";

const dataTableShipment: IRowTable[] = [
  {
    destStart: "Moscow",
    destEnd: "Vladivostok",
    shipNumber: "A15348",
    status: { text: "delayed", code: EStatuses.danger },
    truck: "iveco 1809",
    arrDate: new Date(2023, 12, 16, 10, 0),
    depDate: new Date(2023, 12, 10, 10, 0),
    totalWeight: 800,
  },
  {
    destStart: "Moscow",
    destEnd: "Venice",
    shipNumber: "ABD348",
    status: { text: "arrived", code: EStatuses.success },
    truck: "iveco 2109",
    arrDate: new Date(2023, 12, 24, 10, 0),
    depDate: new Date(2023, 11, 10, 10, 0),
    totalWeight: 750,
  },
  {
    destStart: "Moscow",
    destEnd: "Rome",
    shipNumber: "FD48546",
    status: { text: "on way", code: EStatuses.warning },
    truck: "iveco 2009",
    arrDate: new Date(2023, 12, 16, 10, 0),
    depDate: new Date(2023, 5, 10, 10, 0),
    totalWeight: 790,
  },
];
export default dataTableShipment;
