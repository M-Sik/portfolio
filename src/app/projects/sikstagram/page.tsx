'use client';

import BottomToTopFadeIn from '@/components/gasp/BottomToTopFadeIn';
import FadeIn from '@/components/gasp/FadeIn';
import Underline from '@/components/gasp/UnderLine';
import React, { useEffect } from 'react';
import OAtuhGif from '../../../../public/images/projects/sikstagram/sikstagram_Oauth.gif';
import AddPostGif from '../../../../public/images/projects/sikstagram/sikstagram_addpost.gif';
import LikeBookmarkCommentGif from '../../../../public/images/projects/sikstagram/sikstagram_like_bookmark_comment.gif';
import SearchUserGif from '../../../../public/images/projects/sikstagram/sikstagram_user_search.gif';
import FollowUnfollowGif from '../../../../public/images/projects/sikstagram/sikstagram_user_follow_unfollow.gif';
import FollowUserInfoGif from '../../../../public/images/projects/sikstagram/sikstagram_followuser_info.gif';
import MyPostedBookmarkLikeGif from '../../../../public/images/projects/sikstagram/sikstagram_mypost_bookmarked_liked.gif';
import Image from 'next/image';
import ProjectServiceLinkList from '@/components/sections/project/ProjectServiceLinkSection';
import ProjectUseSkillSection from '@/components/sections/project/ProjectUseSkillSection';
import ProjectNumberOfPeopleSection from '@/components/sections/project/ProjectNumberOfPeopleSection';
import ProjectWorkDetailSection from '@/components/sections/project/ProjectWorkDetailSection';

const links = [
  {
    url: 'https://sikstagram.vercel.app',
    label: 'sikstagram web link',
    text: '👉 웹 보러가기 👈',
  },
  {
    url: 'https://github.com/M-Sik/sikstagram',
    label: 'sikstagram github link',
    text: '👉 깃허브 보러가기 👈',
  },
];
const skills = ['Next.js 13', 'React.js 18', 'Typescript', 'Swr', 'Tailwindcss', 'Git', 'Github'];
const workDetails = [
  {
    content: 'Lighthouse를 이용한 웹 성능 및 웹 접근성 검사',
    contentDetails: [],
  },
  { content: 'Sanity를 이용한 서버 데이터 관리', contentDetails: [] },
  {
    content: '회원 관련 기능 구현',
    contentDetails: [
      'OAuth 로그인(구글, 카카오), Next Meddleware를 이용한 User Session에 따른 처리, 마이페이지',
    ],
  },
  {
    content: '게시글 관련 기능 구현',
    contentDetails: ['게시글 작성•조회, 좋아요, 북마크, 댓글 작성'],
  },
  {
    content: '기타 기능 구현',
    contentDetails: [
      'File Drag and Drop, Swr을 이용한 데이터 동기화, 유저 팔로우•언팔로우, 사용자 검색',
    ],
  },
];
const previews = [
  {
    title: 'OAuth 로그인 👇👇',
    gifSrc: OAtuhGif,
    alt: 'oauth login gif',
  },
  {
    title: '게시글 등록 👇👇',
    gifSrc: AddPostGif,
    alt: '게시글 등록 gif',
  },
  {
    title: '게시글 및 게시글 상세화면 좋아요, 북마크, 댓글 작성 👇👇',
    gifSrc: LikeBookmarkCommentGif,
    alt: '게시글 및 게시글 상세화면 좋아요, 북마크, 댓글 작성 gif',
  },
  {
    title: 'Debounce를 이용한 유저 검색 👇👇',
    gifSrc: SearchUserGif,
    alt: 'Debounce를 이용한 유저 검색 gif',
  },
  {
    title: '유저 팔로우, 언팔로우 👇👇',
    gifSrc: FollowUnfollowGif,
    alt: '유저 팔로우, 언팔로우 gif',
  },
  {
    title: '팔로우한 유저 정보보기 👇👇',
    gifSrc: FollowUserInfoGif,
    alt: '팔로우한 유저 정보보기 gif',
  },
  {
    title: '해당 유저가 쓴 게시글, 북마크한 글, 좋아요한 글 조회 👇👇',
    gifSrc: MyPostedBookmarkLikeGif,
    alt: '해당 유저가 쓴 게시글, 북마크한 글, 좋아요한 글 조회 gif',
  },
];

export default function SikstagramPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="w-full">
      <FadeIn delay={0.3}>
        <Underline delay={0.5} duration={2} color="rgb(248, 205, 7)" className="w-full block">
          <h1 className=" text-4xl font-bold">Sikstagram</h1>
        </Underline>
      </FadeIn>
      <FadeIn delay={0.6}>
        <p className="mt-4">
          Next.js에 대하여 공부하기 위해 진행한 프로젝트 입니다. 13버전의 app dir를 이용하여
          프로젝트를 진행 하였습니다. 프로젝트를 진행하며 Next.js의 장점인 pre-rendering을 경험할 수
          있었으며, 13버전에서 새로나온 개념인 서버 컴포넌트, 클라이언트 컴포넌트에 대해 깊게 공부할
          수 있었습니다.
          <br />
          백엔드 데이터 관리는 Headless Cms인 Sanity.io 를 이용하였습니다.
        </p>
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

      {previews.map(({ title, gifSrc, alt }) => (
        <BottomToTopFadeIn key={title} delay={0.3}>
          <h3 className={previewTitleStyle}>{title}</h3>
          <Image
            src={gifSrc}
            alt={alt}
            className={previewGifStyle}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8f5WhHgAHBAJV9F76jAAAAABJRU5ErkJggg=="
          />
        </BottomToTopFadeIn>
      ))}
    </section>
  );
}

const subTitleStyle = 'mt-16 mobile:mt-8 text-2xl font-bold';

const previewTitleStyle = 'font-bold text-xl mt-5 animate-c-bounce';
const previewGifStyle = 'mt-3 mb-8';
