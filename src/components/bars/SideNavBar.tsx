import React, { useEffect } from 'react';

type Props = {
  highlight: NavItem;
};
type NavItem = 'skill' | 'career' | 'project';

export default function SideNavBar({ highlight }: Props) {
  const navItems: { name: string; value: NavItem }[] = [
    { name: '🛠️ 기술 스택', value: 'skill' },
    { name: '💼 경력', value: 'career' },
    { name: '💻 개인 프로젝트', value: 'project' },
  ];
  const handleClick = (value: NavItem) => {
    if (value === 'skill')
      return document
        .getElementById('skillSection')
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
