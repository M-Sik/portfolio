import React from 'react';
import Underline from '../../gasp/UnderLine';
import BottomToTopFadeIn from '@/components/gasp/BottomToTopFadeIn';
import Link from 'next/link';
import { troubleShootings } from './constants';

type Props = {
  id: string;
};

export default function TroubleShootingSection({ id }: Props) {
  return (
    <section id={id} className="w-full bg-white lg:pt-[150px] relative">
      <dl className=" max-w-[800px] mx-auto mobile:px-4 mobile:py-7">
        <dt>
          <BottomToTopFadeIn delay={0}>
            <Underline
              delay={1}
              duration={2}
              color="rgb(248, 205, 7)"
              className=" text-2xl w-full block"
            >
              <h2 className="font-bold text-neutral-700">🧨 트러블 슈팅 모아보기</h2>
            </Underline>
          </BottomToTopFadeIn>
        </dt>
        <dd className="mt-6">
          <ul className="flex flex-col gap-4">
            {troubleShootings.map(({ title, href, label }) => (
              <BottomToTopFadeIn delay={0} key={title}>
                <li>
                  <Link
                    href={href}
                    aria-label={label}
                    className="text-gray-600 hover:text-yellow-400 underline text-lg"
                  >
                    {title}
                  </Link>
                </li>
              </BottomToTopFadeIn>
            ))}
          </ul>
        </dd>
      </dl>
    </section>
  );
}
