import React from 'react';
import Underline from '../../gasp/UnderLine';
import ScrollTriggerFadeIn from '../../gasp/ScrollTriggerFadeIn';
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
];

export default function SkillSection() {
  return (
    <section className="w-full h-screen bg-white lg:pt-[150px] relative">
      <article className=" max-w-[800px] mx-auto mobile:px-4 mobile:py-7">
        <BottomToTopFadeIn delay={0}>
          <Underline
            delay={1}
            duration={2}
            color="rgb(248, 205, 7)"
            className=" text-2xl w-full block"
          >
            <p className="font-bold text-neutral-700">🛠️ 기술 스택</p>
          </Underline>
        </BottomToTopFadeIn>
        <section className="mt-6">
          {skills.map(({ title, contents }) => (
            <BottomToTopFadeIn key={title} delay={0}>
              <article className="flex gap-8 mobile:block mb-3 items-center">
                <div className=" w-[200px] text-gray-600">{title}</div>
                <div className="flex gap-3">
                  {contents.map((content) => (
                    <p
                      key={content}
                      className="py-1 px-2 bg-gray-200 rounded-md text-purple-600 font-bold"
                    >
                      {content}
                    </p>
                  ))}
                </div>
              </article>
            </BottomToTopFadeIn>
          ))}
        </section>
      </article>

      {/* <div>
        <ScrollTriggerFadeIn delay={0.5}>
          <div>faenfilaenfliefnlaif3212312</div>
        </ScrollTriggerFadeIn>
      </div>
      <div>
        <TopToBottomFadeIn delay={0.5}>
          <div>3142412312312313</div>
        </TopToBottomFadeIn>
      </div> */}
    </section>
  );
}
