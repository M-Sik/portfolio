import React from 'react';
import bgImg from '../../../../public/images/main/portfolio_main_bg.jpeg';
import Image from 'next/image';
import styles from './MainContent.module.scss';
import ArrowBottoIcon from '@/components/icons/ArrowBottoIcon';

export default function MainContent() {
  return (
    <article className="w-full h-full flex flex-col justify-center items-center relative">
      <p className={`${bigSizeFont} mb-6`}>게임을 즐기는 프론트엔드 개발자</p>
      <p className={`${bigSizeFont}`}>
        <span className={`text-7xl ${styles.name_border}`}>김명식</span>
        입니다.
      </p>
      <p className={`${smailSizeFont} mt-6`}>프로그래밍이라는 게임을 즐기며</p>
      <p className={`${smailSizeFont} mt-1`}>열심히 레벨업 하고있습니다.</p>
      <p className={`${smailSizeFont} mt-1`}>매일 2시간 이상 게임을 즐기고있습니다.</p>
      <ArrowBottoIcon animation />
      <div className=" w-full fixed top-0 left-[220px] z-[-1]">
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

const bigSizeFont = 'font-bold text-white text-5xl';
const smailSizeFont = 'text-white text-3xl';
