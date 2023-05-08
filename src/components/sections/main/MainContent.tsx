import React from 'react';
import bgImg from '../../../../public/images/main/portfolio_main_bg.jpeg';
import Image from 'next/image';
import ArrowBottoIcon from '@/components/icons/ArrowBottoIcon';
import TopToBottomFadeIn from '@/components/gasp/TopToBottomFadeIn';
import FadeIn from '@/components/gasp/FadeIn';
import Underline from '@/components/gasp/UnderLine';

export default function MainContent() {
  return (
    <article className="w-full h-full flex flex-col justify-center items-center relative">
      <TopToBottomFadeIn delay={1.5}>
        <p className={`${BIG_SIZE_FONT} mb-6`}>게임을 즐기는 프론트엔드 개발자</p>
      </TopToBottomFadeIn>
      <TopToBottomFadeIn delay={1.9}>
        <p className={`${BIG_SIZE_FONT}`}>
          <Underline delay={2.4} color="rgb(248, 205, 7)" className="text-7xl mobile:text-4xl">
            김명식
          </Underline>
          입니다.
        </p>
      </TopToBottomFadeIn>
      <TopToBottomFadeIn className="text-center" delay={2.8}>
        <p className={`${SMAIL_SIZE_FONT} mt-6`}>프로그래밍이라는 게임을 즐기며</p>
        <p className={`${SMAIL_SIZE_FONT} mt-1`}>열심히 레벨업 하고있습니다.</p>
        <p className={`${SMAIL_SIZE_FONT} mt-1`}>매일 2시간 이상 게임을 즐기고있습니다.</p>
      </TopToBottomFadeIn>
      <FadeIn className="text-center" delay={3.2}>
        <button
          name="scroll bottom button"
          onClick={() =>
            document
              .getElementById('skillSection')
              ?.scrollIntoView({ block: 'start', behavior: 'smooth' })
          }
        >
          <ArrowBottoIcon animation />
        </button>
      </FadeIn>
      <div className=" w-full fixed top-0 lg:left-[220px] z-[-1]">
        <Image
          src={bgImg}
          alt="메인 배경 이미지"
          fill={false}
          priority
          className="object-cover w-full h-screen brightness-50"
          draggable={false}
        />
      </div>
    </article>
  );
}

const BIG_SIZE_FONT = 'font-bold text-white text-5xl mobile:text-2xl';
const SMAIL_SIZE_FONT = 'text-white text-3xl mobile:text-lg';
