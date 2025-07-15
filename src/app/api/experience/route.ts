import { prisma } from "@/src/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// GET /api/experience
export async function GET() {
  try {
    const experiences = await prisma.experience.findMany({
      select: {
        id: true,
        title: true,
        company: true,
        startDate: true,
        endDate: true,
        location: true, // lokasi kerja
        description: true,
      },
      orderBy : {
        startDate: "desc", // urutkan berdasarkan tanggal mulai terbaru
      },
    });

    return NextResponse.json(
      { message: "Get list experience successfully", data: experiences },
      { status: 200 }
    );
  } catch (error) {
    console.error("[GET /api/experience] Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch experience data" },
      { status: 500 }
    );
  }
}