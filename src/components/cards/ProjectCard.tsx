'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Project } from '@/types/projects';
import Link from 'next/link';
import Styles from './ProjectCard.module.scss';

type Props = {
  project: Project;
};

export default function ProjectCard({ project: { name, bgImg, bgImgAlt, skills, link } }: Props) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <section
      onMouseOver={() => setIsHovering(true)}
      onMouseOut={() => setIsHovering(false)}
      className={`w-full rounded-2xl border relative my-2 ${Styles.shadow_6}`}
    >
      <Image
        src={bgImg}
        alt={bgImgAlt}
        className="rounded-t-2xl object-cover w-full h-[200px]"
        loading="lazy"
      />
      <div className="p-2 ">
        <b className="font-bold">🚀 {name}</b>
        <ul className="w-full flex gap-2 flex-wrap mt-1">
          {skills.map((skill) => (
            <li key={skill} className="py-1 px-2 bg-gray-200 rounded-md text-purple-600 font-bold">
              {skill}
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`w-full h-full bg-black/50 absolute top-0 rounded-2xl transition-all duration-500 flex justify-center items-center ${
          isHovering ? 'opacity-100' : 'opacity-0'
        }`}
        draggable={false}
      >
        <Link href={link} className="text-white font-bold hover:text-yellow-400" draggable={true}>
          👉 클릭해서 자세히 보기 👈
        </Link>
      </div>
    </section>
  );
}
