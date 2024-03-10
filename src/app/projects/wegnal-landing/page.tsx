'use client';

import FadeIn from '@/components/gasp/FadeIn';
import Underline from '@/components/gasp/UnderLine';
import ProjectRoleSection from '@/components/sections/project/ProjectRoleSection';
import ProjectServiceLinkList from '@/components/sections/project/ProjectServiceLinkSection';
import ProjectUseSkillSection from '@/components/sections/project/ProjectUseSkillSection';
import ProjectWorkDetailSection from '@/components/sections/project/ProjectWorkDetailSection';
import React, { useEffect } from 'react';

const links = [
  {
    url: 'https://wegnal.kr',
    label: 'wegnal landing web link',
    text: '👉 웹 보러가기 👈',
  },
];
const skills = ['Next.js 13', 'React.js', 'Typescript', 'Scss', 'Tailwindcss', 'Git', 'Github'];
const roles = ['프론트엔드 개발'];
const workDetails = [
  { content: 'SEO 최적화', contentDetails: ['Robots.txt, Sitemap, Metadata, Semantic Tag'] },
  { content: 'Responsive UI 구현', contentDetails: [] },
  { content: 'User Agent를 활용하여 앱 다운로드 링크 변경', contentDetails: [] },
  { content: 'Gsap를 이용한 애니메이션 구현', contentDetails: [] },
];

export default function WegnalLandingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="w-full">
      <FadeIn delay={0.3}>
        <Underline delay={0.5} duration={2} color="rgb(248, 205, 7)" className="w-full block">
          <h1 className=" text-4xl font-bold">Wegnal 랜딩 페이지</h1>
        </Underline>
      </FadeIn>
      <FadeIn delay={0.6}>
        <p className="mt-4">
          Wegnal프로젝트를 소개하는 프로젝트이며, Next.js를 활용하여 개발하였습니다.
        </p>
      </FadeIn>
      <FadeIn delay={0.9}>
        <ProjectServiceLinkList links={links} />
      </FadeIn>
      <FadeIn delay={1.2}>
        <ProjectUseSkillSection skills={skills} />
      </FadeIn>
      <FadeIn delay={1.5}>
        <ProjectRoleSection roles={roles} />
      </FadeIn>
      <FadeIn delay={1.8}>
        <ProjectWorkDetailSection title="💻 담당 업무" workDetails={workDetails} />
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
