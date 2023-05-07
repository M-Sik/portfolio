import React from 'react';

export default function SideNavBar() {
  const scrollSkill = () => {
    document.getElementById('skillSection')?.scrollIntoView({ block: 'start', behavior: 'smooth' });
  };
  const scrollCareer = () => {
    document
      .getElementById('careerSection')
      ?.scrollIntoView({ block: 'start', behavior: 'smooth' });
  };
  const scrollProject = () => {
    document
      .getElementById('projectSection')
      ?.scrollIntoView({ block: 'start', behavior: 'smooth' });
  };
  return (
    <article className={`h-full hidden xl:block absolute top-0 left-[4vw]`}>
      <nav className=" sticky top-0 pt-[150px]">
        <ul className="flex flex-col gap-8 border-l-8 border-yellow-400 pl-4 font-bold text-xl text-gray-500 cursor-pointer">
          <li onClick={scrollSkill} className="hover:text-black">
            🛠️ 기술 스택
          </li>
          <li onClick={scrollCareer} className="hover:text-black">
            💼 경력
          </li>
          <li onClick={scrollProject} className="hover:text-black">
            💻 개인 프로젝트
          </li>
        </ul>
      </nav>
    </article>
  );
}
