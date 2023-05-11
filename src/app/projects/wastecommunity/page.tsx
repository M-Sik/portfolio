'use client';

import FadeIn from '@/components/gasp/FadeIn';
import Underline from '@/components/gasp/UnderLine';
import React, { useEffect } from 'react';

const links = [
  {
    url: 'https://wastecommunity.com',
    label: 'wastecommunity web link',
    text: '👉 웹 보러가기 👈',
  },
];
const skills = ['Vue.js', 'Typescript', 'Scss', 'Vuex', 'Vuetify', 'Git', 'Github'];

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
          <li>
            번들 사이즈 최적화 <span className="font-bold">{`(1.51MB => 1.44MB)`}</span>, Code
            Splitting, 폰트{' '}
            <span className="font-bold">{`(868KB ⇒ 169KB)`} 등 최적화 작업 수행</span>
          </li>
          <ul className={listStyle}>
            <li>
              <a
                href="https://sikk.tistory.com/117"
                target="_blank"
                aria-label="번들 최적화, code splitting 참고 블로그 포스팅"
                className={linkStyle}
              >
                👉 번들 최적화, Code Splitting 참고 포스팅 보러가기 👈
              </a>
            </li>
            <li>
              <a
                href="https://sikk.tistory.com/120"
                target="_blank"
                aria-label="폰트 최적화 참고 블로그 포스팅"
                className={linkStyle}
              >
                👉 폰트 최적화 참고 포스팅 👈
              </a>
            </li>
          </ul>
        </ul>
        <ul className={listStyle}>
          <li>반응형 UI 구현</li>
        </ul>
        <ul className={listStyle}>
          <li>Typescript 도입</li>
        </ul>
        <ul className={listStyle}>
          <li>쓰로틀링을 이용한 무한스크롤 구현</li>
        </ul>
        <ul className={listStyle}>
          <li>Jwt 토큰을 이용한 인증 로직 구현</li>
        </ul>
        <ul className={listStyle}>
          <li>회원 관련 기능 구현</li>
          <ul className={listStyle}>
            <li>로그인, 회원가입, 비밀번호 찾기, 마이페이지 정보 관리</li>
          </ul>
        </ul>
        <ul className={listStyle}>
          <li>게시글 관련 기능 구현</li>
          <ul className={listStyle}>
            <li>
              게시글 조회•삭제, 게시글 상세내용 조회, 좋아요, 스크랩, 댓글 작성, 대댓글 작성,
              신고하기, 쪽지 보내기 등등
            </li>
          </ul>
        </ul>
        <ul className={listStyle}>
          <li>기타 기능 구현</li>
          <ul className={listStyle}>
            <li>
              알림 내역 관리, 1:1 문의, 쪽지 조회•발송•삭제, 유저 차단, 신고하기, 스크랩한 글•작성한
              글•작성한 댓글 관리 등등
            </li>
          </ul>
        </ul>
        <ul className={listStyle}>
          <li>사내 Waste Community 서비스 관리를 위한 Admin 페이지 개발</li>
          <ul className={listStyle}>
            <li>
              회원 정보 조회•수정•삭제, 게시글 조회•수정•삭제, 회원 및 게시글 내역 통계 차트 구현
              등등
            </li>
          </ul>
        </ul>
        <ul className={listStyle}>
          <li>디자이너와 협업하여 재사용 가능한 UI를 설계하여 개발 일정 단축</li>
        </ul>
        <ul className={listStyle}>
          <li>가독성과 관리하기 좋은 Css를 위해 Scss 도입</li>
        </ul>
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
const listStyle = 'mt-2 list-disc pl-6';
const linkStyle = 'hover:text-yellow-400 hover:font-bold';
