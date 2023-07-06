import { IRowTable } from "@/components/tables/rowTable/types";
import { EStatuses } from "@/global/EStatuses";

const dataTableShipment: IRowTable[] = [
  {
    destStart: "Moscow",
    destEnd: "Vladivostok",
    shipNumber: "A15348",
    status: { text: "delayed", code: EStatuses.danger },
    truck: "iveco 1809",
    arrDate: new Date(2023, 11, 16, 10, 0),
    depDate: new Date(2023, 11, 10, 10, 0),
    totalWeight: 800,
    maxWeight: 1500
  },
  {
    destStart: "Moscow",
    destEnd: "Venice",
    shipNumber: "ABD348",
    status: { text: "arrived", code: EStatuses.success },
    truck: "iveco 2109",
    arrDate: new Date(2023, 11, 24, 10, 0),
    depDate: new Date(2023, 11, 10, 10, 0),
    totalWeight: 750,
    maxWeight: 1500
  },
  {
    destStart: "Moscow",
    destEnd: "Rome",
    shipNumber: "FD48546",
    status: { text: "on way", code: EStatuses.warning },
    truck: "iveco 2009",
    arrDate: new Date(2023, 11, 16, 10, 0),
    depDate: new Date(2023, 5, 10, 10, 0),
    totalWeight: 790,
    maxWeight: 1500
  },
  {
    destStart: "Moscow",
    destEnd: "Paris",
    shipNumber: "FD46746",
    status: { text: "on way", code: EStatuses.warning },
    truck: "iveco 2019",
    arrDate: new Date(2023, 8, 10, 10, 0),
    depDate: new Date(2023, 6, 15, 10, 0),
    totalWeight: 790,
    maxWeight: 900
  },
];
export default dataTableShipment;
