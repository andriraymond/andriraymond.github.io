'use client'
import React, { useEffect, useState } from 'react';
import '../../app/globals.css'

import Portfolio from "@/src/lib/components/portfolio/test"
import type { Experience, Certificate } from '@/src/lib/components/portfolio/test'

export default function TestPage() {
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loadingCertificates, setLoadingCertificates] = useState(true);
  const [loadingExperiences, setLoadingExperiences] = useState(true);

  // Fetch Certificates
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

  // Fetch Experiences (dummy untuk sekarang)
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

  const isLoading = loadingCertificates || loadingExperiences;

  return (
    <Portfolio
        certificates={certificates}
        experiences={experiences}
        loading={isLoading}
    />
  );
}
