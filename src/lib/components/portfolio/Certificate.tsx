'use client'
import React from 'react';

export interface Certificate {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    link: string;
    created_at: Date;
}

interface CertificateProps {
    certificates: Certificate[];
    loading: boolean;
}

export default function CertificateContent({
    certificates,
    loading,
}: CertificateProps) {
    if (loading) return <div className="p-4">Loading…</div>;

    return (
        <div className="w-full h-full p-4 space-y-4">
            <div className="flex items-center w-full">
                <span className="text-[16px] text-[#252525] font-semibold tracking-widest uppercase mr-4">
                    Certificates
                </span>
                <div className="flex-grow h-[2px] bg-[#252525]" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {certificates.map((certificate) => (
                    <div key={certificate.id} className="border rounded-lg p-4 shadow-md bg-gradient-to-r flex flex-col">
                        {/* <img
                            src={certificate.imageUrl}
                            alt={certificate.name}
                            className="w-full h-48 object-cover rounded"
                        /> */}
                        <a key={certificate.id} href={certificate.link}>
                            <img
                            // width={500}
                            // height={330}
                            style={{ maxHeight: '190px', width: '100%', objectFit: 'cover' }}
                            src={certificate.imageUrl}
                            className='rounded-lg mb-4'
                            // alt={certificate.name}
                            // crop="fill"
                            />
                        </a>
                        <h3 className="flex text-[15px] font-semibold items-center h-fit leading-tight">{certificate.name}</h3>
                        {/* <p className="text-sm text-gray-600">{certificate.description}</p> */}
                    </div>
                ))}
            </div>
        </div>
    );
}