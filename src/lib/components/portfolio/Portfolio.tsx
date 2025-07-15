'use client';
import React from "react";

export interface Portfolio {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  created_at: Date;
}

interface PortfolioProps {
  portfolios: Portfolio[];
  loading: boolean;
}

export default function PortfolioContent({
  portfolios,
  loading,
}: PortfolioProps) {
  if (loading) return <div className="p-4">Loading…</div>;

  return (
    <div className="w-full h-full p-4 space-y-4">
      <div className="flex items-center w-full">
        <span className="text-[16px] text-[#252525] font-semibold tracking-widest uppercase mr-4">
          Project
        </span>
        <div className="flex-grow h-[2px] bg-[#252525]" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolios.map((portfolio) => (
          <div key={portfolio.id} className="border rounded-lg p-4 p-4 shadow-md bg-gradient-to-r flex flex-col">
            {/* <img
              src={portfolio.imageUrl}
              alt={portfolio.title}
              className="w-full h-48 object-cover rounded"
            /> */}
            <h3 className="text-[15px] font-semibold">{portfolio.title}</h3>
            <p className="text-sm text-gray-500 text-justify mt-2">{portfolio.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// "use client";
// import React from "react";

// import CertificateContent from "./Certificate";
// import { Certificate } from "crypto";

// export interface Portfolio {
//   id: string;
//   title: string;
//   description: string;
//   imageUrl: string;
//   link: string;
//   created_at: Date;
// }

// interface PortfolioProps {
//   portfolios: Portfolio[];
//   certificate: Certificate[];
//   loadingPortfolios: boolean;
//   loading: boolean;
// }

// export default function PortfolioContent({
//   portfolios,
//   certificate,
//   loadingPortfolios,
//   loading,
// }: PortfolioProps) {
//   if (loading) return <div className="p-4">Loading…</div>;

//   return (
//     <div className="w-full h-full p-4 space-y-4">
//       <div className="flex items-center w-full">
//         <span className="text-[16px] text-[#252525] font-semibold tracking-widest uppercase mr-4">
//           Portfolio
//         </span>
//         <div className="flex-grow h-[2px] bg-[#252525]" />
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {portfolios.map((portfolio) => (
//           <div key={portfolio.id} className="border rounded-lg p-4">
//             {/* <img
//               src={portfolio.imageUrl}
//               alt={portfolio.title}
//               className="w-full h-48 object-cover rounded"
//             /> */}
//             <h3 className="text-[15px]  font-semibold mt-2">{portfolio.title}</h3>
//             <p className="text-sm text-gray-600">{portfolio.description}</p>
//           </div>
//         ))}
//       </div>

//       <CertificateContent certificates={certificate} loading={loading} />
//     </div>
//   );
// }