export const projectName = 'Waste Community';
export const introduction =
  'Waste Community는 폐기물에 관련된 정보를 공유할 수 있는 커뮤니티 플랫폼입니다. 누구나 유익한 게시글을 보거나 작성할 수 있으며, 쪽지 기능을 이용하여 사용자 간 개인적으로 정보를 공유할 수도 있습니다.';
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
      text: '아래의 장점을 생각하여 Typescript 도입',
    },
    contentDetails: [
      '미리 타입을 지정하여 개발자의 실수를 줄일수 있음',
      '코드 가독성과 유지보수성 향상',
      '객체 안의 필드값에 대한 IDE의 리스트 업 기능',
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
      text: '반응형 UI 구현',
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
      text: '게시글 관련 기능 구현',
    },
    contentDetails: [
      '게시글 조회•삭제, 게시글 상세내용 조회, 좋아요, 스크랩, 댓글 작성, 대댓글 작성, 신고하기, 쪽지 보내기 등등',
    ],
  },
  {
    content: {
      type: 'text',
      href: '',
      text: '기타 기능 구현',
    },
    contentDetails: [
      '알림 내역 관리, 1:1 문의, 쪽지 조회•발송•삭제, 유저 차단, 신고하기, 스크랩한 글•작성한 글•작성한 댓글 관리 등등',
    ],
  },
  {
    content: {
      type: 'text',
      href: '',
      text: '사내 Waste Community 서비스 관리를 위한 관리자 페이지 개발',
    },
    contentDetails: [],
  },
];

export const troubleShootings = [
  {
    title: '스크롤 이벤트를 이용한 게시글 무한 스크롤 기능 구현 이슈',
    contents: [
      {
        subTitle: '[문제 배경]',
        content:
          '게시글 조회를 위해 스크롤 이벤트를 통하여 무한스크롤 기능을 구현하였는데 무수히 많은 스크롤 이벤트가 실행되었으며, 스크롤 이동 시 화면이 부드럽게 이동되지 않고 조금씩 끊기며 스크롤이 내려가는 문제가 발생하였습니다.',
      },
      {
        subTitle: '[원인 파악]',
        content:
          '스크롤 이벤트에 등록한 콜백 함수에서 scrollTop의 값을 참조하는데 이 경우 Reflow와 Repaint가 발생하여 렌더링 성능 이슈가 생길 수 있다는걸 알게 되었습니다.',
      },
      {
        subTitle: '[해결 방법]',
        content:
          '스크롤 이벤트에 Throttle 개념을 적용하여 0.3초마다 이벤트 콜백 함수를 호출해 잦은 렌더링을 방지하였습니다.',
      },
    ],
  },
];
