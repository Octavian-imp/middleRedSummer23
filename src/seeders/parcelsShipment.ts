import { localeTime, settingsShortTimeWithHour } from "@/global/LocalTime";

export const parcels = [
    {
        id: "CN1253822IM",
        totalWeight: 100,
        admissionDate: new Date(2023, 11, 11).toLocaleString(
            localeTime,
            settingsShortTimeWithHour
        ),
    },
    {
        id: "AM1223425IN",
        totalWeight: 10,
        admissionDate: new Date(2023, 11, 11).toLocaleString(
            localeTime,
            settingsShortTimeWithHour
        ),
    },
    {
        id: "DS1254852I2",
        totalWeight: 70,
        admissionDate: new Date(2023, 11, 11).toLocaleString(
            localeTime,
            settingsShortTimeWithHour
        ),
    },
    {
        id: "DS1224355I2",
        totalWeight: 80,
        admissionDate: new Date(2023, 11, 12).toLocaleString(
            localeTime,
            settingsShortTimeWithHour
        ),
    },
];
