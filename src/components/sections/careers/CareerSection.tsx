import BottomToTopFadeIn from '@/components/gasp/BottomToTopFadeIn';
import Underline from '@/components/gasp/UnderLine';
import React from 'react';
import WithweHomepageBg from '../../../../public/images/careers/withwe_bg.png';
import WegnalLandingBg from '../../../../public/images/careers/wegnal_landing_bg.jpg';
import WegnalBg from '../../../../public/images/careers/wegnal_bg.jpg';
import WasteCommunityBg from '../../../../public/images/careers/wastecommunity_bg.png';
import ChiumBg from '../../../../public/images/careers/chium_bg.png';
import ProjectCard from '@/components/cards/ProjectCard';

const careers = [
  {
    comp: '(주) 위드위',
    year: '(2022.11 ~ 재직중)',
    projects: [
      {
        name: 'Wegnal Business',
        bgImg: WegnalBg,
        bgImgAlt: '웨그널 비즈니스 배경이미지',
        skills: [
          'React.js',
          'Typescript',
          'Zustand',
          'React Query',
          'Tailwindcss',
          'Git',
          'Github',
        ],
        link: '/projects/wegnal-business',
      },
      {
        name: 'Withwe 홈페이지',
        bgImg: WithweHomepageBg,
        bgImgAlt: '위드위 홈페이지 배경이미지',
        skills: ['Next.js 13', 'React.js', 'Typescript', 'Tailwindcss', 'AWS', 'Git', 'Github'],
        link: '/projects/withwe-homepage',
      },
      {
        name: 'Wegnal',
        bgImg: WegnalBg,
        bgImgAlt: '웨그널 배경이미지',
        skills: ['Vue.js', 'Typescript', 'Scss', 'Vuex', 'Vuetify', 'Git', 'Github'],
        link: '/projects/wegnal',
      },
      {
        name: 'WasteCoummunity',
        bgImg: WasteCommunityBg,
        bgImgAlt: '웨이스트커뮤니티 배경이미지',
        skills: ['Vue.js', 'Typescript', 'Scss', 'Vuex', 'Vuetify', 'Git', 'Github'],
        link: '/projects/wastecommunity',
      },
    ],
  },
  {
    comp: '(주) 느루',
    year: '(2021.09 ~ 2022.10)',
    projects: [
      {
        name: 'Chium',
        bgImg: ChiumBg,
        bgImgAlt: '치움 배경이미지',
        skills: ['Vue.js', 'Javascript', 'Scss', 'Vuex', 'Vuetify', 'Git', 'Github'],
        link: '/projects/chium',
      },
    ],
  },
];

type Props = {
  id: string;
};

export default function CareerSection({ id }: Props) {
  return (
    <section id={id} className="w-full bg-white lg:pt-[150px] py-3 relative">
      <article className=" max-w-[800px] mx-auto mobile:px-4 mobile:py-7">
        <BottomToTopFadeIn delay={0}>
          <Underline
            delay={1}
            duration={2}
            color="rgb(248, 205, 7)"
            className=" text-2xl w-full block"
          >
            <h2 className="font-bold text-neutral-700">💼 경력</h2>
          </Underline>
        </BottomToTopFadeIn>
        <div>
          {careers.map(({ comp, year, projects }) => (
            <article key={comp} className="mt-6">
              <BottomToTopFadeIn delay={0}>
                <h3 className="text-xl font-bold">
                  {comp} <span className="text-gray-600">{year}</span>{' '}
                </h3>
              </BottomToTopFadeIn>
              <BottomToTopFadeIn delay={0}>
                <ul className="w-full mt-6 grid md:grid-cols-2 gap-4 ">
                  {projects.map((project) => (
                    <li key={project.name}>
                      <ProjectCard project={project} />
                    </li>
                  ))}
                </ul>
              </BottomToTopFadeIn>
            </article>
          ))}
        </div>
      </article>
    </section>
  );
}
