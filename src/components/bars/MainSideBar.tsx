import React from 'react';
import Styles from './MainSideBar.module.scss';

export default function MainSideBar() {
  return (
    <aside className=" bg-neutral-900 flex flex-col justify-between px-6 py-14">
      <div className="flex flex-col gap-5">
        <a
          className={`font-bold text-3xl text-white p-2 rounded-lg ${Styles.text_hover}`}
          href="https://github.com/M-Sik"
          target="_blank"
          aria-label="github link"
        >
          GitHub <span className="text-yellow-400">.</span>
        </a>
        <a
          className={`font-bold text-3xl text-white p-2 rounded-lg ${Styles.text_hover}`}
          href="https://sikk.tistory.com/"
          target="_blank"
          aria-label="blog link"
        >
          Blog <span className="text-yellow-400">.</span>
        </a>
      </div>
      <div className="flex flex-col">
        <p className=" text-gray-200 mb-3 mx-auto">rlaaudtlr233@gmail.com</p>
        <p className=" text-gray-400 mx-auto w-[183px]">Last Update: 2023/05/05</p>
      </div>
    </aside>
  );
}
