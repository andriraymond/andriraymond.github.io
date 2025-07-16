'use client';
import React from 'react';
import { GraduationCap, Lightbulb } from 'lucide-react';

interface Props {
  formalEducation?: string[];
  nonformalEducation?: string[];
  loading: boolean;
}

export default function EducationSection({
  formalEducation = [],
  nonformalEducation = [],
  loading,
}: Props) {
  const maxLength = Math.max(formalEducation.length, nonformalEducation.length);

  if (loading) {
    return (
      <div className="space-y-4 pt-6">
        <div className="flex items-center w-full gap-6">
          <span className="text-[16px] text-[#252525] font-semibold tracking-widest uppercase">
            Formal Education
          </span>
          <div className="flex-grow h-[2px] bg-[#252525]" />
          <span className="text-[16px] text-[#252525] font-semibold tracking-widest uppercase">
            Non-Formal Education
          </span>
          <div className="flex-grow h-[2px] bg-[#252525]" />
        </div>
        <div className="grid grid-cols-2 gap-y-2 gap-x-6 p-4">
          {Array.from({ length: 3 }).map((_, idx) => (
            <React.Fragment key={idx}>
              <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4" />
              <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4" />
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4 pt-6">
      {/* Judul */}
      <div className="flex items-center w-full gap-6">
        <span className="text-[16px] text-[#252525] font-semibold tracking-widest uppercase">
          Formal Education
        </span>
        <div className="flex-grow h-[2px] bg-[#252525]" />
        <span className="text-[16px] text-[#252525] font-semibold tracking-widest uppercase">
          Non-Formal Education
        </span>
        <div className="flex-grow h-[2px] bg-[#252525]" />
      </div>

      {maxLength === 0 ? (
        <div className="text-[15px] text-gray-500 italic p-4">No education data available.</div>
      ) : (
        <div className="text-[15px] grid grid-cols-2 gap-y-2 gap-x-6 p-4">
          {Array.from({ length: maxLength }, (_, i) => (
            <React.Fragment key={i}>
              <div className="flex items-center gap-2">
                {formalEducation[i] && (
                  <GraduationCap className="w-4 h-4 text-gray-500" />
                )}
                <span>{formalEducation[i] ?? ''}</span>
              </div>
              <div className="flex items-center gap-2">
                {nonformalEducation[i] && (
                  <Lightbulb className="w-4 h-4 text-gray-500" />
                )}
                <span>{nonformalEducation[i] ?? ''}</span>
              </div>
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
}
