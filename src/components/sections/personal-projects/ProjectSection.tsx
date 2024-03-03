import ProjectCard from '@/components/cards/ProjectCard';
import MultiCarousel from '@/components/carousels/MultiCarousel';
import BottomToTopFadeIn from '@/components/gasp/BottomToTopFadeIn';
import Underline from '@/components/gasp/UnderLine';
import React from 'react';
import SiklogBg from '../../../../public/images/projects/siklog/siklog_home.png';
import PortfolioBg from '../../../../public/images/projects/portfolio/portfolio_bg.png';
import SikstagramBg from '../../../../public/images/projects/sikstagram/sikstagram_bg.png';
import DiaryBg from '../../../../public/images/projects/diary/diary_bg.png';
import AboutMeBg from '../../../../public/images/projects/about-me/about_me_bg.png';

const projects = [
  {
    name: 'Siklog',
    bgImg: SiklogBg,
    bgImgAlt: 'siklog 배경이미지',
    skills: ['Next.js', 'React.js', 'Typescript', 'Aws', 'Mongodb', 'Tailwindcss', 'Git', 'Github'],
    link: '/projects/siklog',
  },
  {
    name: 'Portfolio',
    bgImg: PortfolioBg,
    bgImgAlt: 'portfolio 배경이미지',
    skills: ['Next.js', 'React.js', 'Typescript', 'Tailwindcss', 'Scss', 'Git', 'Github'],
    link: '/projects/portfolio',
  },
  {
    name: 'Sikstagram',
    bgImg: SikstagramBg,
    bgImgAlt: 'Sikstagram 배경이미지',
    skills: [
      'Next.js',
      'React.js',
      'Typescript',
      'Swr',
      'Tailwindcss',
      'Sanity.io',
      'Git',
      'Github',
    ],
    link: '/projects/sikstagram',
  },
  {
    name: 'Diary',
    bgImg: DiaryBg,
    bgImgAlt: 'Diary 배경이미지',
    skills: ['React.js', 'Typescript', 'Zustand', 'Scss', 'Git', 'Github'],
    link: '/projects/diary',
  },
  {
    name: 'About Me',
    bgImg: AboutMeBg,
    bgImgAlt: 'About Me 배경이미지',
    skills: ['React.js', 'Typescript', 'Zustand', 'Scss', 'Git', 'Github'],
    link: '/projects/about-me',
  },
];

type Props = {
  id: string;
};

export default function ProjectSecton({ id }: Props) {
  return (
    <section id={id} className="w-full bg-white lg:py-[150px] relative">
      <article className=" max-w-[800px] mx-auto mobile:px-4 mobile:py-7">
        <BottomToTopFadeIn delay={0}>
          <Underline
            delay={1}
            duration={2}
            color="rgb(248, 205, 7)"
            className=" text-2xl w-full block"
          >
            <h2 className="font-bold text-neutral-700">💻 개인 프로젝트</h2>
          </Underline>
        </BottomToTopFadeIn>
        <section className="mt-6 hidden md:block">
          <MultiCarousel imgWidth={390} imgCount={projects.length}>
            {projects.length > 0 &&
              projects.map((project) => (
                // <CarouselCard key={index} text={card.text} color={card.color} />
                <div key={project.name} className="w-[390px] overflow-hidden flex-shrink-0">
                  <ProjectCard project={project} />
                </div>
              ))}
          </MultiCarousel>
        </section>
        {/* 모바일일 때 보여줌 */}
        <section className="mt-4 block md:hidden">
          <BottomToTopFadeIn delay={0}>
            <div className="w-full mt-6 grid md:grid-cols-2 gap-4 ">
              {projects.map((project) => (
                <ProjectCard key={project.name} project={project} />
              ))}
            </div>
          </BottomToTopFadeIn>
        </section>
      </article>
    </section>
  );
}
