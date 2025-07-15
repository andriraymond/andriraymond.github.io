'use client';
import React from "react";

export interface Experience {
  id: string;
  title: string;
  company: string;
  startDate: string;
  endDate: string;     // gunakan "present" (lowercase) bila masih aktif
  location: string;  // lokasi kerja, opsional
  description: string;
  created_at: Date;
}

interface ExperienceProps {
  experiences: Experience[];
  loading: boolean;
}

export default function ExperienceContent({
  experiences,
  loading,
}: ExperienceProps) {
  if (loading) return <div className="p-4">Loading…</div>;

  // helper untuk format tanggal + durasi
  const formatRangeWithDuration = (startStr: string, endStr: string) => {
    const start = new Date(startStr);
    const isPresent = endStr.toLowerCase() === 'present';
    const end = isPresent ? new Date() : new Date(endStr);

    // format “Jun 2022”, “Apr 2025”, atau “Present”
    const format = (d: Date) =>
      new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric' }).format(d);

    const formattedStart = format(start);
    const formattedEnd = isPresent ? 'Present' : format(end);

    // hitung total bulan
    const monthsTotal = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
    const years = Math.floor(monthsTotal / 12);
    const months = monthsTotal % 12;

    const parts: string[] = [];
    if (years > 0) parts.push(`${years} yr${years > 1 ? 's' : ''}`);
    if (months > 0) parts.push(`${months} mo${months > 1 ? 's' : ''}`);

    return `${formattedStart} – ${formattedEnd} · ${parts.join(' ')}`;
  };

  return (
    <div className="w-full h-full p-4 space-y-6">
      {/* Section Header */}
      <div className="flex items-center w-full">
        <span className="text-[16px] text-[#252525] font-semibold tracking-widest uppercase mr-4">
          Experience
        </span>
        <div className="flex-grow h-[2px] bg-[#252525]" />
      </div>

      {/* Timeline */}
      <div className="relative border-l-2 border-gray-300 pl-6 space-y-10 ml-1">
        {experiences.map((exp) => (
          <div key={exp.id} className="relative group">
            {/* Dot */}
            <div className="absolute -left-3 top-5 w-3 h-3 bg-blue-600 rounded-full border-2 border-white shadow" />

            {/* Card */}
            <div className="bg-white p-4 rounded-md shadow-md border border-gray-100 hover:shadow-lg transition-all duration-200">
              <h3 className="text-[15px] font-semibold">{exp.company}</h3>
              <p className="text-sm text-gray-800 font-medium">{exp.title}</p>
              <p className="text-sm text-gray-500 mt-1">
                {formatRangeWithDuration(exp.startDate, exp.endDate)}
              </p>
              <p className="text-sm text-gray-500 mt-1">{exp.location}</p>
              <p className="text-sm text-gray-500 mt-2 text-justify whitespace-pre-line">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


// 'use client';
// import React from "react";

// export interface Experience {
//   id: string;
//   title: string;
//   company: string;
//   startDate: string;
//   endDate: string;
//   description: string;
//   created_at: Date;
// }

// interface ExperienceProps {
//   experiences: Experience[];
//   loading: boolean;
// }

// export default function ExperienceContent({
//   experiences,
//   loading,
// }: ExperienceProps) {
//   if (loading) return <div className="p-4">Loading…</div>;

//   return (
//     <div className="w-full h-full p-4 space-y-6">
//       <div className="flex items-center w-full">
//         <span className="text-[16px] text-[#252525] font-semibold tracking-widest uppercase mr-4">
//           Experience
//         </span>
//         <div className="flex-grow h-[2px] bg-[#252525]" />
//       </div>

//       <div className="relative border-l-2 border-gray-300 pl-6 space-y-10">
//         {experiences.map((experience) => (
//           <div key={experience.id} className="relative group">
//             {/* Dot */}
//             <div className="absolute -left-3 top-5 w-3 h-3 bg-blue-600 rounded-full border-2 border-white shadow" />

//             {/* Content */}
//             <div className="bg-white p-4 rounded-md shadow-md border border-gray-100 hover:shadow-lg transition-all duration-200">
//               <h3 className="text-[15px] font-semibold">{experience.company}</h3>
//               <p className="text-sm text-gray-800 font-medium">{experience.title}</p>
//               <p className="text-sm text-gray-500 mt-1">
//                 {new Intl.DateTimeFormat("en-US", {
//                   month: "short",
//                   year: "numeric",
//                 }).format(new Date(experience.startDate))}{" "}
//                 -{" "}
//                 {experience.endDate.toLowerCase() === "present"
//                   ? "Present"
//                   : new Intl.DateTimeFormat("en-US", {
//                       month: "short",
//                       year: "numeric",
//                     }).format(new Date(experience.endDate))}
//               </p>
//               <p className="text-sm text-gray-500 mt-2">{experience.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


// 'use client';
// import React from "react";

// export interface Experience {
//   id: string;
//   title: string;
//   company: string;
//   startDate: string;
//   endDate: string;
//   description: string;
//   created_at: Date;
// }

// interface ExperienceProps {
//   experiences: Experience[];
//   loading: boolean;
// }

// export default function ExperienceContent({
//   experiences,
//   loading,
// }: ExperienceProps) {
//   if (loading) return <div className="p-4">Loading…</div>;

//   return (
//     <div className="w-full h-full p-4 space-y-6">
//       <div className="flex items-center w-full">
//         <span className="text-[16px] text-[#252525] font-semibold tracking-widest uppercase mr-4">
//           Experience
//         </span>
//         <div className="flex-grow h-[2px] bg-[#252525]" />
//       </div>

//       <div className="relative border-l-2 border-gray-300 pl-6 space-y-10">
//         {experiences.map((experience, index) => (
//           <div key={experience.id} className="relative group">
//             {/* Dot */}
//             <div className="absolute -left-3 top-5 w-3 h-3 bg-blue-600 rounded-full border-2 border-white shadow" />
//             {/* Dot (centered vertically to the card) */}
//             {/* <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-3 h-3 bg-blue-600 rounded-full border-2 border-white shadow" /> */}


//             {/* Content */}
//             <div className="bg-white p-4 rounded-md shadow-md border border-gray-100 hover:shadow-lg transition-all duration-200">
//               <h3 className="text-[15px] font-semibold">{experience.company}</h3>
//               <p className="text-sm text-gray-800 font-medium">{experience.title}</p>
//               <p className="text-sm text-gray-600 mt-1">{experience.description}</p>
//               <p className="text-xs text-gray-500 mt-2">
//                 {new Date(experience.startDate).toLocaleDateString()} -{" "}
//                 {experience.endDate.toLowerCase() === "present"
//                   ? "Present"
//                   : new Date(experience.endDate).toLocaleDateString()}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
