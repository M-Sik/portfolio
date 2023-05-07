'use client';

import SideNavBar from '@/components/bars/SideNavBar';
import CareerSection from '@/components/sections/careers/CareerSection';
import MainSection from '@/components/sections/main/MainSection';
import ProjectSecton from '@/components/sections/personal-projects/ProjectSection';
import SkillSection from '@/components/sections/skills/SkillSection';
import { useThrottle } from '@/hooks/useThrottle';
import { useEffect } from 'react';

// console.log('zzzzzz');

export default function Home() {
  const handleScroll = useThrottle(() => {
    console.log(document.getElementById('test1')?.getBoundingClientRect().top);
    console.log(document.getElementById('test2')?.getBoundingClientRect().top);
  }, 1000);

  // };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <section className="h-full">
      <MainSection />
      <div className=" relative">
        <SkillSection />
        <CareerSection />
        <ProjectSecton />
        <SideNavBar />
      </div>
    </section>
  );
}
