'use client';
import React from 'react';

export interface Biodata {
  name: string;
  address: string;
  degree: string;
  email: string;
  phone: string;
}

interface Props {
  biodata: Biodata | null;
  loading: boolean;
}

export default function BiodataSection({ biodata, loading }: Props) {
  const renderKey = (key: string) =>
    key.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

  if (loading) {
    return (
      <div className="flex-1 grid grid-cols-[100px_20px_1fr] gap-y-3 p-4 text-[15px] animate-pulse">
        {Array.from({ length: 5 }).map((_, idx) => (
          <React.Fragment key={idx}>
            <div className="h-4 bg-gray-300 rounded w-3/4" />
            <div className="h-4 bg-gray-200 rounded w-full" />
            <div className="h-4 bg-gray-200 rounded w-5/6" />
          </React.Fragment>
        ))}
      </div>
    );
  }

  if (!biodata) {
    return (
      <div className="flex-1 p-4 text-red-500">
        Gagal memuat biodata.
      </div>
    );
  }

  return (
    <div className="flex-1 grid grid-cols-[100px_20px_1fr] gap-y-3 p-4 text-[15px] h-60">
      {Object.entries(biodata).map(([key, value]) => (
        <React.Fragment key={key}>
          <div className="font-medium text-gray-700">{renderKey(key)}</div>
          <div>:</div>
          <div className="text-gray-800">{value || '-'}</div>
        </React.Fragment>
      ))}
    </div>
  );
}