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
  keywords:
    '프론트엔드, 포트폴리오, front-end, frontend, front, portfolio, 개발자, 프론트엔드 개발자, 이력서',
  robots: 'INDEX, FOLLOW',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={openSans.className}>
      <body className="w-full h-screen bg-red-400">
        {/* <header>header</header> */}
        <main>{children}</main>
      </body>
    </html>
  );
}
