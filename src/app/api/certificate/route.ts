import { prisma } from "@/src/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// GET /api/certificate
export async function GET() {
  try {
    const certificates = await prisma.certificate.findMany({
      select: {
        id: true,
        name: true,
        description: true,
        imageUrl: true,
        link: true,
      },
    });

    return NextResponse.json(
      { message: "Get list certificate successfully", data: certificates },
      { status: 200 }
    );
  } catch (error) {
    console.error("[GET /api/certificate] Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch certificate data" },
      { status: 500 }
    );
  }
}

// POST /api/certificate
export async function POST(request: NextRequest) {
  try {
    // const body = await request.json();
    // const { name, description, imageUrl, link } = body;
    const formData = await request.formData();

    const name = formData.get('name')?.toString();
    const description = formData.get('description')?.toString() || '';
    const imageUrl = formData.get('imageUrl')?.toString();
    const link = formData.get('link')?.toString();

    if (!name || !imageUrl || !link) {
      return NextResponse.json(
        { error: "Name, imageUrl, and link are required" },
        { status: 400 }
      );
    }

    const newCertificate = await prisma.certificate.create({
      data: {
        name,
        description,
        imageUrl,
        link,
      },
    });

    return NextResponse.json(
      { message: "Certificate created successfully", data: newCertificate },
      { status: 201 }
    );
  } catch (error) {
    console.error("[POST /api/certificate] Error:", error);
    return NextResponse.json(
      { error: "Failed to create certificate" },
      { status: 500 }
    );
  }
}