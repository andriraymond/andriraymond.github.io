import React from 'react';

import {
  GraduationCap,
  Lightbulb,
} from "lucide-react";

export default function EducationSection({
  formalEducation = [],
  nonformalEducation = [],
  loading,
}: {
  formalEducation?: string[];
  nonformalEducation?: string[];
  loading: boolean;
}) {
  return (
    <div className="space-y-4">
      {/* Judul */}
      <div className="flex items-center w-full gap-6 pt-6">
        <span className="text-[16px] text-[#252525] font-semibold tracking-widest uppercase">
          Formal Education
        </span>
        <div className="flex-grow h-[2px] bg-[#252525]" />
        <span className="text-[16px] text-[#252525] font-semibold tracking-widest uppercase">
          Non-Formal Education
        </span>
        <div className="flex-grow h-[2px] bg-[#252525]" />
      </div>

      {formalEducation.length === 0 && nonformalEducation.length === 0 ? (
        <div className="flex-1 text-[15px] text-justify leading-relaxed borders p-4">
          Loading...
        </div>
      ) : (
        <div className="text-[15px] grid p-4 grid-cols-2 gap-y-2 gap-x-6 borders">
          {Array.from(
            { length: Math.max(formalEducation.length, nonformalEducation.length) },
            (_, i) => (
              <React.Fragment key={i}>
                <div className="flex items-center gap-2">
                  {/* {formalEducation[i] && <span className="text-gray-500">-</span>} */}
                  {formalEducation[i] && <GraduationCap className="w-4 h-4 text-gray-500" />}
                  {/* {formalEducation[i] && <GraduationCap className="w-4 h-4 text-gray-500" />} */}
                  
                  <span>{formalEducation[i] ?? ''}</span>
                </div>
                <div className="flex items-center gap-2">
                  {nonformalEducation[i] && <Lightbulb className="w-4 h-4 text-gray-500" />}
                  <span>{nonformalEducation[i] ?? ''}</span>
                </div>
              </React.Fragment>
            )
          )}
        </div>
      )}
    </div>
  );
}