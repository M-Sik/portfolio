'use client';

import FadeIn from '@/components/gasp/FadeIn';
import Underline from '@/components/gasp/UnderLine';
import React, { useEffect } from 'react';

const links = [
  {
    url: 'https://chium.co.kr',
    label: 'chium web link',
    text: '👉 웹 보러가기 👈',
  },
  {
    url: 'https://play.google.com/store/apps/details?id=aos.gonsoftware.chium',
    label: 'chium googleplay link',
    text: '👉 구글플레이 앱 보러가기 👈',
  },
  {
    url: 'https://apps.apple.com/kr/app/치움/id1623767946',
    label: 'chium appstore link',
    text: '👉 앱스토어 앱 보러가기 👈',
  },
];
const skills = ['Vue.js', 'Javascript', 'Scss', 'Vuex', 'Vuetify', 'Git', 'Github'];

export default function ChiumPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="w-full">
      <FadeIn delay={0.3}>
        <Underline delay={0.5} duration={2} color="rgb(248, 205, 7)" className="w-full block">
          <h1 className=" text-4xl font-bold">Chium</h1>
        </Underline>
      </FadeIn>
      <FadeIn delay={0.6}>
        <p className="mt-4">
          Chium은 폐기물 배출자와 수거업체를 연결해 주는 폐기물 안전처리 서비스 입니다. 배출자와
          수거업체간의 입찰 과정을 통하여 폐기물을 처리하며, 배출자는 가장 저렴한 가격에 폐기물을
          배출할 수 있습니다.
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
          <li>WebView를 이용한 Aos, Ios 앱 개발</li>
        </ul>
        <ul className={listStyle}>
          <li>아임포트 Module을 이용하여 다날 본인인증 서비스 연동</li>
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
              배출 신청 및 신청내역 조회, 방문 신청한 업체 관리, 폐기물 입찰 내역 관리, 폐기물
              처리내역 관리, 수거 업체 검색 및 조회, 거래 히스토리 관리 등등
            </li>
          </ul>
        </ul>
        <ul className={listStyle}>
          <li>기타 기능 구현</li>
          <ul className={listIndentStyle}>
            <li>알림 내역 관리, 푸쉬 알림에 따른 페이지 이동, 1:1문의</li>
          </ul>
        </ul>
        <ul className={listStyle}>
          <li>UI Library를 적절히 활용하여 빠른 UI 개발</li>
        </ul>
        <ul className={listStyle}>
          <li>운영 중에 발생하는 버그 및 고객 개선사항에 따른 수정</li>
        </ul>
      </FadeIn>
      <FadeIn delay={2.1}>
        <h2 className={subTitleStyle}>👨‍👨‍👦 참가 인원</h2>
        <ul className={listStyle}>
          <li>
            Front-End 2명, Back-End 2명{' '}
            <span className="font-bold">(참여율 Front-End 기준 70%)</span>
          </li>
        </ul>
      </FadeIn>
    </section>
  );
}

const subTitleStyle = 'mt-16 mobile:mt-8 text-2xl font-bold';
const listStyle = 'mt-4 list-disc pl-6';
const listIndentStyle = 'mt-1 list-disc pl-6 !list-[circle]';
const linkStyle = 'hover:text-yellow-400 hover:font-bold';
