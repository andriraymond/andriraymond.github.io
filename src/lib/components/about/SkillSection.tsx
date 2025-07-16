'use client';
import React from 'react';
import { Terminal, Zap } from 'lucide-react';

interface Props {
  hardSkills: string[];
  softSkills: string[];
  loading: boolean;
}

export default function SkillSection({ hardSkills, softSkills, loading }: Props) {
  const maxLength = Math.max(hardSkills.length, softSkills.length);

  return (
    <div className="space-y-4">
      {/* Judul */}
      <div className="flex items-center w-full gap-6 pt-6">
        <span className="text-[16px] text-[#252525] font-semibold tracking-widest uppercase">
          Hard Skill
        </span>
        <div className="flex-grow h-[2px] bg-[#252525]" />
        <span className="text-[16px] text-[#252525] font-semibold tracking-widest uppercase">
          Soft Skill
        </span>
        <div className="flex-grow h-[2px] bg-[#252525]" />
      </div>

      {/* Konten */}
      {loading ? (
        <div className="grid grid-cols-2 gap-y-2 gap-x-6 p-4 text-[15px] animate-pulse">
          {Array.from({ length: 4 }).map((_, i) => (
            <React.Fragment key={i}>
              <div className="h-4 bg-gray-300 rounded w-3/4" />
              <div className="h-4 bg-gray-300 rounded w-2/3" />
            </React.Fragment>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-y-2 gap-x-6 p-4 text-[15px] border border-gray-200 rounded-md">
          {Array.from({ length: maxLength }).map((_, i) => (
            <React.Fragment key={i}>
              <div className="flex items-center gap-2">
                {hardSkills[i] && <Terminal className="w-4 h-4 text-gray-500" />}
                <span>{hardSkills[i] ?? ''}</span>
              </div>
              <div className="flex items-center gap-2">
                {softSkills[i] && <Zap className="w-4 h-4 text-gray-500" />}
                <span>{softSkills[i] ?? ''}</span>
              </div>
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
}