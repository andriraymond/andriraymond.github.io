import type { NextApiRequest, NextApiResponse } from 'next';
import { uploadMedia } from '@/config/cloudinary';
import formidable from 'formidable';
import fs from 'fs';
import os from 'os';
import path from 'path';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const form = formidable({
    keepExtensions: true,
    uploadDir: path.join(os.tmpdir(), 'uploads'),
  });

  const data = await new Promise<{
    fields: formidable.Fields;
    files: formidable.Files;
  }>((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      else resolve({ fields, files });
    });
  });

  const file = Array.isArray(data.files.file) ? data.files.file[0] : data.files.file;
  const name = Array.isArray(data.fields.name) ? data.fields.name[0] : data.fields.name;

  if (!file || !file.filepath) {
    return res.status(400).json({ error: 'File not found' });
  }

  try {
    const result = await uploadMedia(file.filepath, name);
    return res.status(200).json(result);
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
}
