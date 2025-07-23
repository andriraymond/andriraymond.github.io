'use client';
import React, { useEffect, useState } from 'react';
import '../../app/globals.css';

// import PortfolioContent from '@/src/lib/components/portfolio/Portfolio';
import ExperienceContent from '@/src/lib/components/portfolio/Experience';
import PortfolioContent from '@/src/lib/components/portfolio/Portfolio';
import CertificateContent from '@/src/lib/components/portfolio/Certificate';
// import CertificateContent from '@/src/lib/components/portfolio/Certificate';
// import ExperienceContent from '@/src/lib/components/portfolio/Experience';

import type { Portfolio } from '@prisma/client';
import type { Certificate } from '@/src/lib/components/portfolio/Certificate';
import type { Experience } from '@/src/lib/components/portfolio/Experience';

export default function PortfolioPage() {
  const [portfolios, setPortfolios] = useState<Portfolio[]>([]);
  const [loadingPortfolios, setLoadingPortfolios] = useState(true);

  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [loadingCertificates, setLoadingCertificates] = useState(true);

  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loadingExperiences, setLoadingExperiences] = useState(true);

  // fetch Portfolio
  useEffect(() => {
    const fetchPortfolios = async () => {
      try {
        const res = await fetch('/api/portfolio');
        const json = await res.json();
        setPortfolios(json.data as Portfolio[]);
      } catch (err: unknown) {
        if (err instanceof Error) {
          console.error('Error fetching portfolios:', err.message);
        } else {
          console.error('Unexpected error:', err);
        }
      } finally {
        setLoadingPortfolios(false);
      }
    };
    fetchPortfolios();
  }, []);


  // fetch Certificate
  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const res = await fetch('/api/certificate');
        const json = await res.json();
        setCertificates(json.data as Certificate[]);
      } catch (err) {
        console.error('Error fetching certificates:', err);
      } finally {
        setLoadingCertificates(false);
      }
    };
    fetchCertificates();
  }, []);


  // fetch Experience
  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const res = await fetch('/api/experience');
        const json = await res.json();
        setExperiences(json.data as Experience[]);
      } catch (err) {
        console.error('Error fetching experiences:', err);
      } finally {
        setLoadingExperiences(false);
      }
    };
    fetchExperiences();
  }, []);

  return (
  <div className="w-full h-full p-4 space-y-6 mb-10">
    <ExperienceContent experiences={experiences} loading={loadingExperiences} />
    <PortfolioContent portfolios={portfolios} loading={loadingPortfolios} />
    <CertificateContent certificates={certificates} loading={loadingCertificates} />

    {/* // <PortfolioContent /> */}
    {/* // <div className="flex flex-col space-y-10 p-4"> */}
    {/* // </div> */}
    {/* // <PortfolioContent portfolios={portfolios} loading={loadingPortfolios} /> */}
  </div>
  );
}