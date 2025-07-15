// src/app/api/skill/route.ts
import { prisma } from '@/src/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const educations = await prisma.education.findMany({
      select: { id: true, name: true, type: true },   // type: 'formal' | 'nonformal'
      orderBy: { id: 'asc' },
    });

    return NextResponse.json(
      { message: 'Get list education successfully', data: educations },
      { status: 200 }
    );
  } catch (error) {
    console.error('[GET /api/education] Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch education data' },
      { status: 500 }
    );
  }
}