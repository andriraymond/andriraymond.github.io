'use client';

import React, { useEffect, useState, useMemo } from 'react';
import '../../app/globals.css';

import AboutContent from '@/src/lib/components/about/AboutContent';
import type { About, Biodata } from '@/src/lib/components/about/AboutContent';

interface Skill {
  id: string;
  name: string;
  type: 'hardskill' | 'softskill';
}

interface Education {
  id: string;
  name: string;
  type: 'formal' | 'nonformal';
}

export default function AboutPage() {
  const [abouts, setAbouts] = useState<About[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [biodata, setBiodata] = useState<Biodata | null>(null);
  const [formalEducation, setFormalEducation] = useState<string[]>([]);
  const [nonformalEducation, setNonformalEducation] = useState<string[]>([]);

  const [loading, setLoading] = useState(true);
  const [biodataLoading, setBiodataLoading] = useState(true);
  const [loadingSkills, setLoadingSkills] = useState(true);

  // Fetch About
  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const res = await fetch('/api/about');
        const json = await res.json();
        setAbouts(json.data);
      } catch (err) {
        console.error('Error fetching about data:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchAbout();
  }, []);

  // Fetch Biodata
  useEffect(() => {
    const fetchBiodata = async () => {
      try {
        const res = await fetch('/api/biodata');
        const json = await res.json();
        setBiodata(json.data);
      } catch (err) {
        console.error('Error fetching biodata:', err);
      } finally {
        setBiodataLoading(false);
      }
    };
    fetchBiodata();
  }, []);

  // Fetch Skills
  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const res = await fetch('/api/skill');
        const json = await res.json();
        setSkills(json.data);
      } catch (err) {
        console.error('Error fetching skills:', err);
      } finally {
        setLoadingSkills(false);
      }
    };
    fetchSkills();
  }, []);

  // Fetch Education
  useEffect(() => {
    const fetchEducation = async () => {
      try {
        const res = await fetch('/api/education');
        const json = await res.json();
        const educations: Education[] = json.data;

        setFormalEducation(
          educations.filter(e => e.type === 'formal').map(e => e.name)
        );

        setNonformalEducation(
          educations.filter(e => e.type === 'nonformal').map(e => e.name)
        );
      } catch (err) {
        console.error('Error fetching education:', err);
      }
    };
    fetchEducation();
  }, []);

  // Derive Skills
  const { hardSkills, softSkills } = useMemo(() => {
    const hard = skills
      .filter(s => s.type === 'hardskill')
      .map(s => s.name);
    const soft = skills
      .filter(s => s.type === 'softskill')
      .map(s => s.name);
    return { hardSkills: hard, softSkills: soft };
  }, [skills]);

  return (
    <AboutContent
      abouts={abouts}
      biodata={biodata}
      hardSkills={hardSkills}
      softSkills={softSkills}
      formalEducation={formalEducation}
      nonformalEducation={nonformalEducation}
      loading={loading || loadingSkills}
      biodataLoading={biodataLoading}
    />
  );
}