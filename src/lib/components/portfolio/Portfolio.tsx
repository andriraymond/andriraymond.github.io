'use client';
import React from 'react';

export interface Portfolio {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  created_at: Date;
}

interface Props {
  portfolios: Portfolio[];
  loading?: boolean;
}

export default function PortfolioContent({ portfolios, loading = false }: Props) {
  return (
    <div className="w-full h-full p-4 space-y-4">
      {/* Section Title */}
      <div className="flex items-center w-full">
        <span className="text-[16px] text-[#252525] font-semibold tracking-widest uppercase mr-4">
          Portfolio
        </span>
        <div className="flex-grow h-[2px] bg-[#252525]" />
      </div>

      {/* Content Grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        aria-busy={loading}
      >
        {loading ? (
        //   Array.from({ length: 2 }).map((_, i) => (
          Array.from({ length: portfolios.length || 3 }).map((_, i) => (
            <div
              key={i}
              className="p-4 rounded-lg shadow animate-pulse space-y-3 bg-gray-50 min-h-50"
            >
              <div className="h-4 bg-gray-300 rounded w-3/4" />
              <div className="h-3 bg-gray-200 rounded w-full" />
              <div className="h-3 bg-gray-200 rounded w-6/6" />
              <div className="h-3 bg-gray-200 rounded w-6/6" />
              <div className="h-3 bg-gray-200 rounded w-6/6" />
              <div className="h-3 bg-gray-200 rounded w-5/6" />
              <div className="h-3 bg-gray-200 rounded w-5/6" />
            </div>
          ))
        ) : portfolios.length === 0 ? (
          <div className="col-span-full text-center text-sm text-gray-500">
            No portfolios available.
          </div>
        ) : (
          portfolios.map((portfolio) => (
            <a
              key={portfolio.id}
              href={portfolio.link}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-4 shadow-md hover:shadow-lg transition bg-white flex flex-col gap-2"
            >
              <h3 className="text-[15px] font-semibold">{portfolio.title}</h3>
              <p className="text-sm text-gray-500 text-justify whitespace-pre-line">
                {portfolio.description}
              </p>
              {/* Optional Image */}
              {/* <img
                src={portfolio.imageUrl}
                alt={portfolio.title}
                className="w-full mt-3 rounded-lg object-cover max-h-40"
              /> */}
            </a>
          ))
        )}
      </div>
    </div>
  );
}

// import React from 'react';

// export interface Portfolio {
//   id: string;
//   title: string;
//   description: string;
//   imageUrl: string;
//   link: string;
//   created_at: Date;
// }

// interface Props {
//   portfolios: Portfolio[];
//   loading: boolean;
// }

// // export default function PortfolioContent({ portfolios, loading }: Props) {
//   return (
//     <section className="w-full h-full p-4 space-y-4">
//       {/* Section Title */}
//       <div className="flex items-center w-full">
//         <span className="text-[16px] text-[#252525] font-semibold tracking-widest uppercase mr-4">
//           Project
//         </span>
//         <div className="flex-grow h-[2px] bg-[#252525]" />
//       </div>

//       {/* Content Grid */}
//       <div
//         className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
//         aria-busy={loading}
//       >
//         {loading ? (
//           Array.from({ length: 6 }).map((_, i) => (
//             <div
//               key={i}
//               className="p-4 border rounded-lg shadow animate-pulse space-y-3 bg-gray-50"
//             >
//               <div className="h-4 bg-gray-300 rounded w-3/4" />
//               <div className="h-3 bg-gray-200 rounded w-full" />
//               <div className="h-3 bg-gray-200 rounded w-5/6" />
//             </div>
//           ))
//         ) : portfolios.length === 0 ? (
//           <div className="col-span-full text-center text-sm text-gray-500">
//             No portfolios available.
//           </div>
//         ) : (
//           portfolios.map((portfolio) => (
//             <a
//               key={portfolio.id}
//               href={portfolio.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="border rounded-lg p-4 shadow-md hover:shadow-lg transition bg-white"
//             >
//               <h3 className="text-[15px] font-semibold">{portfolio.title}</h3>
//               <p className="text-sm text-gray-500 text-justify mt-2 whitespace-pre-line">
//                 {portfolio.description}
//               </p>
//               {/* Optional: Show image */}
//               {/* <img src={portfolio.imageUrl} alt={portfolio.title} className="w-full mt-3 rounded-lg object-cover max-h-40" /> */}
//             </a>
//           ))
//         )}
//       </div>
//     </section>
//   );
// }