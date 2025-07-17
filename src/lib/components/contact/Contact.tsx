'use client';
import React, { useEffect, useState } from 'react';
import { MapPin, Mail, Phone } from "lucide-react";

export interface Biodata {
  email: string;
  phone: string;
  address: string;
}

export default function Contact() {
  const [biodata, setBiodata] = useState<Biodata | null>(null);

  useEffect(() => {
    const fetchBiodata = async () => {
      try {
        const res = await fetch('/api/biodata');
        const json = await res.json();
        setBiodata(json.data);
      } catch (err) {
        console.error('Error fetching biodata:', err);
      }
    };
    fetchBiodata();
  }, []);

  return (
    <div className="w-full h-full p-4 space-y-4">
      <div className="flex items-center w-full">
        <span className="text-[16px] text-[#252525] font-semibold tracking-widest uppercase mr-4">
          Contact
        </span>
        <div className="flex-grow h-[2px] bg-[#252525]" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="border p-4 shadow-md bg-gradient-to-r flex flex-col justify-center items-center gap-2 p-6">
          <MapPin className="w-5 h-5 text-[#252525]" />
          <p className="text-sm text-[#252525]">{biodata?.address || 'Loading...'}</p>
        </div>
        <div className="border p-4 shadow-md bg-gradient-to-r flex flex-col justify-center items-center gap-2 p-6">
          <Mail className="w-5 h-5 text-[#252525]" />
          <p className="text-sm text-[#252525]">{biodata?.email || 'Loading...'}</p>
        </div>
        <div className="border p-4 shadow-md bg-gradient-to-r flex flex-col justify-center items-center gap-2 p-6">
          <Phone className="w-5 h-5 text-[#252525]" />
          <p className="text-sm text-[#252525]">{biodata?.phone || 'Loading...'}</p>
        </div>
      </div>
    </div>
  );
}
