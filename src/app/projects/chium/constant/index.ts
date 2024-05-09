export const projectName = 'Chium';
export const introduction =
  'Chium은 폐기물 배출자와 수거업체를 연결해 주는 폐기물 안전 처리 서비스입니다. 배출자와 수거업체 간의 입찰 과정을 통하여 폐기물을 처리하며, 배출자는 가장 저렴한 가격에 폐기물을 배출할 수 있습니다. WebView를 이용하여 Aos, Ios앱을 배포하였습니다.';
export const links = [
  {
    url: 'https://play.google.com/store/apps/details?id=aos.gonsoftware.chium',
    label: 'chium googleplay link',
    text: '👉 구글플레이 앱 보러가기 👈',
  },
  {
    url: 'https://apps.apple.com/kr/app/치움/id1623767946',
    label: 'chium appstore link',
    text: '👉 앱스토어 앱 보러가기 👈',
  },
];
export const skills = ['Vue.js', 'Javascript', 'Scss', 'Vuex', 'Vuetify', 'Git', 'Github'];
export const roles = ['프론트엔드 개발'];
export const workDetails = [
  {
    content: { type: 'text', href: '', text: '서비스 프론트엔드 파트 신규 개발' },
    contentDetails: [],
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
      text: '아임포트 모듈을 이용하여 다날 본인인증 서비스 연동',
    },
    contentDetails: [],
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
      '배출 신청 및 신청내역 조회, 방문 신청한 업체 관리, 폐기물 입찰 내역 관리, 폐기물 처리내역 관리, 수거 업체 검색 및 조회, 거래 히스토리 관리 등등',
    ],
  },
  {
    content: {
      type: 'text',
      href: '',
      text: '기타 기능 구현',
    },
    contentDetails: ['알림 내역 관리, 푸쉬 알림에 따른 페이지 이동, 1:1문의'],
  },
  {
    content: {
      type: 'text',
      href: '',
      text: '서비스 관리를 위한 관리자 페이지 개발',
    },
    contentDetails: [],
  },
  {
    content: {
      type: 'text',
      href: '',
      text: '운영 중에 발생하는 버그 및 고객 개선사항에 따른 수정',
    },
    contentDetails: [],
  },
];

export const troubleShootings = [
  {
    title: 'API 요청 및 응답 코드 중복 이슈',
    contents: [
      {
        subTitle: '[문제 배경]',
        content:
          'API 요청 시 헤더에 Jwt 토큰을 넣어 요청하며, 요청에 대한 응답을 받을 시 유효한 사용자인지 혹은 권한이 있는 사용자인지 판단하는 로직이 필요하였습니다. 비즈니스 로직에 필요한 API가 많아짐에 따라 요청과 응답에 대한 중복된 코드가 발생하는 문제가 발생하였습니다.',
      },
      {
        subTitle: '[해결 방법]',
        content:
          '기존에 Http 통신을 Axios 라이브러리를 이용하여 진행하였으며, Axios에서 제공하는 Interceptor 기능을 이용하여 요청과 응답에 대한 코드가 중복되는 문제를 해결하였습니다.',
      },
    ],
  },
  {
    title: 'Ios App 종료 시 Web LocalStorage 초기화 이슈',
    contents: [
      {
        subTitle: '[문제 배경]',
        content:
          'WebView로 구현된 Ios App을 종료 시 Web LocalStorage에 저장된 데이터가 사라지는 문제가 발생하였습니다.',
      },
      {
        subTitle: '[원인 파악]',
        content:
          'WKWebView의 특징에 대해 검색해본 결과 Ios App에서 WKWebView를 이용하여 WebView를 구현하면 App이 종료되면서 Web Storage가 제거된다는 자료를 찾았습니다.',
      },
      {
        subTitle: '[해결 방법]',
        content:
          'App을 종료해도 유지되어야 할 데이터를 Web LocalStorage에 저장하는 것이 아닌 Native Storage에 저장시킨 뒤 필요에 따라 Vue.js App에서 꺼내 사용하는 방법으로 문제를 해결하였습니다.',
      },
    ],
  },
];
