export const projectName = 'Wegnal Business';
export const introduction =
  'Wegnal Business는 선결제 시스템을 도입하여 폐기물 수거비용 지급 문제로 인한 혼란을 최소화하고, 거래의 안정성을 높여 폐기물 수거∙처리업체에게 도움을 주기 위한 서비스입니다.';
export const skills = [
  'React.js',
  'Typescript',
  'Zustand',
  'React Query',
  'Tailwindcss',
  'Git',
  'Github',
];
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
      text: '토스페이먼츠에서 제공하는 결제위젯과 브랜드페이를 연동하여 결제기능구현',
    },
    contentDetails: [
      '여러 PG사가 있지만 토스페이먼츠의 개발 문서 가장 보기 좋게 정리되어있어서 토스페이먼츠를 선택',
    ],
  },
  {
    content: {
      type: 'text',
      href: '',
      text: '사용자 경험에 도움을 줄 수 있는 Caching, Optimistic Update, Window Focus Refetching 등등의 기능을 편리하게 사용하기 위해 ReactQuery 도입',
    },
    contentDetails: [
      '라이브러리를 도입하는 데 있어 사용자가 많고 유지보수가 잘 되고 있는지, 구현할 프로젝트에 필요한 기능을 제공해주는지 등의 조건을 고려하고 있습니다. 제가 필요로 하는 기능을 제공하는 라이브러리는 ReactQuery, Swr 두 개가 있어 고민하였으나 ReactQuery의 다운로드 수가 110만이나 많았으며 참고할만한 자료의 양과 질이 더 높아 ReactQuery를 도입하게 되었습니다. ',
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
      text: '서비스 배출자 관련 기능 구현',
    },
    contentDetails: ['선 결제, 최종 결제, 거래내역, 결제내역 등등'],
  },
  {
    content: {
      type: 'text',
      href: '',
      text: '서비스 수거업체 관련 기능 구현',
    },
    contentDetails: ['거래처(배출업체) 관련, 선 결제요청, 최종 결제요청, 거래내역, 정산내역 등등'],
  },
  {
    content: {
      type: 'text',
      href: '',
      text: '서비스 관리를 위한 관리자 페이지 개발',
    },
    contentDetails: [],
  },
];

export const troubleShootings = [
  {
    title: '토스페이먼츠 브랜드페이 기능 연동 이슈',
    contents: [
      {
        subTitle: '[문제 배경]',
        content:
          '토스페이먼츠에서 제공하는 브랜드페이 결제 기능 연동 중에 사용자가 카드・계좌 정보를 등록하면 토스페이먼츠에 제가 등록한 RedirectUrl의 쿼리 파라미터로 Code, CustomerKey를 전달 받아 해당 값을 통해 Access Token을 발급받는 로직을 진행해야 했습니다. 하지만 사용자가 카드・계좌 정보를 등록하였으나 RedirectUrl로 등록한 클라이언트 페이지로 Redirect되지 않고 네트워크상에서 RedirectUrl이 계속 호출되는 문제가 발생하였습니다.',
      },
      {
        subTitle: '[원인 파악]',
        content:
          '사용자가 카드・계좌 정보를 등록하였을 때 토스페이먼츠에 등록한 RedirectUrl 경로의 클라이언트 페이지로 이동하지 않고, 네트워크상 RedirectUrl로 등록한 주소가 계속 호출되는 것으로 보아 RedirectUrl에서 쿼리 파라미터로 전달해 주는 데이터를 클라이언트에서 받는 것이 아닌 서버에서 받아야 한다고 판단하였습니다.',
      },
      {
        subTitle: '[해결 방법]',
        content:
          '토스페이먼츠에 등록한 RedirectUrl에 대해 클라이언트에서 처리하는 것이 아닌 서버에서 데이터를 받아 처리하도록 구현하여 해결하였습니다.',
      },
    ],
  },
];
