export const links = [
  {
    url: 'https://wegnal.com',
    label: 'wegnal web link',
    text: '👉 웹 보러가기 👈',
  },
  {
    url: 'https://play.google.com/store/apps/details?id=aos.gonsoftware.wegnal',
    label: 'wegnal googleplay link',
    text: '👉 구글플레이 앱 보러가기 👈',
  },
  {
    url: 'https://apps.apple.com/us/app/웨그널/id6446239095',
    label: 'wegnal appstore link',
    text: '👉 앱스토어 앱 보러가기 👈',
  },
];
export const skills = ['Vue.js', 'Typescript', 'Scss', 'Vuex', 'Vuetify', 'Git', 'Github'];
export const roles = ['프론트엔드 개발'];
export const workDetails = [
  {
    content: 'Vue.js Option API에서 Composition API로 Refactoring',
    contentDetails: [
      '기존에는 Option API를 활용하여 작업하였으나 소스 코드가 많아질수록 연관되어있는 코드가 나누어져있어 로직을 추적하기 어려웠습니다. 이를 해결하기 위해 Composition API를 도입하였습니다.',
    ],
  },
  {
    content: '초기 로딩속도 향상을 위한 최적화 작업 수행',
    contentDetails: [
      'Bundle 최적화(1.51MB → 1.44MB)',
      'Font 최적화(868KB ⇒ 169KB)',
      'Code Splitting',
    ],
  },
  {
    content: 'WebView로 사용될 모바일 웹 UI 및 기능 구현',
    contentDetails: [],
  },
  {
    content: 'Native App과의 통신 기능 구현',
    contentDetails: [
      '푸시알림에 따른 처리',
      '카메라 권한 확인',
      'Ios App의 WebView의 경우 App 종료시 Local Storage가 초기화 되는 이슈가 발생하였으며, 이를 해결하기위해 Native App 저장소 이용',
    ],
  },
  {
    content: '사용자별 인가 처리를 위해 Axios Interceptor를 이용한 Jwt관리',
    contentDetails: [],
  },
  {
    content: '회원 관련 기능 구현',
    contentDetails: ['로그인, 회원가입, 아이디 찾기, 비밀번호 찾기, 마이페이지 정보 관리'],
  },
  {
    content: '폐기물 배출자 관련 기능 구현',
    contentDetails: [
      '폐기물 배출 신청•취소•거래완료, 배출 신청 정보 조회, 배출 신청을 수락한 수거업체 조회 등등',
    ],
  },
  {
    content: '폐기물 수거업체 관련 기능 구현',
    contentDetails: ['배출 신청 수락•거절, 배출 신청 내역 조회 등등'],
  },
  {
    content: '기타 기능 구현',
    contentDetails: ['푸쉬 알림에 따른 페이지 이동, 거래내역 히스토리, 알림 내역, 전화 연결'],
  },
  {
    content: '사내 Wegnal 서비스 관리를 위한 관리자 페이지 개발',
    contentDetails: [
      '회원 정보 조회•수정•삭제, 배출 신청된 내역 조회•수정•삭제, 회원 및 배출신청 내역 통계 차트 구현 등등',
    ],
  },
];
