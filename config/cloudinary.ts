import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import path from 'path';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key:    process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

const isVideoExt = (ext: string) =>
  ['.mp4', '.mov', '.webm', '.avi', '.mkv'].includes(ext.toLowerCase());

const BASE_FOLDER = 'andriraymond/assets';

export const uploadMedia = async (filePath: string, name?: string) => {
  try {
    const ext = path.extname(filePath).toLowerCase();
    const isVideo = isVideoExt(ext);
    const resource_type = isVideo ? 'video' : 'image';
    const folder = `${BASE_FOLDER}/${isVideo ? 'videos' : 'photos'}`;

    const result = await cloudinary.uploader.upload(filePath, {
      folder,
      resource_type,
      public_id: name || undefined,
    });

    if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
    return result;
  } catch (err: any) {
    throw new Error('Upload gagal: ' + err.message);
  }
};
