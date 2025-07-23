'use client';

import React, { useState } from 'react';
import '../../app/globals.css';

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [fileName, setFileName] = useState('');
  const [uploading, setUploading] = useState(false);
  const [resultUrl, setResultUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0] || null;
    setFile(selected);
    if (selected) {
      setPreviewUrl(URL.createObjectURL(selected));
    } else {
      setPreviewUrl(null);
    }
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file || !fileName.trim()) return;

    const formData = new FormData();
    formData.append('file', file);
    formData.append('name', fileName);

    setUploading(true);
    setError(null);
    setResultUrl(null);

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Upload failed');

      setResultUrl(json.secure_url || json.url);
    } catch (err: any) {
      setError(err.message || 'Upload error');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Upload Media ke Cloudinary</h1>

      <form onSubmit={handleUpload} className="space-y-4">
        <div>
          <label htmlFor="name" className="block font-medium text-sm">
            Nama File:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={fileName}
            onChange={(e) => setFileName(e.target.value)}
            required
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Misalnya: foto-profile-2025"
          />
        </div>

        <div>
          <label htmlFor="file" className="block font-medium text-sm">
            Pilih File:
          </label>
          <input
            type="file"
            id="file"
            name="file"
            accept="image/*,video/*"
            onChange={handleFileChange}
            required
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        
        {/*  */}
        <div>
          <label htmlFor="file" className="block mb-1">Pilih file foto/video</label>

          <label
            htmlFor="file"
            className="cursor-pointer inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            📁 Pilih File
          </label>

          <input
            id="file"
            name="file"
            type="file"
            accept="image/*,video/*"
            required
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="hidden"
          />

          {file && (
            <p className="mt-2 text-sm text-gray-600">
              File dipilih: <strong>{file.name}</strong>
            </p>
          )}
        </div>

        {/*  */}

        {previewUrl && (
          <div className="mt-4">
            <p className="text-sm text-gray-600">Preview:</p>
            {file?.type.startsWith('video') ? (
              <video src={previewUrl} controls className="w-full mt-2 rounded shadow" />
            ) : (
              <img src={previewUrl} alt="Preview" className="w-full mt-2 rounded shadow" />
            )}
          </div>
        )}

        <button
          type="submit"
          disabled={uploading}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          {uploading ? 'Uploading...' : 'Upload'}
        </button>
      </form>

      {resultUrl && (
        <div className="mt-6">
          <p className="text-green-600 font-medium">Upload berhasil!</p>
          <a
            href={resultUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline break-all"
          >
            {resultUrl}
          </a>
        </div>
      )}

      {error && (
        <div className="mt-4 text-red-600">
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}
