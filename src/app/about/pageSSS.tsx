'use client';
import React from 'react';
import { useEffect, useState } from 'react';
import '../../app/globals.css';

interface About {
  id: string;
  about: string;
}

interface Biodata {
  name: string;
  address: string;
  degree: string;
  email: string;
  phone: string;
}

export default function AboutPage() {
  // =================== FETCH ABOUT ===================
  const [abouts, setAbouts] = useState<About[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const hardSkills = [
    'HTML, CSS, JavaScript',
    'Laravel Framework',
    'Katalon Studio Test Automation',
    'Cypress Test Automation',
    'Playwright Test Automation',
    'Appium Test Automation',
    'Postman API Testing',
  ];
  
  const softSkills = [
    'Communication',
    'Collaboration',
    'Problem Solving',
    'Adaptability',
    'Criitical Thinking',
    'Time Management',
    'Teamwork & Leadership',
  ];


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/about');
        if (!res.ok) throw new Error('Failed to fetch');
        const json = await res.json();
        setAbouts(json.data);
      } catch (err) {
        console.error('Error fetching about data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // =================== FETCH BIODATA ===================
  const [biodata, setBiodata] = useState<Biodata | null>(null);
  const [biodataLoading, setBiodataLoading] = useState(true);

  useEffect(() => {
    const fetchBiodata = async () => {
      try {
        const res = await fetch('/api/biodata');
        if (!res.ok) throw new Error('Failed to fetch biodata');
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
      {/* Judul dengan garis */}
      <div className="flex items-center w-full">
        <span className="text-[16px] text-[#252525] font-semibold tracking-widest uppercase mr-4 letter-spacing">
          About
        </span>
        <div className="flex-grow h-[2px] bg-[#252525]" />
      </div>

      {/* Konten */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Kolom Kiri - Deskripsi About */}
        <div className="flex-1 text-[15px] text-justify leading-relaxed borders p-4">
          {loading ? (
            'Loading...'
          ) : (
            <>
              {abouts.length > 0 ? (
                abouts.map((item) => (
                  <p key={item.id} className="mb-4 whitespace-pre-line">
                    {item.about}
                  </p>
                ))
              ) : (
                <p>Tidak ada data "about".</p>
              )}
            </>
          )}
        </div>
      
        {/* Kolom Kanan - Biodata */}
        <div className="flex-1 flex flex-col items-center justify-center grid grid-cols-[80px_20px_1fr] gap-y-3 h-20 p-4 text-[15px] text-gray-700 borders">
          {biodataLoading ? (
            <div className="col-span-3">Loading...</div>
          ) : biodata ? (
            <>
              <div className="font-semibold self-start">Name</div>
              <div className="self-start">:</div>
              <div className="self-start">{biodata.name}</div>

              <div className="font-semibold self-start">Address</div>
              <div className="self-start">:</div>
              <div className="self-start">{biodata.address}</div>

              <div className="font-semibold self-start">Degree</div>
              <div className="self-start">:</div>
              <div className="self-start">{biodata.degree}</div>

              <div className="font-semibold self-start">Email</div>
              <div className="self-start">:</div>
              <div className="self-start">{biodata.email}</div>

              <div className="font-semibold self-start">Phone</div>
              <div className="self-start">:</div>
              <div className="self-start">{biodata.phone}</div>
            </>
          ) : (
            <div className="col-span-3 text-red-500">Gagal memuat biodata.</div>
          )}
        </div>

      </div>

      {/* Judul dengan garis SKILL*/}
      <div className="w-full h-full space-y-4">
        <div className="flex items-center w-full gap-6">
        <span className="text-[16px] text-[#252525] font-semibold tracking-widest uppercase mr-4 letter-spacing">
          Hard Skill
        </span>
        <div className="flex-grow h-[2px] bg-[#252525]" />
        <span className="text-[16px] text-[#252525] font-semibold tracking-widest uppercase mr-4 letter-spacing">
          Soft Skill
        </span>
        <div className="flex-grow h-[2px] bg-[#252525]" />
      </div>

      {/* Isi Skill */}
      {/* <div className="grid p-4 grid-cols-[1fr_1fr] gap-y-2 gap-6">
        {hardSkills.map((hard, idx) => (
          <React.Fragment key={idx}>
            <div className="flex items-start gap-2">
              <span className="text-gray-500">-</span>
              <span>{hard}</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-gray-500">-</span>
              <span>{softSkills[idx] || ''}</span>
            </div>
          </React.Fragment>
        ))}
      </div> */}

      {/* SKILL */}
      <div className="grid p-4 grid-cols-2 gap-y-2 gap-x-8">
        {Array.from(
          { length: Math.max(hardSkills.length, softSkills.length) },
          (_, i) => (
            <React.Fragment key={i}>
              {/* Hard Skill */}
              <div className="flex items-start gap-2">
                {hardSkills[i] && <span className="text-gray-500">-</span>}
                <span>{hardSkills[i] ?? ''}</span>
              </div>

              {/* Soft Skill */}
              <div className="flex items-start gap-2">
                {softSkills[i] && <span className="text-gray-500">-</span>}
                <span>{softSkills[i] ?? ''}</span>
              </div>
            </React.Fragment>
          )
        )}
      </div>
      

      </div>
    </div>
  );
}