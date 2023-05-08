import BackBtn from '@/components/buttons/BackBtn';
import React from 'react';

export const metadata = {
  title: '프로젝트 상세내용',
  description: '프론트엔드 개발자 김명식의 포트폴리오 입니다. | 프로젝트 상세내용',
  keywords: [
    'wegnal',
    'wastecommunity',
    'chium',
    'sikstagram',
    'diary',
    'aboutme',
    '웨그널',
    '웨이스트 커뮤니티',
  ],
};

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <section className=" max-w-screen-md mx-auto py-[10vh] px-4">
      <BackBtn
        btnText="Back"
        className="p-2 bg-neutral-900 rounded-xl font-bold text-yellow-400 text-xl"
      />
      <article className=" py-12 w-full">{children}</article>
    </section>
  );
}
