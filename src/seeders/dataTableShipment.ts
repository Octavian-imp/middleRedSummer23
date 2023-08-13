import { IRowTableSeed } from "@/components/tables/arrivalShipment/rowTable/types";
import { EStatuses } from "@/global/EStatuses";
import { localeTime } from "@/global/LocalTime";
import { parcels } from "./parcelsShipment";

const dataTableShipment: IRowTableSeed[] = [
    {
        destStart: "Moscow",
        destEnd: "Vladivostok",
        shipNumber: "A15348",
        status: { text: "delayed", code: EStatuses.danger },
        truck: "iveco 1809",
        arrDate: new Date(2023, 11, 16, 10, 0).toLocaleString(localeTime, {
            day: "numeric",
            month: "numeric",
            year: "numeric",
        }),
        depDate: new Date(2023, 11, 10, 10, 0).toLocaleString(localeTime, {
            day: "numeric",
            month: "numeric",
            year: "numeric",
        }),
        totalWeight: 800,
        maxWeight: 1500,
        department: "1",
        tiersInfo: [
            {
                name: "Upper tier",
                cells: [
                    { id: 0, maxWeight: 150, isAvailable: true },
                    { id: 1, maxWeight: 200, isAvailable: true },
                    { id: 2, maxWeight: 250, isAvailable: false },
                ],
            },
            {
                name: "middle tier",
                cells: [
                    { id: 0, maxWeight: 50, isAvailable: true },
                    { id: 1, maxWeight: 100, isAvailable: false },
                    { id: 2, maxWeight: 125, isAvailable: true },
                ],
            },
            {
                name: "low tier",
                cells: [
                    { id: 0, maxWeight: 10, isAvailable: true },
                    { id: 1, maxWeight: 25, isAvailable: true },
                    { id: 3, maxWeight: 35, isAvailable: false },
                ],
            },
        ],
        loadInfo: [
            {
                tierInfo: { name: "Upper tier", idCell: 0 },
                parcelNumber: parcels[0].parcelNumber,
                weight: parcels[0].weight,
                admissionDate: parcels[0].admissionDate,
            },
        ],
    },
    {
        destStart: "Moscow",
        destEnd: "Venice",
        shipNumber: "ABD348",
        status: { text: "arrived", code: EStatuses.success },
        truck: "iveco 2109",
        arrDate: new Date(2023, 11, 24, 10, 0).toLocaleString(localeTime, {
            day: "numeric",
            month: "numeric",
            year: "numeric",
        }),
        depDate: new Date(2023, 11, 10, 10, 0).toLocaleString(localeTime, {
            day: "numeric",
            month: "numeric",
            year: "numeric",
        }),
        totalWeight: 750,
        maxWeight: 1500,
        department: "2",
        tiersInfo: [
            {
                name: "Upper tier",
                cells: [
                    { id: 0, maxWeight: 150, isAvailable: true },
                    { id: 1, maxWeight: 200, isAvailable: true },
                    { id: 2, maxWeight: 250, isAvailable: false },
                ],
            },
            {
                name: "middle tier",
                cells: [
                    { id: 0, maxWeight: 50, isAvailable: true },
                    { id: 1, maxWeight: 100, isAvailable: false },
                    { id: 2, maxWeight: 125, isAvailable: true },
                ],
            },
            {
                name: "low tier",
                cells: [
                    { id: 0, maxWeight: 10, isAvailable: true },
                    { id: 1, maxWeight: 25, isAvailable: true },
                    { id: 3, maxWeight: 35, isAvailable: false },
                ],
            },
        ],
        loadInfo: [
            {
                tierInfo: { name: "Upper tier", idCell: 0 },
                parcelNumber: parcels[1].parcelNumber,
                weight: parcels[1].weight,
                admissionDate: parcels[1].admissionDate,
            },
        ],
    },
    {
        destStart: "Moscow",
        destEnd: "Rome",
        shipNumber: "FD48546",
        status: { text: "on way", code: EStatuses.warning },
        truck: "iveco 2009",
        arrDate: new Date(2023, 11, 16, 10, 0).toLocaleString(localeTime, {
            day: "numeric",
            month: "numeric",
            year: "numeric",
        }),
        depDate: new Date(2023, 5, 10, 10, 0).toLocaleString(localeTime, {
            day: "numeric",
            month: "numeric",
            year: "numeric",
        }),
        totalWeight: 790,
        maxWeight: 1500,
        department: "3",
        tiersInfo: [
            {
                name: "Upper tier",
                cells: [
                    { id: 0, maxWeight: 150, isAvailable: true },
                    { id: 1, maxWeight: 200, isAvailable: true },
                    { id: 2, maxWeight: 250, isAvailable: false },
                ],
            },
            {
                name: "middle tier",
                cells: [
                    { id: 0, maxWeight: 50, isAvailable: true },
                    { id: 1, maxWeight: 100, isAvailable: false },
                    { id: 2, maxWeight: 125, isAvailable: true },
                ],
            },
            {
                name: "low tier",
                cells: [
                    { id: 0, maxWeight: 10, isAvailable: true },
                    { id: 1, maxWeight: 25, isAvailable: true },
                    { id: 3, maxWeight: 35, isAvailable: false },
                ],
            },
        ],
        loadInfo: [
            {
                tierInfo: { name: "Upper tier", idCell: 0 },
                parcelNumber: parcels[2].parcelNumber,
                weight: parcels[2].weight,
                admissionDate: parcels[2].admissionDate,
            },
        ],
    },
    {
        destStart: "Moscow",
        destEnd: "Paris",
        shipNumber: "FD46746",
        status: { text: "on way", code: EStatuses.warning },
        truck: "iveco 2019",
        arrDate: new Date(2023, 8, 10, 10, 0).toLocaleString(localeTime, {
            day: "numeric",
            month: "numeric",
            year: "numeric",
        }),
        depDate: new Date(2023, 6, 15, 10, 0).toLocaleString(localeTime, {
            day: "numeric",
            month: "numeric",
            year: "numeric",
        }),
        totalWeight: 790,
        maxWeight: 900,
        department: "4",
        tiersInfo: [
            {
                name: "Upper tier",
                cells: [
                    { id: 0, maxWeight: 150, isAvailable: true },
                    { id: 1, maxWeight: 200, isAvailable: true },
                    { id: 2, maxWeight: 250, isAvailable: false },
                ],
            },
            {
                name: "middle tier",
                cells: [
                    { id: 0, maxWeight: 50, isAvailable: true },
                    { id: 1, maxWeight: 100, isAvailable: false },
                    { id: 2, maxWeight: 125, isAvailable: true },
                ],
            },
            {
                name: "low tier",
                cells: [
                    { id: 0, maxWeight: 10, isAvailable: true },
                    { id: 1, maxWeight: 25, isAvailable: true },
                    { id: 3, maxWeight: 35, isAvailable: false },
                ],
            },
        ],
        loadInfo: [
            {
                tierInfo: { name: "Upper tier", idCell: 0 },
                parcelNumber: parcels[3].parcelNumber,
                weight: parcels[3].weight,
                admissionDate: parcels[3].admissionDate,
            },
        ],
    },
];
export default dataTableShipment;
