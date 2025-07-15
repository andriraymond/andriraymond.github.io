import React from 'react';

export default function BiodataSection({
  biodata,
  loading,
}: {
  biodata: Biodata | null;
  loading: boolean;
}) {
  return (
    <div className="flex-1 grid grid-cols-[80px_20px_1fr] gap-y-3 h-20 p-4 text-[15px] min-h-50 borders">
      {loading ? (
        <div className="col-span-3">Loading...</div>
      ) : biodata ? (
        <>
          {Object.entries(biodata).map(([key, value]) => (
            <React.Fragment key={key}>
              <div className="font-semibold self-start">{key[0].toUpperCase() + key.slice(1)}</div>
              <div className="self-start">:</div>
              <div className="self-start">{value}</div>
            </React.Fragment>
          ))}
        </>
      ) : (
        <div className="col-span-3 text-red-500">Gagal memuat biodata.</div>
      )}
    </div>
  );
}