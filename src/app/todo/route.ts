import prisma from "@/libs/prisma"

import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {

    const data = await prisma.sensor.findMany();

    return NextResponse.json(data)
}