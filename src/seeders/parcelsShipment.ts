import { localeTime, settingsShortTimeWithHour } from "@/global/LocalTime";

export type TParcelsList = {
    parcelNumber: string;
    weight: number;
    admissionDate: string;
};

export let parcels:TParcelsList[] = [
    {
        parcelNumber: "CN1253822IM",
        weight: 100,
        admissionDate: new Date(2023, 11, 11).toLocaleString(
            localeTime,
            settingsShortTimeWithHour
        ),
    },
    {
        parcelNumber: "AM1223425IN",
        weight: 10,
        admissionDate: new Date(2023, 11, 11).toLocaleString(
            localeTime,
            settingsShortTimeWithHour
        ),
    },
    {
        parcelNumber: "DS1254852I2",
        weight: 70,
        admissionDate: new Date(2023, 11, 11).toLocaleString(
            localeTime,
            settingsShortTimeWithHour
        ),
    },
    {
        parcelNumber: "DS1224355I2",
        weight: 80,
        admissionDate: new Date(2023, 11, 12).toLocaleString(
            localeTime,
            settingsShortTimeWithHour
        ),
    },
];
