import { IRowTableSeed } from "@/components/tables/arrivalShipment/rowTable/types";
import { fetchApi } from "@/global/Fetch";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const shipNumber = searchParams.get("shipNumber");
    const dataShipments = await fetchApi<IRowTableSeed[]>(
        "http://localhost:3000/api/shipments"
    );
    if (shipNumber === null) {
        return NextResponse.json(dataShipments, { status: 200 });
    }

    const result = dataShipments.filter((data) => {
        if (data.shipNumber.toLowerCase().includes(shipNumber)) {
            return true;
        }
        return false;
    });
    return NextResponse.json(result, { status: 200 });
}
