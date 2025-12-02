import LayerBasedImg from '../../../../../public/images/projects/weddingbook/layer-based.png';
import FeatureBasedImg from '../../../../../public/images/projects/weddingbook/feature-based.png';

export const projectName = 'WeddingBook';
export const introduction = '결혼준비를 쉽게 할 수 있도록 도움을 주기 위한 서비스입니다.';
export const skills = [
  'Next.js',
  'React.js',
  'Typescript',
  'Redux',
  'Zustand',
  'ReactQuery',
  'Scss',
  'Git',
  'GitFlow',
];
export const roles = ['프론트엔드 개발'];
export const workDetails = [
  {
    content: { type: 'text', href: '', text: '웹뷰(React.js, Redux) 내 신규 기능 개발 및 운영' },
    contentDetails: [],
  },
  {
    content: {
      type: 'text',
      href: '',
      text: '네이티브 앱으로 개발된 페이지 및 기능을 웹뷰 기반으로 이전',
    },
    contentDetails: [],
  },
  {
    content: {
      type: 'text',
      href: '',
      text: '검색 노출 및 레거시 프로젝트 개선 및 통합을 위한 웨딩북 리뉴얼 프로젝트(Next.js, Zustand) 신규 개발 참여 및 운영',
    },
    contentDetails: [
      '웨딩북 웹뷰의 경우 대부분의 기능이 React.js 기반으로 구현이 되어있으나 일부 기능은 다른 스팩(Vue.js, Next.js 등)으로 만들어진 레거시 프로젝트에 있어 기술 스택 통일화 및 프로젝트 관리를 편하게 하기위해 분산된 프로젝트를 통합시키는 작업을 진행중입니다.',
    ],
  },
  {
    content: { type: 'text', href: '', text: '웨딩북 리뉴얼 프로젝트 인증 인가 로직 개선' },
    contentDetails: [],
  },
  {
    content: {
      type: 'text',
      href: '',
      text: '프로젝트 내부 아이콘 파일의 관리 및 중복 생성을 방지를 위한 추가된 아이콘을 확인할 수 있는 페이지 추가',
    },
    contentDetails: [],
  },
  {
    content: {
      type: 'text',
      href: '',
      text: '프로젝트 디렉토리 구조 개선',
    },
    contentDetails: ['Layer-based 구조에서 Feature-based 구조로 변경'],
  },
];

export const troubleShootings = [
  {
    title: '웨딩북 리뉴얼 프로젝트 인증 인가 로직 개선',
    contents: [
      {
        subTitle: '[문제 배경]',
        content:
          '기존 로직은 로그인 시 서버에서 클라이언트로 Jwt Access, Refresh 토큰을 쿠키에 저장해주는 방식이 아닌, API 응답 값에 토큰을 전달하여 클라이언트에서 로컬 스토리지에 토큰들을 저장하는 구조 즉, XSS에 취약한 환경이었습니다.\n서버 개발자분들에게 인증 인가 관련된 로직 수정을 요청 하였지만, 일정상의 이슈로 어려울 것 같다는 답변을 받아. 클라이언트에서 처리 가능한 방법을 찾아야 했습니다.',
      },
      {
        subTitle: '[해결 방법]',
        content:
          '로그인 시 서버에서 API 응답 값으로 받아오는 토큰을 Next.js 내부 서버로 전달하여 Access 토큰의 경우 만료 시간, Same Site(CSRF 방어) 옵션을 적용하여 쿠키로 저장. Refresh 토큰의 경우 쿠키에 만료 시간, Http Only(Js에서의 접근을 방지하여 XSS 방어), Same Site(CSRF 방어) 옵션을 적용하여 안전하게 관리되도록 처리하였습니다. 그리고 운영 환경에서는 쿠키에 Secure 옵션도 추가로 적용하여 주었습니다.',
      },
    ],
  },
  {
    title: '프로젝트 내부에 사용되는 아이콘 파일의 관리',
    contents: [
      {
        subTitle: '[문제 배경]',
        content:
          '아이콘을 공용 컴포넌트로 팀원들이 같이 사용할 수 있게 Svg 파일로 관리하였으나, 어느 순간 같은 디자인을 가진 아이콘이 서로 다른 파일명을 가지며 중복으로 생성된 파일이 많아지는 문제가 발생하였습니다.',
      },
      {
        subTitle: '[원인 파악]',
        content:
          'Svg 파일 특성상 프로젝트 내부에서 Import 하여 확인하는 것이 아니라면 어떤 디자인을 가진 아이콘인지 확인이 어렵기 때문에, 아이콘의 경우 디자이너분들이 만들어주신 피그마 디자인 시스템 파일에 명시된 아이콘 이름을 기준으로 Svg 파일로 관리를 해왔습니다. 하지만 몇몇 아이콘의 경우 디자인 시스템 파일에 이름이 없거나 다른 디자인의 아이콘의 이름과 같은 등의 문제가 있어서 저를 포함한 팀원들이 각자 네이밍하여 아이콘 파일을 추가한 것이었습니다.',
      },
      {
        subTitle: '[해결 방법]',
        content:
          '프로젝트에서 사용 중인 아이콘이 어떤 것들이 있는지 확인하고, 아이콘들의 디자인과 파일명을 확인할 수 있는 페이지와 아이콘 파일명을 옵션으로 넣어 사용할 수 있는 컴포넌트를 만들어 공유하여 아이콘 파일이 중복 생성되는 문제를 해결하였습니다.',
      },
    ],
  },
  {
    title: '프로젝트 디렉토리 구조 개선',
    contents: [
      {
        subTitle: '[문제 배경]',
        content:
          '기존 Layer-based 구조를 기반으로 서비스가 점점 고도화되면서 기능과 이에 따른 파일이 많아지며 폴더가 비대해졌습니다. 디렉토리 구조상 기능 개발 및 수정하기 위해 여러 폴더를 이동하며 작업해야하고, 여러 폴더 안에는 서로 다른 도메인의 코드가 섞여 가독성 및 관리가 어려워졌습니다.',
        image: LayerBasedImg,
      },
      {
        subTitle: '[해결 방법]',
        content:
          '서비스 초기에는 도메인의 경계를 명확히 하는 게 어려워 Feature-based 구조를 적용하기 힘들었을 수 있으나, 서비스가 일정 수준 고도화되었기 때문에 도메인이 명확히 구분되어 있어 Feature-based 구조를 적용하여 도메인에 관련된 코드가 한곳에 모여 있어 기능 개발과 유지보수를 효율적으로 할 수 있게 되었습니다.',
        image: FeatureBasedImg,
      },
    ],
  },
];
