import SideNavBar from '@/components/bars/SideNavBar';
import CareerSection from '@/components/sections/careers/CareerSection';
import MainSection from '@/components/sections/main/MainSection';
import ProjectSecton from '@/components/sections/personal-projects/ProjectSection';
import SkillSection from '@/components/sections/skills/SkillSection';

export default function Home() {
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
