import LightHouseImg from '../../../../../public/images/projects/portfolio/portfolio-lighthouse.png';
import GsapMainGif from '../../../../../public/images/projects/portfolio/portfolio-main-animation.gif';
import GsapFullGif from '../../../../../public/images/projects/portfolio/portfolio-full-animation.gif';
import ScrollHighlightGif from '../../../../../public/images/projects/portfolio/portfolio-scroll-highlight.gif';
import MultiCarouselBtnGif from '../../../../../public/images/projects/portfolio/portfolio-multi-carousel-btn.gif';
import MultiCarouselDragGif from '../../../../../public/images/projects/portfolio/portfolio-multi-carousel-drag.gif';

export const links = [
  {
    url: 'https://devsik-portfolio.vercel.app/',
    label: 'portfolio web link',
    text: '👉 웹 보러가기 👈',
  },
  {
    url: 'https://github.com/M-Sik/portfolio',
    label: 'portfolio github link',
    text: '👉 깃허브 보러가기 👈',
  },
];
export const skills = ['Next.js', 'React.js', 'Typescript', 'Tailwindcss', 'Scss', 'Git', 'Github'];
export const workDetails = [
  {
    content: 'Lighthouse를 이용한 웹 성능 및 웹 접근성 검사',
    contentDetails: [],
  },
  {
    content: 'SEO 최적화',
    contentDetails: [
      '정적 sitemap, 동적 sitemap 작성',
      '페이지별 meta 태그 작성',
      'semantic 태그 작성',
    ],
  },
  {
    content: 'Responsive UI 구현',
    contentDetails: [],
  },
  {
    content: 'Gsap를 이용한 애니메이션 구현',
    contentDetails: [],
  },
];
export const previews = [
  {
    title: 'Lighthouse 측정 결과 👇👇',
    gifSrc: [LightHouseImg],
    alt: 'lighthouse img',
  },
  {
    title: 'gsap 라이브러리를 이용한 애니메이션 👇👇',
    gifSrc: [GsapMainGif, GsapFullGif],
    alt: 'gsap animation gif',
  },
  {
    title: '스크롤 위치에 따른 목차 하이라이팅 👇👇',
    gifSrc: [ScrollHighlightGif],
    alt: '목차 하이라이팅 gif',
  },
  {
    title: '멀티 캐러셀(버튼 슬라이드, 드래그 슬라이드) 👇👇',
    gifSrc: [MultiCarouselBtnGif, MultiCarouselDragGif],
    alt: '멀티 캐러셀 gif',
  },
];
