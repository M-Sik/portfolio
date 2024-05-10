'use client';

import SideNavBar from '@/components/bars/SideNavBar';
import CareerSection from '@/components/sections/careers/CareerSection';
import MainSection from '@/components/sections/main/MainSection';
import ProjectSecton from '@/components/sections/personal-projects/ProjectSection';
import SkillSection from '@/components/sections/skills/SkillSection';
import TroubleShootingSection from '@/components/sections/trouble-shooting/TroubleShootingSection';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const searchParams = useSearchParams();
  const step = searchParams.get('step');

  useEffect(() => {
    if (step === null) return window.scrollTo(0, 0);

    document.getElementById(step)?.scrollIntoView({ block: 'start', behavior: 'smooth' });
  }, [step]);

  return (
    <section className="h-full relative">
      <MainSection id="mainSection" />
      <div className=" relative">
        <SkillSection id="skillSection" />
        <TroubleShootingSection id="troubleShootingSection" />
        <CareerSection id="careerSection" />
        <ProjectSecton id="projectSection" />
        <SideNavBar />
      </div>
    </section>
  );
}
