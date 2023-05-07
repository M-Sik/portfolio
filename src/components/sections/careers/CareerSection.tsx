import BottomToTopFadeIn from '@/components/gasp/BottomToTopFadeIn';
import Underline from '@/components/gasp/UnderLine';
import React from 'react';
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
        link: '/projects/wegnal',
      },
    ],
  },
];

export default function CareerSection() {
  return (
    <section className="w-full bg-white lg:pt-[150px] py-3 relative">
      <article className=" max-w-[800px] mx-auto mobile:px-4 mobile:py-7">
        <BottomToTopFadeIn delay={0}>
          <Underline
            delay={1}
            duration={2}
            color="rgb(248, 205, 7)"
            className=" text-2xl w-full block"
          >
            <h1 className="font-bold text-neutral-700">💼 경력</h1>
          </Underline>
        </BottomToTopFadeIn>
        <section>
          {careers.map(({ comp, year, projects }) => (
            <article key={comp} className="mt-6">
              <BottomToTopFadeIn delay={0}>
                <h1 className="text-xl font-bold">
                  {comp} <span className="text-gray-600">{year}</span>{' '}
                </h1>
              </BottomToTopFadeIn>
              <BottomToTopFadeIn delay={0}>
                <div className="w-full mt-6 grid md:grid-cols-2 gap-4 ">
                  {projects.map((project) => (
                    <ProjectCard key={project.name} project={project} />
                  ))}
                </div>
              </BottomToTopFadeIn>
            </article>
          ))}
        </section>
      </article>
    </section>
  );
}
