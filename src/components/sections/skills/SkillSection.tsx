import React from 'react';
import Underline from '../../gasp/UnderLine';
import BottomToTopFadeIn from '@/components/gasp/BottomToTopFadeIn';

const skills = [
  {
    title: 'Language',
    contents: ['Javascript', 'Typescript'],
  },
  {
    title: 'Framework / Library',
    contents: ['Next.js', 'React.js', 'Vue.js'],
  },
  {
    title: 'MarkUp',
    contents: ['Html', 'Css', 'Scss', 'Tailwindcss'],
  },
  {
    title: 'Tool',
    contents: ['Git', 'Github', 'Figma'],
  },
  {
    title: 'Used at least once',
    contents: ['Aws', 'Mongodb'],
  },
];

type Props = {
  id: string;
};

export default function SkillSection({ id }: Props) {
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
              <h2 className="font-bold text-neutral-700">🛠️ 기술 스택</h2>
            </Underline>
          </BottomToTopFadeIn>
        </dt>
        <dd className="mt-6">
          <ul>
            {skills.map(({ title, contents }) => (
              <li key={title}>
                <BottomToTopFadeIn delay={0}>
                  <dl className="flex gap-8 mobile:block pb-3 items-center">
                    <dt className=" w-[200px] text-gray-600">{title}</dt>
                    <dd className="flex gap-3">
                      {contents.map((content) => (
                        <p
                          key={content}
                          className="py-1 px-2 bg-gray-200 rounded-md text-purple-600 font-bold"
                        >
                          {content}
                        </p>
                      ))}
                    </dd>
                  </dl>
                </BottomToTopFadeIn>
              </li>
            ))}
          </ul>
        </dd>
      </dl>
    </section>
  );
}
