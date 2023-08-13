type TColumnNameForArrivalTable = {
    name: string;
    label: string;
};

export const columnNameForArrivalTable: TColumnNameForArrivalTable[] =
    [
        { name: "destination", label: "Destination" },
        { name: "shipNumber", label: "Shipment number" },
        { name: "truck", label: "Truck" },
        { name: "totalWeight", label: "Total weight, kg" },
        { name: "status", label: "Status" },
        { name: "depDate", label: "Departure date" },
        { name: "arrDate", label: "Arrival date" },
        { name: "timeDelay", label: "Time delay" },
    ];
