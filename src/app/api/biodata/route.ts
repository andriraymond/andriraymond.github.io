import { prisma } from '@/src/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

// GET /api/biodata
export async function GET() {
  try {
    const biodata = await prisma.biodata.findFirst({
      select: {
        // id: true,
        name: true,
        address: true,
        degree: true,
        email: true,
        phone: true,
      },
    });

    if (!biodata) {
      return NextResponse.json(
        { error: 'Biodata not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: "Get biodata successfully", data: biodata }, { status: 200 });
  } catch (error) {
    console.error('[GET /api/biodata] Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch biodata' },
      { status: 500 }
    );
  }
}