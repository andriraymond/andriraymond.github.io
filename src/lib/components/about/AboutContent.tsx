'use client';
import React from 'react';
import AboutDescription from './AboutDescription';
import BiodataSection from './BiodataSection';
import SkillSection from './SkillSection';
import EducationSection from './EducationSection';

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

interface Props {
  abouts: About[];
  biodata: Biodata | null;
  hardSkills: string[];
  softSkills: string[];
  formalEducation: string[];
  nonformalEducation: string[];
  loading: boolean;
  biodataLoading: boolean;
}

export default function AboutContent({
  abouts,
  biodata,
  hardSkills,
  softSkills,
  formalEducation,
  nonformalEducation,
  loading,
  biodataLoading,
}: Props) {
  return (
    <div className="w-full h-full p-4 space-y-6 mb-10">
      {/* Section Title */}
      <div className="flex items-center w-full">
        <span className="text-[16px] text-[#252525] font-semibold tracking-widest uppercase mr-4">
          About
        </span>
        <div className="flex-grow h-[2px] bg-[#252525]" />
      </div>

      {/* About & Biodata */}
      <div className="flex flex-col lg:flex-row gap-6">
        <AboutDescription abouts={abouts} loading={loading} />
        <BiodataSection biodata={biodata} loading={biodataLoading} />
      </div>

      {/* Skills */}
      <SkillSection hardSkills={hardSkills} softSkills={softSkills} loading={loading} />

      {/* Education */}
      <EducationSection
        formalEducation={formalEducation}
        nonformalEducation={nonformalEducation}
        loading={loading}
      />
    </div>
  );
}