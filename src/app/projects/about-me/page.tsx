'use client';

import BottomToTopFadeIn from '@/components/gasp/BottomToTopFadeIn';
import FadeIn from '@/components/gasp/FadeIn';
import Underline from '@/components/gasp/UnderLine';
import React, { useEffect } from 'react';
import Image from 'next/image';
import ProjectServiceLinkList from '@/components/sections/project/ProjectServiceLinkSection';
import ProjectUseSkillSection from '@/components/sections/project/ProjectUseSkillSection';
import ProjectNumberOfPeopleSection from '@/components/sections/project/ProjectNumberOfPeopleSection';

const links = [
  {
    url: 'https://devsik-aboutme.netlify.app',
    label: 'about me web link',
    text: '👉 웹 보러가기 👈',
  },
  {
    url: 'https://github.com/M-Sik/aboutMe',
    label: 'diary github link',
    text: '👉 깃허브 보러가기 👈',
  },
];
const skills = ['Vue.js', 'Javascript', 'Scss', 'Vuetify', 'Git', 'Github'];

export default function AboutMePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="w-full">
      <FadeIn delay={0.3}>
        <Underline delay={0.5} duration={2} color="rgb(248, 205, 7)" className="w-full block">
          <h1 className=" text-4xl font-bold">AboutMe</h1>
        </Underline>
      </FadeIn>
      <FadeIn delay={0.6}>
        <p className="mt-4">
          About Me는 저를 소개하기 위한 웹페이지입니다. Vue.js, Scss, 반응형 웹의 숙련도를 올리고자
          제작하였습니다.
        </p>
      </FadeIn>
      <FadeIn delay={0.9}>
        <ProjectServiceLinkList links={links} />
      </FadeIn>
      <FadeIn delay={1.2}>
        <ProjectUseSkillSection skills={skills} />
      </FadeIn>
      <FadeIn delay={1.5}>
        <h2 className={subTitleStyle}>💻 작업 내용</h2>
        <ul className={listStyle}>
          <li>About Me 기획 및 디자인</li>
        </ul>
        <ul className={listStyle}>
          <li>반응형 UI 구현</li>
        </ul>
      </FadeIn>
      <FadeIn delay={1.8}>
        <ProjectNumberOfPeopleSection content="개인 프로젝트" />
      </FadeIn>
    </section>
  );
}

const subTitleStyle = 'mt-16 mobile:mt-8 text-2xl font-bold';
const listStyle = 'mt-4 list-disc pl-6';
