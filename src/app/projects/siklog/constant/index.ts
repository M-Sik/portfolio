import HomeImg from '../../../../../public/images/projects/siklog/siklog_home.png';
import PostDetailImg from '../../../../../public/images/projects/siklog/siklog_post_detail.png';
import SearchPostImg from '../../../../../public/images/projects/siklog/siklog_search_post.png';

export const introducts = [
  {
    title:
      '검색엔진이 블로그의 내용 효율적으로 이해하게 해야 한다. 미리보기를 통해 사용자의 클릭을 유도해야 한다.',
    details: [
      '검색엔진에 노출되어야 하는 정보는 SSR 방식을 이용하여 검색엔진이 HTML 문서를 읽을 수 있도록 도움을 주었습니다.',
      '페이지에 따른 title, description, keyword 등 메타태그를 작성하여 검색엔진의 블로그 내용 파악에 도움을 주었습니다.',
      'title, description, open graph 등 메타태그를 통해 사용자가 블로그를 미리 볼 수 있도록 구현하였습니다.',
    ],
  },
  {
    title: '검색엔진은 버튼을 클릭하지 않고 a 태그를 통해 페이지를 옮겨 다닌다.',
    details: [
      'Next.js에서 제공하는 Link 태그를 이용해 검색엔진의 페이지 이동에 도움을 주었습니다.',
    ],
  },
  {
    title: '검색엔진이 블로그를 효과적으로 크롤링하고 색인하기 위해서는 sitemap이 필요하다.',
    details: [
      'route 경로에 따른 sitemap 즉, 정적 sitemap을 작성하였습니다.',
      '동적 sitemap 구현, 블로그의 경우 게시글 하나하나의 내용을 검색엔진이 쉽게 파악하기 위해 게시글들의 상세 페이지 경로를 sitemap으로 작성하여 검색엔진에 도움을 주었습니다.',
    ],
  },
  {
    title:
      '블로그 상세 글을 검색엔진이 보고 있을 때 현재 글 및 다른 글로 이동할 수 있는 정보를 주어야 한다.',
    details: [
      '검색엔진이 블로그 상세 글을 색인했다면 해당 글을 사용자에게 노출시키기 위해 블로그 게시글 작성 시 title, description, keyword 정보를 입력하였고, 블로그 상세 글 페이지에 메타태그를 추가해주었습니다.',
      '검색엔진이 블로그 상세 글 페이지를 탐색 중 다른 게시글도 노출시키기 위해 이전 게시글 및 다음 게시글의 링크를 넣었습니다.',
    ],
  },
];
export const links = [
  {
    url: 'https://siklog.shop/',
    label: 'siklog link',
    text: '👉 웹 보러가기 👈',
  },
  {
    url: 'https://github.com/M-Sik/siklog',
    label: 'siklog github link',
    text: '👉 깃허브 보러가기 👈',
  },
];
export const skills = [
  'Next.js',
  'React.js',
  'Typescript',
  'React Query',
  'Aws',
  'Mongodb',
  'Tailwindcss',
  'Git',
  'Github',
];
export const workDetails = [
  {
    content: 'SEO 최적화',
    contentDetails: [
      '정적 sitemap, 동적 sitemap 작성',
      '페이지별 meta 태그 작성',
      'semantic 태그 작성',
    ],
  },
  {
    content: 'Next.js에서 제공하는 api route를 이용해 게시글 관련 api구현',
    contentDetails: [],
  },
  {
    content: 'Suspense, ErrorBoundary, QueryErrorResetBoundary를 통한 API 로딩 처리 및 에러핸들링',
    contentDetails: [],
  },
  {
    content:
      'React Query의 useSuspenseInfiniteQuery와 IntersectionObserver를 이용한 무한스크롤 기능 구현',
    contentDetails: [],
  },
  {
    content: 'CSR 방식으로 게시글 목록을 불러오는 페이지에 React Query 적용',
    contentDetails: [
      '매번 해당 페이지로 이동할때마다 로딩 UI가 보여 캐싱을 이용해 UX를 향상시키기 위해 React Query 적용',
    ],
  },
  {
    content:
      'AWS ec2, pm2, nginx를 이용한 호스팅과 code pipeline, code deploy를 이용한 배포 자동화를 통하여 운영중이었으나 비용 문제로 인해 호스팅 서비스를 Vercel로 변경',
    contentDetails: [],
  },
  {
    content: 'Lighthouse를 이용한 웹 성능 및 웹 접근성 검사',
    contentDetails: [],
  },
  {
    content: 'Markdown Editor를 이용한 게시글 작성',
    contentDetails: [],
  },
  {
    content: 'Markdown Viewer를 이용한 게시글 상세 조회',
    contentDetails: [],
  },
];
export const previews = [
  {
    title: 'Home 화면 👇👇',
    gifSrc: [HomeImg],
    alt: 'Home img',
  },
  {
    title: '게시글 상세 조회 👇👇',
    gifSrc: [PostDetailImg],
    alt: 'post detail img',
  },
  {
    title: '게시글 조회 👇👇',
    gifSrc: [SearchPostImg],
    alt: 'search post img',
  },
];
