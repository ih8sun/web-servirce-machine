import { dbData } from "@/libs/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {

    const data = await dbData.sensorData.findMany();

    return NextResponse.json(data)
}