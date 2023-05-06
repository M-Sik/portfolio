import SideNavBar from '@/components/bars/SideNavBar';
import CareerSection from '@/components/sections/careers/CareerSection';
import MainSection from '@/components/sections/main/MainSection';
import SkillSection from '@/components/sections/skills/SkillSection';

export default function Home() {
  return (
    <section>
      <MainSection />
      <div className=" relative">
        <SkillSection />
        <CareerSection />
        <SideNavBar />
      </div>
    </section>
  );
}
