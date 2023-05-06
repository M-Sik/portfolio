import React from 'react';

export default function SideNavBar() {
  return (
    <article className="h-full absolute top-0 left-[5vw] ">
      <nav className=" sticky top-0 pt-[150px]">
        <ul className="flex flex-col gap-8 border-l-8 border-yellow-400 pl-4 font-bold text-2xl text-gray-500 cursor-pointer">
          <li className="hover:text-black">🛠️ 기술 스택</li>
          <li className="hover:text-black">💼 경력</li>
          <li className="hover:text-black">💻 개인 프로젝트</li>
        </ul>
      </nav>
    </article>
  );
}
