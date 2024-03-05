'use client';

import FadeIn from '@/components/gasp/FadeIn';
import Underline from '@/components/gasp/UnderLine';
import ProjectServiceLinkList from '@/components/sections/project/ProjectServiceLinkSection';
import React, { useEffect } from 'react';

const links = [
  {
    url: 'https://withwe.kr',
    label: 'wegnal landing web link',
    text: '👉 웹 보러가기 👈',
  },
];
const skills = [
  'Next.js 13',
  'React.js',
  'Typescript',
  'Scss',
  'Tailwindcss',
  'Aws',
  'Ec2',
  'Pm2',
  'Nginx',
  'Git',
  'Github',
];

export default function WithweHomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="w-full">
      <FadeIn delay={0.3}>
        <Underline delay={0.5} duration={2} color="rgb(248, 205, 7)" className="w-full block">
          <h1 className=" text-4xl font-bold">Withwe 회사 홈페이지</h1>
        </Underline>
      </FadeIn>
      <FadeIn delay={0.6}>
        <p className="mt-4">회사를 대표하는 홈페이지이며 Next.js를 활용하여 개발하였습니다.</p>
      </FadeIn>
      <FadeIn delay={0.9}>
        <ProjectServiceLinkList links={links} />
      </FadeIn>
      <FadeIn delay={1.2}>
        <h2 className={subTitleStyle}>🛠️ 사용 기술</h2>
        <div className="w-full flex gap-2 flex-wrap mt-2">
          {skills.map((skill) => (
            <p key={skill} className="py-1 px-2 bg-gray-200 rounded-md text-purple-600 font-bold">
              {skill}
            </p>
          ))}
        </div>
      </FadeIn>
      <FadeIn delay={1.5}>
        <h2 className={subTitleStyle}>🙋🏻‍♂️ 담당 역할</h2>
        <ul className={listStyle}>
          <li className=" ">프론트엔드 개발</li>
        </ul>
      </FadeIn>
      <FadeIn delay={1.8}>
        <h2 className={subTitleStyle}>💻 담당 업무</h2>
        <ul className={listStyle}>
          <li>SEO 최적화</li>
          <ul className={listIndentStyle}>
            <li>Robots.txt, Sitemap, Metadata, Semantic Tag</li>
          </ul>
        </ul>
        <ul className={listStyle}>
          <li>Responsive UI 구현</li>
        </ul>
        <ul className={listStyle}>
          <li>AWS ec2, pm2, nginx를 이용한 호스팅</li>
        </ul>
        <ul className={listStyle}>
          <li>Gsap를 이용한 애니메이션 구현</li>
        </ul>
      </FadeIn>
      <FadeIn delay={2.1}>
        <h2 className={subTitleStyle}>👨‍👨‍👦 참가 인원</h2>
        <ul className={listStyle}>
          <li>프론트엔드 1명</li>
        </ul>
      </FadeIn>
    </section>
  );
}
const subTitleStyle = 'mt-16 mobile:mt-8 text-2xl font-bold';
const listStyle = 'mt-4 list-disc pl-6';
const listIndentStyle = 'mt-1 list-disc pl-6 !list-[circle]';
