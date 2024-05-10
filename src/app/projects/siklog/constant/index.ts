import HomeImg from '../../../../../public/images/projects/siklog/siklog_home.png';
import PostDetailImg from '../../../../../public/images/projects/siklog/siklog_post_detail.png';
import SearchPostImg from '../../../../../public/images/projects/siklog/siklog_search_post.png';

export const projectName = 'Siklog';
export const introducts = [
  {
    title:
      '검색엔진이 블로그의 내용 효율적으로 이해하게 해야 한다. 미리보기를 통해 사용자의 클릭을 유도해야 한다.',
    details: [
      '검색엔진에 노출되어야 하는 정보는 SSG 방식을 이용하여 검색엔진이 HTML 문서를 읽을 수 있도록 도움을 주었습니다.',
      '페이지에 따른 Title, Description, Keyword 등 메타태그를 작성하여 검색엔진의 블로그 내용 파악에 도움을 주었습니다.',
      'Title, Description, Open Graph 등 메타태그를 통해 사용자가 블로그를 미리 볼 수 있도록 구현하였습니다.',
    ],
  },
  {
    title: '검색엔진은 버튼을 클릭하지 않고 a 태그를 통해 페이지를 옮겨 다닌다.',
    details: [
      'Next.js에서 제공하는 Link 태그를 이용해 검색엔진의 페이지 이동에 도움을 주었습니다.',
    ],
  },
  {
    title: '검색엔진이 블로그를 효과적으로 크롤링하고 색인하기 위해서는 Sitemap이 필요하다.',
    details: [
      'Route 경로에 따른 Sitemap 즉, 정적 Sitemap을 작성하였습니다.',
      '동적 Sitemap 구현, 검색엔진이 쉽게 게시글을 색인하기 위해 최근 5개의 게시글 상세페이지 경로를 API로 조회한 후 게시글 경로를 Sitemap에 추가하여 게시글 상세페이지로 접근할 수 있도록 도움을 주었습니다. 상세페이지에서 제공하는 이전, 다음 글의 링크를 통해 검색엔진이 다른 게시글도 색인할 수 있도록 도움을 주었습니다.',
    ],
  },
  {
    title:
      '블로그 상세 글을 검색엔진이 보고 있을 때 현재 글 및 다른 글로 이동할 수 있는 정보를 주어야 한다.',
    details: [
      '검색엔진이 블로그 상세 글을 색인했다면 해당 글을 사용자에게 노출시키기 위해 블로그 게시글 작성 시 Title, Description, Keyword 정보를 입력하였고, 블로그 상세 글 페이지에 메타태그를 추가해주었습니다.',
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
  'Typescript',
  'ReactQuery',
  'Mongodb',
  'Tailwindcss',
  'Git',
  'Github',
];
export const workDetails = [
  {
    content: {
      type: 'text',
      href: '',
      text: 'Next.js에서 제공하는 API Route를 이용해 게시글 관련 API구현',
    },
    contentDetails: [],
  },
  {
    content: {
      type: 'text',
      href: '',
      text: '블로그 메인 및 게시글 상세 페이지 SSR 방식에서 SSG 로 변경하여 렌더링 속도 개선',
    },
    contentDetails: [
      '메인페이지 SSR(3180ms) → SSG(340ms) 약 90% 속도 향상',
      '게시글 상세페이지 SSR(3680ms) → SSG(800ms) 약 80% 속도 향상',
    ],
  },
  {
    content: {
      type: 'link',
      href: 'https://sikk.tistory.com/281',
      text: 'Suspense, ErrorBoundary를 통한 API 로딩 처리 및 에러핸들링',
    },
    contentDetails: [
      '데이터 패칭에 있어 Loading, Error 등의 정보를 가지고 명령형 코드를 작성하여 예외 상황을 컨트롤할 수 있지만 선언형 코드를 작성하는 것이 더 가독성이 좋으며 예측이 쉽다고 생각하여 Suspense와 ErrorBoundary를 사용',
    ],
  },
  {
    content: {
      type: 'link',
      href: 'https://sikk.tistory.com/282',
      text: 'React Query의 useSuspenseInfiniteQuery와 IntersectionObserver를 이용한 무한스크롤 기능 구현',
    },
    contentDetails: [],
  },
  {
    content: {
      type: 'text',
      href: '',
      text: 'AWS Ec2, Pm2, Nginx를 이용한 호스팅과Code Pipeline, Code Deploy를 이용한 배포 자동화를 통하여 운영중이었으나 비용 문제로 인해 호스팅 서비스를 Vercel로 변경',
    },
    contentDetails: [],
  },
  {
    content: {
      type: 'text',
      href: '',
      text: '검색엔진 최적화를 위한 작업 수행',
    },
    contentDetails: [
      'Robots.txt 파일 작성',
      '메인, 게시글 상세페이지 Route 경로에 따른 정적 Sitemap 작성',
      '동적 Sitemap 작성, 검색엔진이 쉽게 게시글을 색인하기 위해 최근 5개의 게시글 상세페이지 경로를 API로 조회한 후 게시글 경로를 Sitemap에 추가하여 게시글 상세페이지로 접근할 수 있도록 도움. 상세페이지에서 제공하는 이전, 다음 글의 링크를 통해 검색엔진이 다른 게시글도 색인할 수 있도록 도움',
      '메인, 게시글 상세페이지 Meta 태그 작성',
      'Semantic 태그 작성',
    ],
  },
  {
    content: {
      type: 'text',
      href: '',
      text: '반응형 UI 구현',
    },
    contentDetails: [],
  },
  {
    content: {
      type: 'text',
      href: '',
      text: 'Markdown Editor를 이용한 게시글 작성',
    },
    contentDetails: [],
  },
  {
    content: {
      type: 'text',
      href: '',
      text: 'Markdown Viewer를 통한 게시글 상세 조회',
    },
    contentDetails: [],
  },
];

export const troubleShootings = [
  {
    title: 'SSR적용 이슈',
    contents: [
      {
        subTitle: '[문제 배경]',
        content:
          'SSR과 SSG의 차이 확인을 위해 메인 페이지에 SSR 방식을 적용하려 했으나 SSR 방식이 아닌 SSG 방식으로 렌더링이 되는 문제가 발생하였습니다.',
      },
      {
        subTitle: '[원인 파악]',
        content:
          "Next.js 공식문서에서는 SSR 방식을 이용하려면 API 요청 옵션에 cache: 'no-store' 옵션을 넣으면 된다고 나와 있었으나 Get메서드에 요청 파라미터가 없어 SSG 방식처럼 동작하는 문제가 발생한 것이었습니다.",
      },
      {
        subTitle: '[해결 방법]',
        content:
          "SSR을 적용할 페이지와 API Route 파일 상단에 export const dynamic = 'force-dynamic'; 코드를 추가하여 해결할 수 있었습니다.",
      },
    ],
  },
  {
    title: '스크롤 이벤트와 Throttle을 이용한 무한스크롤 기능 개선',
    contents: [
      {
        subTitle: '[문제 배경]',
        content:
          '게시글 검색 페이지에 스크롤 이벤트와 Throttle 개념을 적용해 무한스크롤 기능을 구현하였습니다. Throttle을 적용하여 잦은 이벤트 콜백 함수가 호출되는 것은 개선하였으나, 개선된 호출 횟수에서 더 줄일 수 없는지에 대해 고민하였습니다.',
      },
      {
        subTitle: '[해결 방법]',
        content:
          'Intersection Observer API를 활용하여 문제를 해결하였습니다. Intersection Observer의 경우 스크롤 이벤트와는 다르게 잦은 이벤트가 발생하지 않고 지정한 타겟이 뷰포트와 교차할 때만 이벤트가 발생하며, scrollTop와 getBoundingClientRect 등의 값도 참조하지 않아 Reflow 발생할 가능성이 없다는 이점이 있어 Intersection Observer를 사용하였습니다.',
      },
    ],
  },
  {
    title: '게시글 상세 조회 페이지에서 뒤로가기시 이슈',
    contents: [
      {
        subTitle: '[문제 배경]',
        content:
          '무한 스크롤을 적용한 게시글 검색 페이지에서 게시글 상세 조회 페이지로 이동 후 뒤로가기 버튼을 눌렀을 경우 기존에 보고 있던 게시글 리스트 데이터와 스크롤이 유지되지 않았습니다.',
      },
      {
        subTitle: '[원인 파악]',
        content:
          '게시글 검색 페이지에서 게시글 상세페이지로 접근 후 뒤로가기를 할 때 게시글 검색 페이지에서는 다시 처음부터 게시글을 조회하여 발생한 문제였습니다.',
      },
      {
        subTitle: '[해결 방법]',
        content:
          'Tanstack-Qurey(React-Query)의 useInfiniteQuery를 이용하여 무한스크롤한 데이터를 캐싱 처리하여 문제를 해결하였습니다.',
      },
    ],
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
