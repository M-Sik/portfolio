import Footer from '@/components/footers/Footer';
import './globals.css';
import { Open_Sans } from 'next/font/google';

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: '김명식 포트폴리오',
    template: '김명식 포트폴리오 | %s',
  },
  description: '프론트엔드 개발자 김명식의 포트폴리오 입니다.',
  icons: {
    icon: 'favicon.ico',
  },
  //
  // '프론트엔드, 포트폴리오, front-end, frontend, front, portfolio, 개발자, 프론트엔드 개발자, 이력서'
  keywords: [
    '프론트엔드 김명식 포트폴리오',
    '프론트엔드 김명식',
    '개발자 김명식',
    '프론트엔드',
    '포트폴리오',
    '김명식',
    'front',
    '프론트',
    'portfolio',
    '개발자',
    '프론트 개발자',
    '프론트엔드 개발자',
    '이력서',
  ],
  robots: 'INDEX, FOLLOW',
  applicationName: '김명식 포트폴리오',
  openGraph: {
    type: 'website',
    // 배포후 url 넣어야함
    url: 'https://devsik-portfolio.vercel.app/',
    siteName: '김명식 포트폴리오',
    description: '프론트엔드 개발자 김명식의 포트폴리오 입니다.',
    images: [
      {
        url: 'https://user-images.githubusercontent.com/77043973/236410475-876c5054-8ef3-47cb-8c26-e731e323855e.jpeg',
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={openSans.className}>
      <head>
        {/*  나중에 구글, 네이버 검색엔진 메타태그 넣으면됨 */}
        {/* <meta name="description" content="faenfieln23213123"></meta> */}
      </head>
      <body className="w-full">
        {/* <header>header</header> */}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
