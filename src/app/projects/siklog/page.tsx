'use client';

import BottomToTopFadeIn from '@/components/gasp/BottomToTopFadeIn';
import FadeIn from '@/components/gasp/FadeIn';
import Underline from '@/components/gasp/UnderLine';
import React, { useEffect } from 'react';
import HomeImg from '../../../../public/images/projects/siklog/siklog_home.png';
import PostDetailImg from '../../../../public/images/projects/siklog/siklog_post_detail.png';
import SearchPostImg from '../../../../public/images/projects/siklog/siklog_search_post.png';
import Image from 'next/image';
import ProjectServiceLinkList from '@/components/sections/project/ProjectServiceLinkSection';
import ProjectUseSkillSection from '@/components/sections/project/ProjectUseSkillSection';
import ProjectNumberOfPeopleSection from '@/components/sections/project/ProjectNumberOfPeopleSection';

const links = [
  {
    url: 'https://siklog.shop/',
    label: 'siklog link',
    text: '👉 웹 보러가기 👈',
  },
  {
    url: 'https://github.com/M-Sik/siklog',
    label: 'siklog github link',
    text: '👉 깃허브 보러가기 👈',
  },
];
const skills = [
  'Next.js',
  'React.js',
  'Typescript',
  'Aws',
  'Mongodb',
  'Tailwindcss',
  'Git',
  'Github',
];

const previews = [
  {
    title: 'Home 화면 👇👇',
    gifSrc: [HomeImg],
    alt: 'Home img',
  },
  {
    title: '게시글 상세 조회 👇👇',
    gifSrc: [PostDetailImg],
    alt: 'post detail img',
  },
  {
    title: '게시글 조회 👇👇',
    gifSrc: [SearchPostImg],
    alt: 'search post img',
  },
];

export default function SiklogPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="w-full">
      <FadeIn delay={0.3}>
        <Underline delay={0.5} duration={2} color="rgb(248, 205, 7)" className="w-full block">
          <h1 className=" text-4xl font-bold">Siklog</h1>
        </Underline>
      </FadeIn>
      <FadeIn delay={0.6} className="text-gray-800">
        <p className="mt-4">
          Next.js의 API Route와 MongoDB를 이용하여 데이터 관리를 하였으며, AWS를 이용하여 호스팅 및
          <span className="font-bold text-black"> 배포 자동화</span>를 진행하였습니다.
        </p>
        <p className="mt-2">
          블로그라는 특성상 다른 사용자들에게 노출이 되어야 하기 때문에{' '}
          <span className="font-bold text-black">어떻게 하면 검색엔진이 읽기 쉬운</span> 블로그를
          만들 수 있을지를 고민을 하였습니다.
        </p>
        <p className="mt-2"> SEO에 대해 고민하고 적용한 결과는 아래와 같습니다.</p>
        <ul className={listStyle}>
          <li className="font-bold text-black">
            검색엔진이 블로그의 내용 효율적으로 이해하게 해야 한다. 미리보기를 통해 사용자의 클릭을
            유도해야 한다.
          </li>
          <ul className={listIndentStyle}>
            <li>
              검색엔진에 노출되어야 하는 정보는 SSR 방식을 이용하여 검색엔진이 HTML 문서를 읽을 수
              있도록 도움을 주었습니다.
            </li>
            <li>
              페이지에 따른 title, description, keyword 등 메타태그를 작성하여 검색엔진의 블로그
              내용 파악에 도움을 주었습니다.
            </li>
            <li>
              title, description, open graph 등 메타태그를 통해 사용자가 블로그를 미리 볼 수 있도록
              구현하였습니다.
            </li>
          </ul>
        </ul>
        <ul className={listStyle}>
          <li className="font-bold text-black">
            검색엔진은 버튼을 클릭하지 않고 a 태그를 통해 페이지를 옮겨 다닌다.
          </li>
          <ul className={listIndentStyle}>
            <li>
              Next.js에서 제공하는 Link 태그를 이용해 검색엔진의 페이지 이동에 도움을 주었습니다.
            </li>
          </ul>
        </ul>
        <ul className={listStyle}>
          <li className="font-bold text-black">
            검색엔진이 블로그를 효과적으로 크롤링하고 색인하기 위해서는 sitemap이 필요하다.
          </li>
          <ul className={listIndentStyle}>
            <li>route 경로에 따른 sitemap 즉, 정적 sitemap을 작성하였습니다.</li>
            <li>
              동적 sitemap 구현, 블로그의 경우 게시글 하나하나의 내용을 검색엔진이 쉽게 파악하기
              위해 게시글들의 상세 페이지 경로를 sitemap으로 작성하여 검색엔진에 도움을 주었습니다.
            </li>
          </ul>
        </ul>
        <ul className={listStyle}>
          <li className="font-bold text-black">
            블로그 상세 글을 검색엔진이 보고 있을 때 현재 글 및 다른 글로 이동할 수 있는 정보를
            주어야 한다.
          </li>
          <ul className={listIndentStyle}>
            <li>
              검색엔진이 블로그 상세 글을 색인했다면 해당 글을 사용자에게 노출시키기 위해 블로그
              게시글 작성 시 title, description, keyword 정보를 입력하였고, 블로그 상세 글 페이지에
              메타태그를 추가해주었습니다.
            </li>
            <li>
              검색엔진이 블로그 상세 글 페이지를 탐색 중 다른 게시글도 노출시키기 위해 이전 게시글
              및 다음 게시글의 링크를 넣었습니다.
            </li>
          </ul>
        </ul>
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
          <li>Lighthouse를 이용한 웹 성능 및 웹 접근성 측정</li>
        </ul>
        <ul className={listStyle}>
          <li>SEO 최적화</li>
          <ul className={listIndentStyle}>
            <li>정적 sitemap, 동적 sitemap 작성</li>
            <li>페이지별 meta 태그 작성</li>
            <li>SSR을 이용한 pre-render</li>
          </ul>
        </ul>
        <ul className={listStyle}>
          <li>AWS ec2, pm2, nginx를 이용한 호스팅</li>
        </ul>
        <ul className={listStyle}>
          <li>AWS code pipeline, code deploy를 이용한 배포 자동화</li>
        </ul>
        <ul className={listStyle}>
          <li>Markdown Editor를 이용한 게시글 작성</li>
        </ul>
        <ul className={listStyle}>
          <li>Markdown Viewer를 이용한 게시글 상세 조회</li>
        </ul>
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
const listStyle = 'mt-4 list-disc pl-6';
const listIndentStyle = 'mt-1 list-disc pl-6 !list-[circle]';

const previewTitleStyle = 'font-bold text-xl mt-5 animate-c-bounce';
const previewGifStyle = 'mt-3 mb-8';
