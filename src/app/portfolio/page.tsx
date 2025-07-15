'use client';
import React, { useEffect, useState } from 'react';
import '../../app/globals.css';

import PortfolioContent from '@/src/lib/components/portfolio/Portfolio';
import CertificateContent from '@/src/lib/components/portfolio/Certificate';
import ExperienceContent from '@/src/lib/components/portfolio/Experience';

import { Portfolio } from '@prisma/client';
import type { Certificate } from '@/src/lib/components/portfolio/Certificate';
import type { Experience } from '@/src/lib/components/portfolio/Experience';
import { u } from 'framer-motion/client';

export default function PortfolioPage() {
  const [portfolios, setPortfolios] = useState<Portfolio[]>([]);
  const [loadingPortfolios, setLoadingPortfolios] = useState(true);

  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [loadingCertificates, setLoadingCertificates] = useState(true);

  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loadingExperiences, setLoadingExperiences] = useState(true);

  useEffect(() => {
    const fetchPortfolios = async () => {
      try {
        const res = await fetch('/api/portfolio');
        const json = await res.json();
        setPortfolios(json.data);
      } catch (err) {
        console.error('Error fetching portfolios:', err);
      } finally {
        setLoadingPortfolios(false);
      }
    };
    fetchPortfolios();
  }, []);

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const res = await fetch('/api/certificate');
        const json = await res.json();
        setCertificates(json.data);
      } catch (err) {
        console.error('Error fetching certificates:', err);
      } finally {
        setLoadingCertificates(false);
      }
    };
    fetchCertificates();
  }, []);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const res = await fetch('/api/experience');
        const json = await res.json();
        setExperiences(json.data);
      } catch (err) {
        console.error('Error fetching experiences:', err);
      } finally {
        setLoadingExperiences(false);
      }
    };
    fetchExperiences();
  }, []);

  return (
    <div className="flex flex-col space-y-10 p-4">
      <ExperienceContent experiences={experiences} loading={loadingExperiences} />
      <PortfolioContent portfolios={portfolios} loading={loadingPortfolios} />
      <CertificateContent certificates={certificates} loading={loadingCertificates} />
    </div>
  );
}


// 'use client';
// import React, { useEffect, useState } from 'react';
// import '../../app/globals.css';

// import PortfolioContent from '@/src/lib/components/portfolio/Portfolio';
// import CertificateContent from '@/src/lib/components/portfolio/Certificate';

// import { Portfolio, Certificate } from '@prisma/client'; // Pastikan Certificate ada di model Prisma Anda

// export default function PortfolioPage() {
//   const [portfolios, setPortfolios] = useState<Portfolio[]>([]);
//   const [loadingPortfolios, setLoadingPortfolios] = useState(true);

//   const [certificates, setCertificates] = useState<Certificate[]>([]);
//   const [loadingCertificates, setLoadingCertificates] = useState(true);

//   useEffect(() => {
//     const fetchPortfolios = async () => {
//       try {
//         const res = await fetch('/api/portfolio');
//         const json = await res.json();
//         setPortfolios(json.data as Portfolio[]);
//       } catch (err) {
//         console.error('Error fetching portfolios:', err);
//       } finally {
//         setLoadingPortfolios(false);
//       }
//     };
//     fetchPortfolios();
//   }, []);

//   useEffect(() => {
//     const fetchCertificates = async () => {
//       try {
//         const res = await fetch('/api/certificate');
//         const json = await res.json();
//         setCertificates(json.data as Certificate[]);
//       } catch (err) {
//         console.error('Error fetching certificates:', err);
//       } finally {
//         setLoadingCertificates(false);
//       }
//     };
//     fetchCertificates();
//   }, []);

//   return (
//     <>
//       <PortfolioContent portfolios={portfolios} loading={loadingPortfolios} />
      
//       {/* <CertificateContent certificates={certificates} loading={loadingCertificates} /> */}
//     </>
//   );
// }
