'use client';
import React, { useEffect, useState } from 'react';
import '../../app/globals.css';

import PortfolioContent from '@/src/lib/components/portfolio/Portfolio';
import CertificateContent from '@/src/lib/components/portfolio/Certificate';
import ExperienceContent from '@/src/lib/components/portfolio/Experience';

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

  useEffect(() => {
    const fetchPortfolios = async () => {
      try {
        const res = await fetch('/api/portfolio');
        const json = await res.json();

        // Map manual agar sesuai tipe `Portfolio` dari @prisma/client
        const mapped: Portfolio[] = json.data.map((item: any) => ({
          id: item.id,
          title: item.title,
          description: item.description,
          imageUrl: item.imageUrl ?? item.path ?? '#', // fallback
          link: item.link ?? item.path ?? '#',        // fallback
          created_at: new Date(item.created_at),
        }));

        setPortfolios(mapped);
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
        setCertificates(json.data as Certificate[]);
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
    <div className="flex flex-col space-y-10 p-4">
      <ExperienceContent experiences={experiences} loading={loadingExperiences} />
      <PortfolioContent portfolios={portfolios} loading={loadingPortfolios} />
      <CertificateContent certificates={certificates} loading={loadingCertificates} />
    </div>
  );
}