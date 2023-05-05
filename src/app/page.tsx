import MainSection from '@/components/sections/main/MainSection';
import SkillSection from '@/components/sections/SkillSection';
import Image from 'next/image';

export default function Home() {
  return (
    <section>
      <MainSection />
      <SkillSection />
      <SkillSection />
      <MainSection />
      <SkillSection />
      <SkillSection />
    </section>
  );
}
