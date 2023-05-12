'use client';

import FadeIn from '@/components/gasp/FadeIn';
import Underline from '@/components/gasp/UnderLine';
import React, { useEffect } from 'react';

const links = [
  {
    url: 'https://wegnal.com',
    label: 'wegnal web link',
    text: '👉 웹 보러가기 👈',
  },
  {
    url: 'https://play.google.com/store/apps/details?id=aos.gonsoftware.wegnal',
    label: 'wegnal googleplay link',
    text: '👉 구글플레이 앱 보러가기 👈',
  },
  {
    url: 'https://apps.apple.com/us/app/웨그널/id6446239095',
    label: 'wegnal appstore link',
    text: '👉 앱스토어 앱 보러가기 👈',
  },
];
const skills = ['Vue.js', 'Typescript', 'Scss', 'Vuex', 'Vuetify', 'Git', 'Github'];

export default function WegnalPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="w-full">
      <FadeIn delay={0.3}>
        <Underline delay={0.5} duration={2} color="rgb(248, 205, 7)" className="w-full block">
          <h1 className=" text-4xl font-bold">Wegnal</h1>
        </Underline>
      </FadeIn>
      <FadeIn delay={0.6}>
        <p className="mt-4">
          Wegnal은 폐기물 처리를 위해 폐기물 배출자와 수거∙처리업체를 매칭시켜주는 서비스입니다.
          배출자가 폐기물 배출 신청 시 정해진 반경 내의 수거∙처리업체에게 수거를 요청합니다.
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
          <li>Vue.js Option API에서 Composition API로 Refactoring</li>
          <ul className={listIndentStyle}>
            <li>
              기존에는 Option API를 활용하여 작업하였으나 소스 코드가 많아질수록 연관되어있는 코드가
              나누어져있어 로직을 추적하기 어려웠습니다. 이를 해결하기 위해 Composition API를
              도입하였습니다.
            </li>
          </ul>
        </ul>
        <ul className={listStyle}>
          <li>WebView를 이용한 Aos, Ios 앱 개발</li>
        </ul>
        <ul className={listStyle}>
          <li>초기 로딩속도 향상을 위한 최적화 작업 수행</li>
          <ul className={listIndentStyle}>
            <li>Bundle 최적화, Code Splitting, Font 최적화 적용</li>
          </ul>
        </ul>
        <ul className={listStyle}>
          <li>회원 관련 기능 구현</li>
          <ul className={listIndentStyle}>
            <li>로그인, 회원가입, 아이디 찾기, 비밀번호 찾기, 마이페이지 정보 관리</li>
          </ul>
        </ul>
        <ul className={listStyle}>
          <li>폐기물 배출자 관련 기능 구현</li>
          <ul className={listIndentStyle}>
            <li>
              폐기물 배출 신청•취소•거래완료, 배출 신청 정보 조회, 배출 신청을 수락한 수거업체 조회
              등등
            </li>
          </ul>
        </ul>
        <ul className={listStyle}>
          <li>폐기물 수거업체 관련 기능 구현</li>
          <ul className={listIndentStyle}>
            <li>배출 신청 수락•거절, 배출 신청 내역 조회 등등</li>
          </ul>
        </ul>
        <ul className={listStyle}>
          <li>기타 기능 구현</li>
          <ul className={listIndentStyle}>
            <li>푸쉬 알림에 따른 페이지 이동, 거래내역 히스토리, 알림 내역, 전화 연결</li>
          </ul>
        </ul>
        <ul className={listStyle}>
          <li>사내 Wegnal 서비스 관리를 위한 관리자 페이지 개발</li>
          <ul className={listIndentStyle}>
            <li>
              회원 정보 조회•수정•삭제, 배출 신청된 내역 조회•수정•삭제, 회원 및 배출신청 내역 통계
              차트 구현 등등
            </li>
          </ul>
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
const listStyle = 'mt-4 list-disc pl-6';
const listIndentStyle = 'mt-1 list-disc pl-6 !list-[circle]';
const linkStyle = 'hover:text-yellow-400 hover:font-bold';
