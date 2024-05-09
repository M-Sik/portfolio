export const projectName = 'Withwe 회사 홈페이지';
export const introduction = '회사를 대표하는 홈페이지이며 Next.js를 활용하여 개발하였습니다.';
export const links = [
  {
    url: 'https://withwe.kr',
    label: 'wegnal landing web link',
    text: '👉 웹 보러가기 👈',
  },
];
export const skills = ['Next.js 13', 'Typescript', 'Scss', 'Tailwindcss', 'Git', 'Github'];
export const roles = ['프론트엔드 개발'];
export const workDetails = [
  {
    content: { type: 'text', href: '', text: '검색엔진 최적화를 위한 작업 수행' },
    contentDetails: [
      'Robots.txt 파일 작성',
      '페이지별 Route 경로에 따른 정적 Sitemap 작성',
      '페이지별 Meta 태그 작성',
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
      text: 'AWS S3와 Cloudfront를 이용한 호스팅',
    },
    contentDetails: [],
  },
  {
    content: {
      type: 'text',
      href: '',
      text: 'Gsap Lib를 이용한 애니메이션 구현',
    },
    contentDetails: [],
  },
];

export const troubleShootings = [
  {
    title: '홈페이지 AWS 배포 비용 개선',
    contents: [
      {
        subTitle: '[문제 배경]',
        content:
          'Next.js의 서버 기능을 사용하지 않는 적정인 홈페이지를 AWS Ec2, Pm2, Nginx를 이용하여 배포하여 매달 21$의 Ec2 비용이 청구되었습니다.',
      },
      {
        subTitle: '[원인 파악]',
        content:
          '처음에는 Ec2의 t2.micro 인스턴스의 유형을 이용하여 배포를 진행하였으나, Next.js 프로젝트를 Ec2에서 빌드하는 중 인스턴스의 메모리 용량이 작아 빌드가 되지않는 문제가 발생하여 인스턴스 유형을 t2.small로 업그레이드하였습니다. t2 유형의 경우 온디맨드 요금제가 적용되어 트래픽이 발생하지 않아도 일정량의 요금이 청구되며, t2.small 유형은 t2.micro 유형에 비해 온디맨드 요금이 100%의 요금이 비싸 많은 비용이 청구되는 문제가 발생하였습니다. ',
      },
      {
        subTitle: '[해결 방법]',
        content:
          '서버 기능이 들어가지 않은 정적인 홈페이지이기 때문에 Next.js에서 제공하는 Static Export 기능을 이용하여 빌드된 결과물을 S3와 Cloudfront를 이용하여 배포하였습니다. 배포에 있어서 Git 저장소와 연결하여 자동으로 빌드 및 배포와 같은 편리한 기능을 제공하는 Amplify를 이용한 배포도 고려했으나 Cloudfront 대비 트래픽 비용이 30% 비싸다는것 뿐만 아니라 Cloudfront의 경우 트래픽 비용만 발생하는것과는 다르게 Amplify의 경우 빌드 + 트래픽 비용이 청구된다는 자료를 찾게 되어 S3와 Cloudfront를 이용하여 배포를 진행하였습니다.',
      },
    ],
  },
];
