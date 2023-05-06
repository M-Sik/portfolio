import SideNavBar from '@/components/bars/SideNavBar';
import MainSection from '@/components/sections/main/MainSection';
import SkillSection from '@/components/sections/skills/SkillSection';

export default function Home() {
  return (
    <section>
      <MainSection />
      <div className=" relative">
        <SkillSection />
        <MainSection />
        <SideNavBar />
      </div>
    </section>
  );
}
