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
    url: 'https://wastecommunity.com',
    label: 'wastecommunity web link',
    text: '👉 웹 보러가기 👈',
  },
];
const skills = ['Vue.js', 'Typescript', 'Scss', 'Vuex', 'Vuetify', 'Git', 'Github'];
const roles = ['프론트엔드 개발'];
const workDetails = [
  {
    content: '초기 로딩속도 향상을 위한 최적화 작업 수행',
    contentDetails: [
      'Bundle 최적화(802.28KB → 733.58KB)',
      'Font 최적화(4.7MB ⇒ 196KB)',
      'Code Splitting',
    ],
  },
  { content: 'Responsive UI 구현', contentDetails: [] },
  { content: 'Typescript 도입', contentDetails: [] },
  {
    content: '회원 관련 기능 구현',
    contentDetails: ['로그인, 회원가입, 비밀번호 찾기, 마이페이지 정보 관리'],
  },
  {
    content: '게시글 관련 기능 구현',
    contentDetails: [
      '게시글 조회•삭제, 게시글 상세내용 조회, 좋아요, 스크랩, 댓글 작성, 대댓글 작성, 신고하기, 쪽지 보내기 등등',
    ],
  },
  {
    content: '기타 기능 구현',
    contentDetails: [
      '알림 내역 관리, 1:1 문의, 쪽지 조회•발송•삭제, 유저 차단, 신고하기, 스크랩한 글•작성한 글•작성한 댓글 관리 등등',
    ],
  },
  {
    content: '사내 Waste Community 서비스 관리를 위한 관리자 페이지 개발',
    contentDetails: [
      '회원 정보 조회•수정•삭제, 게시글 조회•수정•삭제, 회원 및 게시글 내역 통계 차트 구현 등등',
    ],
  },
];

export default function WastecommunityPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="w-full">
      <FadeIn delay={0.3}>
        <Underline delay={0.5} duration={2} color="rgb(248, 205, 7)" className="w-full block">
          <h1 className=" text-4xl font-bold">Waste Community</h1>
        </Underline>
      </FadeIn>
      <FadeIn delay={0.6}>
        <p className="mt-4">
          Waste Community는 폐기물에 관련된 정보를 공유할 수 있는 커뮤니티 플랫폼 입니다.
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
          <li>프론트엔드 1명, 백엔드 1명</li>
        </ul>
      </FadeIn>
    </section>
  );
}

const subTitleStyle = 'mt-16 mobile:mt-8 text-2xl font-bold';
const listStyle = 'mt-4 list-disc pl-6';
