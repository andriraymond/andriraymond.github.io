import { prisma } from '@/src/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

// GET /api/portfolio
export async function GET() {
  try {
    const portfolios = await prisma.portfolio.findMany({
      select: {
        id: true,
        title: true,
        description: true,
        imageUrl: true,
        link: true,
      },
    });

    return NextResponse.json({ message: "Get list portfolio successfully", data: portfolios }, { status: 200 });
  } catch (error) {
    console.error('[GET /api/portfolio] Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch portfolio data' },
      { status: 500 }
    );
  }
}