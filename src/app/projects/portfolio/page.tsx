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
        <h2 className={subTitleStyle}>🔗 서비스 링크</h2>
        <div className="flex mt-2">
          <ul className="flex flex-col bg-gray-100 rounded-xl p-4">
            {links.map(({ url, text, label }) => (
              <li key={url} className="py-1 flex">
                <a href={url} target="_blank" aria-label={label} className={linkStyle}>
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </div>
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
        <h2 className={subTitleStyle}>💻 작업 내용</h2>
        <ul className={listStyle}>
          <li>Lighthouse를 이용한 웹 성능 및 웹 접근성 검사</li>
        </ul>
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
          <li>Gsap를 이용한 애니메이션 구현</li>
        </ul>
        <ul className={listStyle}>
          <li>스크롤 위치에 따른 목차 하이라이팅 구현</li>
        </ul>
        <ul className={listStyle}>
          <li>Library를 이용하지 않은 Carousel 구현</li>
        </ul>
      </FadeIn>
      <FadeIn delay={1.8}>
        <h2 className={subTitleStyle}>👨‍👨‍👦 참가 인원</h2>
        <ul className={listStyle}>
          <li>개인 프로젝트</li>
        </ul>
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
const listStyle = 'mt-4 list-disc pl-6';
const listIndentStyle = 'mt-1 list-disc pl-6 !list-[circle]';
const linkStyle = 'hover:text-yellow-400 hover:font-bold';

const previewTitleStyle = 'font-bold text-xl mt-5 animate-c-bounce';
const previewGifStyle = 'mt-3 mb-8';
