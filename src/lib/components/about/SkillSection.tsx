import React from 'react';
import '../../../app/globals.css';
import { Terminal, Zap } from 'lucide-react';

export default function SkillSection({
  hardSkills,
  softSkills,
  loading,
}: {
  hardSkills: string[];
  softSkills: string[];
  loading: boolean;
}) {
  return (
    <div className="space-y-4">
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

      {loading ? (
        <div className="flex-1 text-[15px] text-justify leading-relaxed borders p-4 min-h-50">Loading...</div>
      ) : (
        <div className="text-[15px] grid p-4 grid-cols-2 gap-y-2 gap-x-6 borders">
          {Array.from({ length: Math.max(hardSkills.length, softSkills.length) }, (_, i) => (
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