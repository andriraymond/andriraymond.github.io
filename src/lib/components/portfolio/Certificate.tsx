'use client';
import React from 'react';

export interface Certificate {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  link: string;
  created_at: Date;
}

interface CertificateProps {
  certificates: Certificate[];
  loading: boolean;
}

export default function CertificateContent({ certificates, loading }: CertificateProps) {
  return (
    <div className="w-full h-full p-4 space-y-4">
      <div className="flex items-center w-full">
        <span className="text-[16px] text-[#252525] font-semibold tracking-widest uppercase mr-4">
          Certificates
        </span>
        <div className="flex-grow h-[2px] bg-[#252525]" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading
          ? Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="p-4 border rounded-lg shadow animate-pulse bg-gray-50 space-y-3">
                <div className="w-full h-32 bg-gray-300 rounded-lg" />
                <div className="h-4 bg-gray-300 rounded w-2/3" />
              </div>
            ))
          : certificates.map((certificate) => (
              <a
                key={certificate.id}
                href={certificate.link}
                target="_blank"
                rel="noopener noreferrer"
                className="border rounded-lg p-4 shadow-md hover:shadow-lg transition bg-white"
              >
                <img
                  src={certificate.imageUrl}
                  alt={certificate.name}
                  style={{ maxHeight: '190px', objectFit: 'cover' }}
                  className="rounded-lg mb-4 w-full"
                />
                <h3 className="text-[15px] font-semibold leading-tight">{certificate.name}</h3>
              </a>
            ))}
      </div>
    </div>
  );
}
