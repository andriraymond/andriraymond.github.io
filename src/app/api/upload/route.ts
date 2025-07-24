import { NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';
import type { UploadApiResponse } from 'cloudinary';
import { prisma } from '@/src/lib/prisma';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

export async function POST(req: Request) {
  const data = await req.formData();
  const file = data.get('file') as File | null;
  const namaFoto = data.get('namaFoto') as string | null;

  if (!file) {
    return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  try {
    const upload = await new Promise<UploadApiResponse>((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            folder: 'andriraymond/assets/upload/',
            public_id: namaFoto || undefined,
            overwrite: true,
          },
          (error, result) => {
            if (error || !result) return reject(error || new Error('Upload failed'));
            resolve(result);
          }
        )
        .end(buffer);
    });

    const saved = await prisma.photo.create({
      data: {
        name: namaFoto ?? '',
        path: upload.public_id,
      },
    });

    return NextResponse.json({
      url: upload.secure_url,
      data: upload.folder + upload.public_id,
      path: upload.public_id,
      db: saved,
    });
  } catch (err) {
    console.error('Upload failed:', err);
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
  }
}
