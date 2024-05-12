import SideNavBar from '@/components/bars/SideNavBar';
import MoveScroll from '@/components/etc/MoveScroll';
import CareerSection from '@/components/sections/careers/CareerSection';
import MainSection from '@/components/sections/main/MainSection';
import ProjectSecton from '@/components/sections/personal-projects/ProjectSection';
import SkillSection from '@/components/sections/skills/SkillSection';
import TroubleShootingSection from '@/components/sections/trouble-shooting/TroubleShootingSection';
import { Suspense } from 'react';

export default function Home() {
  return (
    <section className="h-full relative">
      <MainSection id="mainSection" />
      <div className=" relative">
        <SkillSection id="skillSection" />
        <TroubleShootingSection id="troubleShootingSection" />
        <CareerSection id="careerSection" />
        <ProjectSecton id="projectSection" />
        <Suspense>
          <MoveScroll />
        </Suspense>
        <SideNavBar />
      </div>
    </section>
  );
}
