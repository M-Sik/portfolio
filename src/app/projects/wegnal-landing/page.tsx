'use client';

import FadeIn from '@/components/gasp/FadeIn';
import Underline from '@/components/gasp/UnderLine';
import React, { useEffect } from 'react';

const links = [
  {
    url: 'https://wegnal.kr',
    label: 'wegnal landing web link',
    text: '👉 웹 보러가기 👈',
  },
];
const skills = ['Next.js 13', 'React.js', 'Typescript', 'Scss', 'Tailwindcss', 'Git', 'Github'];

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
          Wegnal 프로젝트는 SPA인 Vue.js로 구현 되어있어 SEO에 노출이 어려웠습니다. 이를 해결하기
          위해 랜딩페이지를 제작 하였으며 SEO를 최적화 하기 위해 Pre-rendering을 지원하는 Next.js를
          활용하여 개발하였습니다.
        </p>
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
        <h2 className={subTitleStyle}>🙋🏻‍♂️ 담당 역할</h2>
        <ul className={listStyle}>
          <li className=" ">프론트엔드 개발</li>
        </ul>
      </FadeIn>
      <FadeIn delay={1.8}>
        <h2 className={subTitleStyle}>💻 담당 업무</h2>
        <ul className={listStyle}>
          <li>SEO 최적화</li>
          <ul className={listStyle}>
            <li>robots.txt, sitemap, 메타 태그 작성</li>
            <li>시맨틱 태그 사용</li>
          </ul>
        </ul>
        <ul className={listStyle}>
          <li>반응형 UI 구현</li>
        </ul>
        <ul className={listStyle}>
          <li>User Agent를 활용하여 앱 다운로드 링크 변경</li>
        </ul>
        <ul className={listStyle}>
          <li>gsap를 이용한 애니메이션 구현</li>
        </ul>
        <ul className={listStyle}>
          <li>라이브러리를 쓰지 않고 멀티 및 싱글 캐러셀 구현</li>
          <ul className={listStyle}>
            <li>버튼을 이용한 슬라이딩 기능 구현</li>
            <li>드래그를 이용한 슬라이딩 기능 구현</li>
            <li>모바일 터치를 지원하기 위해 터치 이벤트를 이용한 슬라이딩 기능 구현</li>
          </ul>
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
const listStyle = 'mt-2 list-disc pl-6';
const linkStyle = 'hover:text-yellow-400 hover:font-bold';
