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
          <li>Vue.js Option API에서 Composition API로 리펙토링 진행</li>
          <ul className={listStyle}>
            <li>
              기존에는 Option API를 활용하여 작업하였으나 소스 코드가 많아질수록 연관되어있는 코드가
              나누어져있어 로직을 추적하기 어려웠습니다. 이를 해결하기 위해 Composition API를
              도입하였습니다.
            </li>
          </ul>
        </ul>
        <ul className={listStyle}>
          <li>WebView를 이용한 Aos, Ios 앱 개발</li>
          <ul className={listStyle}>
            <li>
              Ios의 경우 앱 종료 시 웹 로컬스토리지가 초기화되는 문제가 발생하여 Native 저장소에
              초기화되지 않아야 할 데이터를 저장하여 문제를 해결하였습니다.
            </li>
          </ul>
        </ul>
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
          <li>Jwt 토큰을 이용한 인증 로직 구현</li>
        </ul>
        <ul className={listStyle}>
          <li>카카오맵 API를 이용하여 지도, 위치기반의 데이터를 다루어 지도로 화면에 표현</li>
        </ul>
        <ul className={listStyle}>
          <li>디자이너와 협업하여 재사용 가능한 UI 설계</li>
        </ul>
        <ul className={listStyle}>
          <li>사내 Wegnal 서비스 관리를 위한 Admin 페이지 개발</li>
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
