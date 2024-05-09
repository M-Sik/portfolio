export const projectName = 'Wegnal';
export const introduction =
  'Wegnal은 폐기물 처리를 위해 폐기물 배출자와 수거∙처리업체를 매칭시켜주는 서비스입니다. 배출자가 폐기물 배출 신청 시 정해진 반경 내의 수거∙처리업체에게 수거를 요청합니다. WebView를 이용하여 Aos, Ios앱을 배포하였습니다.';
export const skills = ['Vue.js', 'Typescript', 'Scss', 'Vuex', 'Vuetify', 'Git', 'Github'];
export const roles = ['프론트엔드 개발'];
export const workDetails = [
  {
    content: { type: 'text', href: '', text: '서비스 프론트엔드 파트 신규 개발' },
    contentDetails: [],
  },
  {
    content: {
      type: 'link',
      href: 'https://sikk.tistory.com/117',
      text: '초기 로딩속도가 느려 좋지 않은 사용자 경험을 개선 하기 위해 최적화 작업 수행',
    },
    contentDetails: ['Bundle 최적화(1.51MB ⇒ 1.44MB)', 'Code Splitting'],
  },
  {
    content: {
      type: 'text',
      href: '',
      text: 'WebView로 사용될 모바일 웹 UI 및 기능 구현',
    },
    contentDetails: [],
  },
  {
    content: {
      type: 'text',
      href: '',
      text: 'WebView와 Native App의 통신 기능 구현',
    },
    contentDetails: [
      '사용자의 푸시알림 클릭에 따른 처리',
      'Ios App의 WKWebView의 경우 App 종료시 Web Local Storage가 초기화 되는 이슈가 발생하였으며, 이를 해결하기위해 Native App Storage 이용',
    ],
  },
  {
    content: {
      type: 'text',
      href: '',
      text: '사용자별 인증 및 인가 처리를 위해 Axios Interceptor를 이용한 Jwt관리',
    },
    contentDetails: [],
  },
  {
    content: {
      type: 'text',
      href: '',
      text: '회원 관련 기능 구현',
    },
    contentDetails: ['로그인, 회원가입, 아이디 찾기, 비밀번호 찾기, 마이페이지 정보 관리'],
  },
  {
    content: {
      type: 'text',
      href: '',
      text: '폐기물 배출자 관련 기능 구현',
    },
    contentDetails: [
      '폐기물 배출 신청•취소•거래완료, 배출 신청 정보 조회, 배출 신청을 수락한 수거업체 조회 등등',
    ],
  },
  {
    content: {
      type: 'text',
      href: '',
      text: '폐기물 수거업체 관련 기능 구현',
    },
    contentDetails: ['배출 신청 수락•거절, 배출 신청 내역 조회 등등'],
  },
  {
    content: {
      type: 'text',
      href: '',
      text: '기타 기능 구현',
    },
    contentDetails: ['푸쉬 알림에 따른 페이지 이동, 거래내역 히스토리, 알림 내역, 전화 연결'],
  },
  {
    content: {
      type: 'text',
      href: '',
      text: '사내 Wegnal 서비스 관리를 위한 관리자 페이지 개발',
    },
    contentDetails: [],
  },
];

export const troubleShootings = [
  {
    title: 'WebView로 구현된 App 실행시 초기 로딩속도 이슈',
    contents: [
      {
        subTitle: '[문제 배경]',
        content: 'App 실행 시 초기 렌더링이 되기까지 오래 걸리는 문제가 발생하였습니다.',
      },
      {
        subTitle: '[원인 파악]',
        content:
          'SPA는 초기에 전체 페이지를 다운받아 첫 페이지가 렌더링되는 속도가 느린데, Webpack으로 번들링 했던 프로젝트의 기능이 추가되며 번들 사이즈가 커져 해당 문제가 발생하였습니다.',
      },
      {
        subTitle: '[해결 방법]',
        content:
          '불필요한 라이브러리 제거하여 번들 사이즈를 감소시키고, 한 번에 모든 리소스를 가져오는 것이 아닌 Code Splitting을 이용해 Chunk 파일을 분리하여 초기 렌더링 속도가 느린 문제를 해결하였습니다.',
      },
    ],
  },
];
