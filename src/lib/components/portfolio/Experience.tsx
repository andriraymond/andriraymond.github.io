'use client';
import React from 'react';

export interface Experience {
  id: string;
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
  created_at: Date;
}

interface Props {
  experiences?: Experience[];
  loading?: boolean;
}

export default function ExperienceContent({
  experiences = [],
  loading = false,
}: Props) {
  const formatRange = (startStr: string, endStr: string) => {
    const start = new Date(startStr);
    const isPresent = endStr.toLowerCase() === 'present';
    const end = isPresent ? new Date() : new Date(endStr);

    const format = (d: Date) =>
      new Intl.DateTimeFormat('en-US', {
        month: 'short',
        year: 'numeric',
      }).format(d);

        const formattedStart = format(start);
        const formattedEnd = isPresent ? 'Present' : format(end);

        // Hitung total bulan
        const monthsTotal =
        (end.getFullYear() - start.getFullYear()) * 12 +
      (end.getMonth() - start.getMonth());

    const years = Math.floor(monthsTotal / 12);
    const months = (monthsTotal % 12) + 1;

    const parts: string[] = [];
    if (years > 0) parts.push(`${years} yr${years > 1 ? 's' : ''}`);
    if (months > 0) parts.push(`${months} mo${months > 1 ? 's' : ''}`);

    const duration = parts.length > 0 ? ` · ${parts.join(' ')}` : '';

    return `${formattedStart} – ${formattedEnd}${duration}`;

//     return `${format(start)} – ${isPresent ? 'Present' : format(end)}`;
  };

  const skeletonCount = experiences.length || 4;

  return (
    <div className="w-full h-full p-4 space-y-6">
      {/* Section Title */}
      <div className="flex items-center w-full">
        <span className="text-[16px] text-[#252525] font-semibold tracking-widest uppercase mr-4">
          Experience
        </span>
        <div className="flex-grow h-[2px] bg-[#252525]" />
      </div>

      {/* Timeline */}
      <div
        className="relative border-l-2 border-gray-300 pl-6 space-y-10 ml-1"
        aria-busy={loading}
      >
        {loading
          ? Array.from({ length: skeletonCount }).map((_, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-3 top-5 w-3 h-3 bg-gray-400 rounded-full" />
                <div className="bg-gray-100 p-4 rounded-md shadow animate-pulse space-y-2 min-h-[120px]">
                  <div className="h-4 bg-gray-300 rounded w-1/3" />
                  <div className="h-3 bg-gray-300 rounded w-1/4" />
                  <div className="h-3 bg-gray-200 rounded w-2/3" />
                  <div className="h-3 bg-gray-200 rounded w-full" />
                  <div className="h-3 bg-gray-200 rounded w-5/6" />
                </div>
              </div>
            ))
          : experiences.length === 0 ? (
              <div className="text-sm text-gray-500 text-center">
                No experience available.
              </div>
            ) : (
              experiences.map((exp) => (
                <div key={exp.id} className="relative">
                  <div className="absolute -left-3 top-5 w-3 h-3 bg-blue-600 rounded-full border-2 border-white shadow" />
                  <div className="bg-white p-4 rounded-md shadow-md border border-gray-100 hover:shadow-lg transition">
                    <h3 className="text-[15px] font-semibold">{exp.company}</h3>
                    <p className="text-sm text-gray-800 font-medium">{exp.title}</p>
                    <p className="text-sm text-gray-500 mt-1">
                      {formatRange(exp.startDate, exp.endDate)}
                    </p>
                    <p className="text-sm text-gray-500">{exp.location}</p>
                    <p className="text-sm text-gray-500 mt-2 text-justify whitespace-pre-line">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))
            )}
      </div>
    </div>
  );
}

// 'use client';
// import React from 'react';

// export interface Experience {
//   id: string;
//   title: string;
//   company: string;
//   startDate: string;
//   endDate: string;
//   location: string;
//   description: string;
//   created_at: Date;
// }

// interface Props {
//   experiences?: Experience[];
//   loading?: boolean;
// }

// export default function ExperienceContent({ experiences = [], loading }: Props) {
//   const formatRange = (startStr: string, endStr: string) => {
//     const start = new Date(startStr);
//     const isPresent = endStr.toLowerCase() === 'present';
//     const end = isPresent ? new Date() : new Date(endStr);
//     const format = (d: Date) =>
//       new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric' }).format(d);
//     return `${format(start)} – ${isPresent ? 'Present' : format(end)}`;
//   };

//   return (
//     <div className="w-full h-full p-4 space-y-6">
//         <div className="flex items-center w-full">
//           <span className="text-[16px] text-[#252525] font-semibold tracking-widest uppercase mr-4">
//             Experience
//           </span>
//           <div className="flex-grow h-[2px] bg-[#252525]" />
//         </div>

//         <div className="relative border-l-2 border-gray-300 pl-6 space-y-10 ml-1">
//           {loading
//             ? Array.from({ length: 2 }).map((_, i) => (
//                 <div key={i} className="relative">
//                   <div className="absolute -left-3 top-5 w-3 h-3 bg-gray-400 rounded-full" />
//                   <div className="bg-gray-100 p-4 rounded-md shadow animate-pulse space-y-2 min-h-[120px]">
//                     <div className="h-4 bg-gray-300 rounded w-1/3" />
//                     <div className="h-3 bg-gray-300 rounded w-1/4" />
//                     <div className="h-3 bg-gray-200 rounded w-2/3" />
//                     <div className="h-3 bg-gray-200 rounded w-full" />
//                     <div className="h-3 bg-gray-200 rounded w-5/6" />
//                   </div>
//                 </div>
//               ))
//             : experiences.map((exp) => (
//                 <div key={exp.id} className="relative">
//                   <div className="absolute -left-3 top-5 w-3 h-3 bg-blue-600 rounded-full border-2 border-white shadow" />
//                   <div className="bg-white p-4 rounded-md shadow-md border border-gray-100 hover:shadow-lg transition">
//                     <h3 className="text-[15px] font-semibold">{exp.company}</h3>
//                     <p className="text-sm text-gray-800 font-medium">{exp.title}</p>
//                     <p className="text-sm text-gray-500 mt-1">{formatRange(exp.startDate, exp.endDate)}</p>
//                     <p className="text-sm text-gray-500 mt-1">{exp.location}</p>
//                     <p className="text-sm text-gray-500 mt-2 text-justify whitespace-pre-line">{exp.description}</p>
//                   </div>
//                 </div>
//               ))}
        
//       </div>
//     </div>
//   );
// }
