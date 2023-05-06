'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Project } from '@/types/projects';
import { useRouter } from 'next/navigation';

type Props = {
  projects: Project;
};

export default function ProjectCard({ projects: { name, bgImg, bgImgAlt, skills, link } }: Props) {
  const router = useRouter;
  const [isHovering, setIsHovering] = useState(false);

  const movePage = () => {
    console.log(window.history.state.idx, document.documentElement.scrollTop, window.pageYOffset);
    // sessionStorage.setItem(
    //   `__next_scroll_${window.history.state.idx}`,
    //   JSON.stringify({
    //     x: window.pageXOffset,
    //     y: window.pageYOffset,
    //   }),
    // );
  };

  return (
    <section
      onMouseOver={() => setIsHovering(true)}
      onMouseOut={() => setIsHovering(false)}
      className="w-full rounded-2xl shadow-orange-100 border drop-shadow-md relative"
    >
      <article className="w-full h-[200px] relative">
        <Image
          src={bgImg}
          alt={bgImgAlt}
          fill
          sizes="200"
          className=" rounded-t-2xl object-cover"
        />
      </article>
      <article className="p-2">
        <p className="font-bold">🚀 {name}</p>
        <div className="w-full flex gap-2 flex-wrap mt-1">
          {skills.map((skill) => (
            <p key={skill} className="py-1 px-2 bg-gray-200 rounded-md text-purple-600 font-bold">
              {skill}
            </p>
          ))}
        </div>
      </article>
      <div
        onClick={movePage}
        className={`w-full h-full bg-black/50 absolute top-0 rounded-2xl transition-all duration-500 flex justify-center items-center ${
          isHovering ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <p className="text-white font-bold">👉 클릭해서 자세히 보기 👈</p>
      </div>
    </section>
  );
}
