import React from 'react';
import Styles from './MainSideBar.module.scss';
import ScrollTriggerFadeIn from '../gasp/ScrollTriggerFadeIn';
// import useIsMobile from '@/hooks/useIsMobile';

export default function MainSideBar() {
  return (
    <aside className="lg:h-full bg-neutral-900 px-6 py-14 mobile:py-4">
      <ScrollTriggerFadeIn delay={1}>
        <section className="flex flex-col h-full justify-between">
          <div className="flex flex-col gap-5 mobile:items-center mobile:gap-0">
            <a
              className={`flex font-bold text-3xl mobile:text-xl text-white p-2 rounded-lg ${Styles.text_hover} `}
              href="https://github.com/M-Sik"
              target="_blank"
              aria-label="github link"
            >
              GitHub <span className="text-yellow-400">.</span>
            </a>
            <a
              className={`flex font-bold text-3xl mobile:text-xl text-white p-2 rounded-lg ${Styles.text_hover}`}
              href="https://sikk.tistory.com/"
              target="_blank"
              aria-label="blog link"
            >
              Blog <span className="text-yellow-400">.</span>
            </a>
          </div>
          <div className="flex flex-col">
            <p className=" text-gray-200 mb-3 mx-auto mobile:text-xs mobile:mt-2">
              rlaaudtlr233@gmail.com
            </p>
            <p className=" text-gray-400 mx-auto mobile:text-xs lg:w-[183px]">
              Last Update: 2023/05/05
            </p>
          </div>
        </section>
      </ScrollTriggerFadeIn>
    </aside>
  );
}
