import React from 'react';
import FadeIn from '../gasp/FadeIn';
import LinkText from '../etc/LinkText';
// import useIsMobile from '@/hooks/useIsMobile';

const links = [
  { targetUrl: 'https://github.com/M-Sik', label: 'github link', name: 'GitHub' },
  { targetUrl: 'https://sikk.tistory.com/', label: 'Tistory link', name: 'Tistory' },
  { targetUrl: 'https://siklog.shop/', label: 'siklog link', name: 'Siklog' },
];
const infos = ['rlaaudtlr233@gmail.com', 'Last Update: 2024/04/12'];

export default function MainSideBar() {
  return (
    <aside className="lg:h-full bg-neutral-900 px-6 py-14 mobile:py-4">
      <section className="flex flex-col h-full justify-between">
        <FadeIn delay={1}>
          <nav>
            <ul className="flex flex-col gap-5 mobile:items-center mobile:gap-0">
              {links.map(({ targetUrl, label, name }, i) => (
                <li key={i}>
                  <LinkText
                    url={targetUrl}
                    label={label}
                    className="flex font-bold text-3xl mobile:text-xl text-white p-2"
                  >
                    {name} <span className="text-yellow-400">.</span>
                  </LinkText>
                </li>
              ))}
            </ul>
          </nav>
        </FadeIn>
        <FadeIn delay={1}>
          <ul className="flex flex-col">
            {infos.map((info, i) => (
              <li
                key={i}
                className='className=" text-gray-200 mb-3 mx-auto mobile:text-xs mobile:mt-2"'
              >
                {info}
              </li>
            ))}
          </ul>
        </FadeIn>
      </section>
    </aside>
  );
}
