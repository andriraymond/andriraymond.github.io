'use client';
import React, { useEffect, useState, useMemo } from 'react';
import '../../app/globals.css';

import AboutContent from '@/src/lib/components/about/AboutContent';
import { Biodata } from '@/src/lib/components/about/BiodataSection';

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

  const [loading, setLoading] = useState(true);
  const [loadingSkills, setLoadingSkills] = useState(true);

  const [biodata, setBiodata] = useState<Biodata | null>(null);
  const [biodataLoading, setBiodataLoading] = useState(true);

  const [formalEducation, setFormalEducation] = useState<string[]>([]);
  const [nonformalEducation, setNonformalEducation] = useState<string[]>([]);




  // const hardSkills = Skills
  //   .filter(item => item.type === 'hardskill')
  //   .flatMap(item => item.name.split(',').map(s => s.trim()));

  // const softSkills = Skills
  //   .filter(item => item.type === 'softskill')
  //   .flatMap(item => item.name.split(',').map(s => s.trim()));

  // const hardSkills = [
  //   'HTML, CSS, JavaScript',
  //   'Laravel Framework',
  //   'Katalon Studio Test Automation',
  //   'Cypress Test Automation',
  //   'Playwright Test Automation',
  //   'Appium Test Automation',
  //   'Postman API Testing',
  // ];

  // const softSkills = [
  //   'Communication',
  //   'Collaboration',
  //   'Problem Solving',
  //   'Adaptability',
  //   'Critical Thinking',
  //   'Time Management',
  //   'Teamwork & Leadership',
  // ];

  // education
  // const formalEducation = [
  //   'Del Institute of Technology, Bachelor',
  // ];

  // const nonformalEducation = [
  //   'Katalon Academy, Katalon Studio Test Automation',
  //   'Cypress  Test Automation',
  // ];


  useEffect(() => {
    const fetchData = async () => {
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
    fetchData();
  }, []);

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

  // ——— FETCH SKILLS ———
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('/api/skill');
        const json = await res.json();
        setSkills(json.data);
      } catch (err) {
        console.error('Error fetching skills:', err);
      } finally {
        setLoadingSkills(false);
      }
    })();
  }, []);

  // ——— FETCH EDUCATION ———
  useEffect(() => {
    (async () => { 
      try {
        const res = await fetch('/api/education');
        const json = await res.json();
        const educations: Education[] = json.data;

        setFormalEducation(
          educations
            .filter(e => e.type === 'formal')
            .map(e => e.name)
        );

        setNonformalEducation(
          educations
            .filter(e => e.type === 'nonformal')
            .map(e => e.name)
        );
      } catch (err) {
        console.error('Error fetching education:', err);
      }
    })();
  }, []);

  // ——— DERIVE HARD/SOFT ARRAY ———
  const { hardSkills, softSkills } = useMemo(() => {
    const hard = skills
      .filter(s => s.type === 'hardskill')
      .map(s => s.name);
    const soft = skills
      .filter(s => s.type === 'softskill')
      .map(s => s.name);
    return { hardSkills: hard, softSkills: soft };
  }, [skills]);


  // ——— RENDER FORMAL AND NONFORMAL EDUCATION ———
  const { formalEducation: formalEdu, nonformalEducation: nonformalEdu } = useMemo(() => {
    const formal = formalEducation.map((edu, index) => ({
      id: `formal-${index}`,
      name: edu,
      type: 'formal',
    }));
    const nonformal = nonformalEducation.map((edu, index) => ({
      id: `nonformal-${index}`,
      name: edu,
      type: 'nonformal',
    }));
    return { formalEducation: formal, nonformalEducation: nonformal };
  }, [formalEducation, nonformalEducation]);

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