'use client';
import React from 'react';

export interface About {
  id: string;
  about: string;
}

interface Props {
  abouts: About[];
  loading: boolean;
}

export default function AboutDescription({ abouts, loading }: Props) {
  if (loading) {
    return (
      <div className="flex-1 text-[15px] p-4 space-y-3 animate-pulse">
        <div className="h-4 bg-gray-300 rounded w-3/4" />
        <div className="h-4 bg-gray-200 rounded w-full" />
        <div className="h-4 bg-gray-200 rounded w-5/6" />
      </div>
    );
  }

  return (
    <div className="flex-1 text-[15px] text-justify leading-relaxed p-4 border-gray-200 rounded-md">
      {abouts.length > 0 ? (
        abouts.map((item) => (
          <p key={item.id} className="mb-4 whitespace-pre-line">
            {item.about}
          </p>
        ))
      ) : (
        <p className="italic text-gray-500">Tidak ada data tentang saya.</p>
      )}
    </div>
  );
}
