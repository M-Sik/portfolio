'use client';

import BottomToTopFadeIn from '@/components/gasp/BottomToTopFadeIn';
import FadeIn from '@/components/gasp/FadeIn';
import Underline from '@/components/gasp/UnderLine';
import React, { useEffect } from 'react';
import LightHouseImg from '../../../../public/images/projects/portfolio/portfolio-lighthouse.png';
import GsapMainGif from '../../../../public/images/projects/portfolio/portfolio-main-animation.gif';
import GsapFullGif from '../../../../public/images/projects/portfolio/portfolio-full-animation.gif';
import ScrollHighlightGif from '../../../../public/images/projects/portfolio/portfolio-scroll-highlight.gif';
import MultiCarouselBtnGif from '../../../../public/images/projects/portfolio/portfolio-multi-carousel-btn.gif';
import MultiCarouselDragGif from '../../../../public/images/projects/portfolio/portfolio-multi-carousel-drag.gif';
import Image from 'next/image';
import ProjectServiceLinkList from '@/components/sections/project/ProjectServiceLinkSection';
import ProjectUseSkillSection from '@/components/sections/project/ProjectUseSkillSection';
import ProjectNumberOfPeopleSection from '@/components/sections/project/ProjectNumberOfPeopleSection';
import ProjectWorkDetailSection from '@/components/sections/project/ProjectWorkDetailSection';

const links = [
  {
    url: 'https://devsik-portfolio.vercel.app/',
    label: 'portfolio web link',
    text: '👉 웹 보러가기 👈',
  },
  {
    url: 'https://github.com/M-Sik/portfolio',
    label: 'portfolio github link',
    text: '👉 깃허브 보러가기 👈',
  },
];
const skills = ['Next.js', 'React.js', 'Typescript', 'Tailwindcss', 'Scss', 'Git', 'Github'];
const workDetails = [
  {
    content: 'Lighthouse를 이용한 웹 성능 및 웹 접근성 검사',
    contentDetails: [],
  },
  {
    content: 'SEO 최적화',
    contentDetails: [
      '정적 sitemap, 동적 sitemap 작성',
      '페이지별 meta 태그 작성',
      'semantic 태그 작성',
    ],
  },
  {
    content: 'Responsive UI 구현',
    contentDetails: [],
  },
  {
    content: 'Gsap를 이용한 애니메이션 구현',
    contentDetails: [],
  },
];
const previews = [
  {
    title: 'Lighthouse 측정 결과 👇👇',
    gifSrc: [LightHouseImg],
    alt: 'lighthouse img',
  },
  {
    title: 'gsap 라이브러리를 이용한 애니메이션 👇👇',
    gifSrc: [GsapMainGif, GsapFullGif],
    alt: 'gsap animation gif',
  },
  {
    title: '스크롤 위치에 따른 목차 하이라이팅 👇👇',
    gifSrc: [ScrollHighlightGif],
    alt: '목차 하이라이팅 gif',
  },
  {
    title: '멀티 캐러셀(버튼 슬라이드, 드래그 슬라이드) 👇👇',
    gifSrc: [MultiCarouselBtnGif, MultiCarouselDragGif],
    alt: '멀티 캐러셀 gif',
  },
];

export default function PortFolioPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="w-full">
      <FadeIn delay={0.3}>
        <Underline delay={0.5} duration={2} color="rgb(248, 205, 7)" className="w-full block">
          <h1 className=" text-4xl font-bold">Portfolio</h1>
        </Underline>
      </FadeIn>
      <FadeIn delay={0.6}>
        <p className="mt-4">Next.js 13.4.1 버전을 이용하여 구현한 포트폴리오 웹페이지입니다.</p>
      </FadeIn>
      <FadeIn delay={0.9}>
        <ProjectServiceLinkList links={links} />
      </FadeIn>
      <FadeIn delay={1.2}>
        <ProjectUseSkillSection skills={skills} />
      </FadeIn>
      <FadeIn delay={1.5}>
        <ProjectWorkDetailSection title="💻 작업 내용" workDetails={workDetails} />
      </FadeIn>
      <FadeIn delay={1.8}>
        <ProjectNumberOfPeopleSection content="개인 프로젝트" />
      </FadeIn>
      <BottomToTopFadeIn delay={0}>
        <h2 className={subTitleStyle}>📺 미리 보기</h2>
      </BottomToTopFadeIn>

      {previews.map(({ title, gifSrc, alt }, index) => (
        <BottomToTopFadeIn key={title} delay={0.3} className=" relative">
          <h3 className={previewTitleStyle}>{title}</h3>
          {gifSrc.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={alt}
              className={previewGifStyle}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8f5WhHgAHBAJV9F76jAAAAABJRU5ErkJggg=="
            />
          ))}
        </BottomToTopFadeIn>
      ))}
    </section>
  );
}

const subTitleStyle = 'mt-16 mobile:mt-8 text-2xl font-bold';

const previewTitleStyle = 'font-bold text-xl mt-5 animate-c-bounce';
const previewGifStyle = 'mt-3 mb-8';
