import React from 'react';
import FadeIn from '../gasp/FadeIn';
import LinkText from '../etc/LinkText';
// import useIsMobile from '@/hooks/useIsMobile';

export default function MainSideBar() {
  return (
    <aside className="lg:h-full bg-neutral-900 px-6 py-14 mobile:py-4">
      <section className="flex flex-col h-full justify-between">
        <FadeIn delay={1}>
          <div className="flex flex-col gap-5 mobile:items-center mobile:gap-0">
            <LinkText
              url="https://github.com/M-Sik"
              label="github link"
              className="flex font-bold text-3xl mobile:text-xl text-white p-2"
            >
              GitHub <span className="text-yellow-400">.</span>
            </LinkText>
            <LinkText
              url="https://sikk.tistory.com/"
              label="Tistory link"
              className="flex font-bold text-3xl mobile:text-xl text-white p-2"
            >
              Tistory <span className="text-yellow-400">.</span>
            </LinkText>
            <LinkText
              url="https://siklog.shop/"
              label="siklog link"
              className="flex font-bold text-3xl mobile:text-xl text-white p-2"
            >
              Siklog <span className="text-yellow-400">.</span>
            </LinkText>
          </div>
        </FadeIn>
        <FadeIn delay={1}>
          <div className="flex flex-col">
            <p className=" text-gray-200 mb-3 mx-auto mobile:text-xs mobile:mt-2">
              rlaaudtlr233@gmail.com
            </p>
            <p className=" text-gray-400 mx-auto mobile:text-xs lg:w-[183px]">
              Last Update: 2024/02/02
            </p>
          </div>
        </FadeIn>
      </section>
    </aside>
  );
}
