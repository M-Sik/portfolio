'use client';

import { useThrottle } from '@/hooks/useThrottle';
import React, { useEffect, useState } from 'react';

type Props = {
  highlight: NavItem;
};
type NavItem = 'skill' | 'trouble' | 'career' | 'project';

const navItems: { name: string; value: NavItem }[] = [
  { name: '🛠️ 기술 스택', value: 'skill' },
  { name: '🧨 트러블 슈팅', value: 'trouble' },
  { name: '💼 경력', value: 'career' },
  { name: '💻 사이드 프로젝트', value: 'project' },
];

function SideNavBar() {
  const [highlight, setHighlight] = useState<'skill' | 'trouble' | 'career' | 'project'>('skill');

  const handleScroll = useThrottle(() => {
    const skillTop = document.getElementById('skillSection')?.getBoundingClientRect().top;
    const troubleTop = document
      .getElementById('troubleShootingSection')
      ?.getBoundingClientRect().top;
    const careerTop = document.getElementById('careerSection')?.getBoundingClientRect().top;
    const projectTop = document.getElementById('projectSection')?.getBoundingClientRect().top;

    // 하이라이트
    if (
      typeof projectTop != 'number' ||
      typeof troubleTop != 'number' ||
      typeof careerTop != 'number' ||
      typeof skillTop != 'number'
    )
      return;
    if (projectTop < 300) {
      return setHighlight('project');
    } else if (careerTop < 300) {
      return setHighlight('career');
    } else if (troubleTop < 300) {
      return setHighlight('trouble');
    } else if (skillTop < 300) {
      return setHighlight('skill');
    }
  }, 50);

  const handleClick = (value: NavItem) => {
    if (value === 'skill')
      return document
        .getElementById('skillSection')
        ?.scrollIntoView({ block: 'start', behavior: 'smooth' });
    else if (value === 'trouble')
      return document
        .getElementById('troubleShootingSection')
        ?.scrollIntoView({ block: 'start', behavior: 'smooth' });
    else if (value === 'career')
      return document
        .getElementById('careerSection')
        ?.scrollIntoView({ block: 'start', behavior: 'smooth' });
    else if (value === 'project')
      return document
        .getElementById('projectSection')
        ?.scrollIntoView({ block: 'start', behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <aside className={`h-full hidden xl:block absolute top-0 left-[4vw]`}>
      <nav className=" sticky top-0 pt-[150px]">
        <ul className="flex flex-col gap-8 border-l-8 border-yellow-400 pl-4 font-bold text-xl text-gray-500 cursor-pointer">
          {navItems.map(({ name, value }, i) => (
            <li
              key={i}
              className={`hover:text-black ${highlight === value && 'text-yellow-400'}`}
              onClick={() => handleClick(value)}
            >
              {name}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default SideNavBar;
