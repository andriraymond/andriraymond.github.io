import { prisma } from '@/src/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

// GET /api/about
export async function GET() {
  try {
    const abouts = await prisma.about.findMany({
      select: {
        id: true,
        about: true,
      },
    });

    return NextResponse.json({ message: "Get list about succesfully", data: abouts }, { status: 200 });
  } catch (error) {
    console.error('[GET /api/about] Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch about data' },
      { status: 500 }
    );
  }
}

// POST /api/about
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { about } = body;

    if (!about || typeof about !== 'string' || about.trim() === '') {
      return NextResponse.json(
        { error: 'Field "about" is required and must be a non-empty string.' },
        { status: 400 }
      );
    }

    const newAbout = await prisma.about.create({
      data: {
        about: about.trim(),
      },
    });

    return NextResponse.json({ message: "Add about succesfully", data: newAbout }, { status: 201 });
  } catch (error) {
    console.error('[POST /api/about] Error:', error);
    return NextResponse.json(
      { error: 'Failed to create about data' },
      { status: 500 }
    );
  }
}