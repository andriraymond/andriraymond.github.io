import React, { useEffect, useState, useMemo, use } from 'react';

import {
  MapPin,
  Mail,
  Phone
} from "lucide-react";

export interface Biodata {
    email: string;
    phone: string;
    address: string;
}

interface ContactProps {// Define any props if needed
    contacts: Biodata[];
}
export default function Contact() {
    const [biodata, setBiodata] = useState<Biodata | null>(null);
    const [biodataLoading, setBiodataLoading] = useState(true);
    
    useEffect(() => {
    const fetchBiodata = async () => {
        try {
        const res = await fetch('/api/biodata');
        const json = await res.json();
        setBiodata(json.data);
        } catch (err) {
        console.error('Error fetching biodata:', err);
        } finally {
        setBiodataLoading(false);
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
          {/* <h3 className="text-[15px] text-[#252525] font-medium">Address</h3> */}
          <p className="text-sm text-[#252525]">{biodata?.address}</p>
        </div>
        <div className="border p-4 shadow-md bg-gradient-to-r flex flex-col justify-center items-center gap-2 p-6">
          <Mail className="w-5 h-5 text-[#252525]" />
          {/* <h3 className="text-[15px] text-[#252525] font-medium">Email</h3> */}
          <p className="text-sm text-[#252525]">{biodata?.email}</p>
        </div>
        <div className="border p-4 shadow-md bg-gradient-to-r flex flex-col justify-center items-center gap-2 p-6">
          <Phone className="w-5 h-5 text-[#252525]" />
          {/* <h3 className="text-[15px] text-[#252525] font-medium">Phone</h3> */}
          <p className="text-sm text-[#252525]">{biodata?.phone}</p>
        </div>
        </div>
    </div>
    );
}