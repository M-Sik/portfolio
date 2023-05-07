'use client';

import SideNavBar from '@/components/bars/SideNavBar';
import CareerSection from '@/components/sections/careers/CareerSection';
import MainSection from '@/components/sections/main/MainSection';
import ProjectSecton from '@/components/sections/personal-projects/ProjectSection';
import SkillSection from '@/components/sections/skills/SkillSection';
import { useThrottle } from '@/hooks/useThrottle';
import { useEffect } from 'react';

export default function Home() {
  const handleScroll = useThrottle(() => {
    console.log(document.getElementById('mainSection')?.getBoundingClientRect().top);
    console.log(document.getElementById('skillSection')?.getBoundingClientRect().top);
  }, 1000);

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
        <SideNavBar />
      </div>
    </section>
  );
}
