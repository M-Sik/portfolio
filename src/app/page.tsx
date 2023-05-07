'use client';

import SideNavBar from '@/components/bars/SideNavBar';
import CareerSection from '@/components/sections/careers/CareerSection';
import MainSection from '@/components/sections/main/MainSection';
import ProjectSecton from '@/components/sections/personal-projects/ProjectSection';
import SkillSection from '@/components/sections/skills/SkillSection';
import { useDebounce } from '@/hooks/useDebounce';
import { useThrottle } from '@/hooks/useThrottle';
import { useEffect, useState } from 'react';

export default function Home() {
  const [highlight, setHighlight] = useState<'skill' | 'career' | 'project'>('skill');

  const handleScroll = useThrottle(() => {
    const skillTop = document.getElementById('skillSection')?.getBoundingClientRect().top;
    const careerTop = document.getElementById('careerSection')?.getBoundingClientRect().top;
    const projectTop = document.getElementById('projectSection')?.getBoundingClientRect().top;

    if (
      typeof projectTop != 'number' ||
      typeof careerTop != 'number' ||
      typeof skillTop != 'number'
    )
      return;
    if (projectTop < 300) {
      return setHighlight('project');
    } else if (careerTop < 300) {
      return setHighlight('career');
    } else if (skillTop < 300) {
      return setHighlight('skill');
    }
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);
  return (
    <section className="h-full">
      <MainSection id="mainSection" />
      <div className=" relative">
        <SkillSection id="skillSection" />
        <CareerSection id="careerSection" />
        <ProjectSecton id="projectSection" />
        <SideNavBar highlight={highlight} />
      </div>
    </section>
  );
}
