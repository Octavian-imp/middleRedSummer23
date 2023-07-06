import dataTableShipment from "@/seeders/dataTableShipment";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    return NextResponse.json(dataTableShipment, {
        status: 200,
    });
}
