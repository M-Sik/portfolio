'use client';

import SideNavBar from '@/components/bars/SideNavBar';
import ArrowTopIcon from '@/components/icons/ArrowTopIcon';
import CareerSection from '@/components/sections/careers/CareerSection';
import MainSection from '@/components/sections/main/MainSection';
import ProjectSecton from '@/components/sections/personal-projects/ProjectSection';
import SkillSection from '@/components/sections/skills/SkillSection';
import { useDebounce } from '@/hooks/useDebounce';
import { useThrottle } from '@/hooks/useThrottle';
import { useEffect, useState } from 'react';

export default function Home() {
  const [scrollTopBtn, setScrollTopBtn] = useState(false);
  const [highlight, setHighlight] = useState<'skill' | 'career' | 'project'>('skill');

  const handleScroll = useThrottle(() => {
    let scrollH = document.documentElement.scrollTop;

    const skillTop = document.getElementById('skillSection')?.getBoundingClientRect().top;
    const careerTop = document.getElementById('careerSection')?.getBoundingClientRect().top;
    const projectTop = document.getElementById('projectSection')?.getBoundingClientRect().top;

    // 스크롤 top 버튼 토글
    if (scrollH > 500) setScrollTopBtn(true);
    else setScrollTopBtn(false);

    // 하이라이트
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
  }, 50);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);
  return (
    <section className="h-full relative">
      <MainSection id="mainSection" />
      <div className=" relative">
        <SkillSection id="skillSection" />
        <CareerSection id="careerSection" />
        <ProjectSecton id="projectSection" />
        <SideNavBar highlight={highlight} />
      </div>
      {scrollTopBtn && (
        <button
          name="scrollTopBtn"
          onClick={() =>
            document
              .getElementById('mainSection')
              ?.scrollIntoView({ block: 'start', behavior: 'smooth' })
          }
          className=" fixed hidden md:block right-[10vw] bottom-[10vh]"
        >
          <ArrowTopIcon />
        </button>
      )}
    </section>
  );
}
