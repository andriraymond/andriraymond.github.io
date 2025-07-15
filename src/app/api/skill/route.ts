// src/app/api/skill/route.ts
import { prisma } from '@/src/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const skills = await prisma.skill.findMany({
      select: { id: true, name: true, type: true },   // type: 'hardskill' | 'softskill'
      orderBy: { id: 'asc' },
    });

    return NextResponse.json(
      { message: 'Get list skill successfully', data: skills },
      { status: 200 }
    );
  } catch (error) {
    console.error('[GET /api/skill] Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch skill data' },
      { status: 500 }
    );
  }
}