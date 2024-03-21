'use client';

import BottomToTopFadeIn from '@/components/gasp/BottomToTopFadeIn';
import FadeIn from '@/components/gasp/FadeIn';
import Underline from '@/components/gasp/UnderLine';
import React, { useEffect } from 'react';
import MainPageGif from '../../../../public/images/projects/diary/diary_main.gif';
import AddPostGif from '../../../../public/images/projects/diary/diary_add_diary.gif';
import UpdatePostGif from '../../../../public/images/projects/diary/diary_update_diary.gif';
import DeleteGif from '../../../../public/images/projects/diary/diary_delete_diary.gif';
import Image from 'next/image';
import ProjectServiceLinkList from '@/components/articles/project/ProjectServiceLinkArticle';
import ProjectUseSkillArticle from '@/components/articles/project/ProjectUseSkillArticle';
import ProjectNumberOfPeopleArticle from '@/components/articles/project/ProjectNumberOfPeopleArticle';
import ProjectWorkDetailArticle from '@/components/articles/project/ProjectWorkDetailArticle';
import ProjectPreviewArticle from '@/components/articles/project/ProjectPreviewArticle';

const links = [
  {
    url: 'https://devsik-diary.netlify.app/',
    label: 'diary web link',
    text: '👉 웹 보러가기 👈',
  },
  {
    url: 'https://github.com/M-Sik/react-diary',
    label: 'diary github link',
    text: '👉 깃허브 보러가기 👈',
  },
];
const skills = ['React.js 18', 'Typescript', 'Zustand', 'Scss', 'Git', 'Github'];
const workDetails = [
  {
    content: '함수형 컴포넌트 기반의 반응형 UI 구현',
    contentDetails: [],
  },
  {
    content: 'Zustand와 LocalStorage를 이용한 데이터 관리',
    contentDetails: [],
  },
  {
    content: '다이어리 조회, 생성, 수정, 삭제',
    contentDetails: [],
  },
];
const previews = [
  {
    title: '메인화면 타이핑 효과 👇👇',
    gifSrc: [MainPageGif],
    alt: 'main page gif',
  },
  {
    title: '다이어리 작성 👇👇',
    gifSrc: [AddPostGif],
    alt: '다이어리 등록 gif',
  },
  {
    title: '다이어리 수정 👇👇',
    gifSrc: [UpdatePostGif],
    alt: '다이어리 수정 gif',
  },
  {
    title: '다이어리 삭제 👇👇',
    gifSrc: [DeleteGif],
    alt: '다이어리 삭제 gif',
  },
];

export default function DiaryPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="w-full">
      <FadeIn delay={0.3}>
        <Underline delay={0.5} duration={2} color="rgb(248, 205, 7)" className="w-full block">
          <h1 className=" text-4xl font-bold">Diary</h1>
        </Underline>
      </FadeIn>
      <FadeIn delay={0.6}>
        <p className="mt-4">
          My Diary는 나의 일상을 기록하는 서비스입니다. Vue만 이용하여 서비스를 구현해보니 React에
          대해 궁금하여 공부하고자 작은 프로젝트를 진행하였습니다. 프로젝트를 진행하며 Vue와
          비슷하다는 생각이 들었으며 Hooks에 대해 공부할 수 있었습니다.
        </p>
      </FadeIn>
      <FadeIn delay={0.9}>
        <ProjectServiceLinkList links={links} />
      </FadeIn>
      <FadeIn delay={1.2}>
        <ProjectUseSkillArticle skills={skills} />
      </FadeIn>
      <FadeIn delay={1.5}>
        <ProjectWorkDetailArticle title="💻 작업 내용" workDetails={workDetails} />
      </FadeIn>
      <FadeIn delay={1.8}>
        <ProjectNumberOfPeopleArticle content="개인 프로젝트" />
      </FadeIn>
      <BottomToTopFadeIn delay={0}>
        <ProjectPreviewArticle title="📺 미리 보기" previews={previews} />
      </BottomToTopFadeIn>
    </section>
  );
}
