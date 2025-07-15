import React from 'react';
// import type { About } from '@/types/about-types';

export interface About {
  id: string;
  about: string;
}

export interface Biodata {
  name: string;
  address: string;
  degree: string;
  email: string;
  phone: string;
}

export default function AboutDescription({
  abouts,
  loading,
}: {
  abouts: About[];
  loading: boolean;
}) {
  return (
    <div className="flex-1 text-[15px] text-justify leading-relaxed borders p-4">
      {loading ? (
        'Loading...'
      ) : abouts.length > 0 ? (
        abouts.map((item) => (
          <p key={item.id} className="mb-4 whitespace-pre-line">
            {item.about}
          </p>
        ))
      ) : (
        <p>Tidak ada data "about".</p>
      )}
    </div>
  );
}