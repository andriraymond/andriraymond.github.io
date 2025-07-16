import { prisma } from '@/src/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

// DELETE /api/about/[id]
export async function DELETE(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const id = url.pathname.split('/').pop(); // extract id from path

    if (!id) {
      return NextResponse.json({ error: 'Param "id" is required.' }, { status: 400 });
    }

    const deletedAbout = await prisma.about.delete({
      where: { id },
    });

    return NextResponse.json({ message: "Delete successfully", about: deletedAbout }, { status: 200 });
  } catch (error) {
    console.error('[DELETE /api/about/:id] Error:', error);
    return NextResponse.json({ error: 'Failed to delete about data' }, { status: 500 });
  }
}

// PUT /api/about/[id]
export async function PUT(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const id = url.pathname.split('/').pop(); // extract id from path

    if (!id) {
      return NextResponse.json({ error: 'Param "id" is required.' }, { status: 400 });
    }

    const body = await req.json();
    const updatedAbout = await prisma.about.update({
      where: { id },
      data: body,
    });

    return NextResponse.json({ message: "Update successfully", about: updatedAbout }, { status: 200 });
  } catch (error) {
    console.error('[PUT /api/about/:id] Error:', error);
    return NextResponse.json({ error: 'Failed to update about data' }, { status: 500 });
  }
}

// // app/api/about/route.ts
// import { prisma } from '@/src/lib/prisma';
// import { NextRequest, NextResponse } from 'next/server';

// // DELETE /api/about/<id>
// export async function DELETE(
//   _req: NextRequest,
//   { params }: { params: { id: string } }
// ) {
//   try {
//     const { id } = params;          // ← URL param /api/about/123
//     if (!id) {
//       return NextResponse.json(
//         { error: 'Param "id" is required.' },
//         { status: 400 }
//       );
//     }

//     const deletedAbout = await prisma.about.delete({
//       where: { id },
//     });

//     return NextResponse.json({ message: "Delete successfully", about: deletedAbout }, { status: 200 });
//   } catch (error) {
//     console.error('[DELETE /api/about/:id] Error:', error);
//     return NextResponse.json(
//       { error: 'Failed to delete about data' },
//       { status: 500 }
//     );
//   }
// }

// // UPDATE /api/about/<id>
// export async function PUT(
//   req: NextRequest,
//   { params }: { params: { id: string } }
// ) {
//   try {
//     const { id } = params;          // ← URL param /api/about/123
//     if (!id) {
//       return NextResponse.json(
//         { error: 'Param "id" is required.' },
//         { status: 400 }
//       );
//     }

//     const body = await req.json();
//     const updatedAbout = await prisma.about.update({
//       where: { id },
//       data: body,
//     });

//     return NextResponse.json({ message: "Update successfully", about: updatedAbout }, { status: 200 });
//   } catch (error) {
//     console.error('[PUT /api/about/:id] Error:', error);
//     return NextResponse.json(
//       { error: 'Failed to update about data' },
//       { status: 500 }
//     );
//   }
// }