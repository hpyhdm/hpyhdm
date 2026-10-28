import type { ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';
import { Google_Sans } from 'next/font/google';
import localFont from 'next/font/local';
// import { Sniglet } from 'next/font/google';
import '../styles/globals.scss';
import styles from './layout.module.scss';
import Footer from '@/components/Footer/Footer';

// Browser tab title for every page / 모든 페이지의 브라우저 탭 제목
export const metadata: Metadata = {
  title: 'hpyhdm.me',
};

// Browser UI color (mobile address/status bar), same as $bg-muted in _variables.scss
// 브라우저 UI 색 (모바일 주소창/상태바), _variables.scss의 $bg-muted와 같은 값
export const viewport: Viewport = {
  themeColor: '#fafafa',
};

// Not used yet: to enable, uncomment and add sniglet.variable to <html className>
// 아직 미사용: 쓸 때 주석을 풀고 <html className>에 sniglet.variable 추가
// const sniglet = Sniglet({
//   weight: ['400', '800'],
//   subsets: ['latin'],
//   variable: '--font-sniglet',
// });

const suit = localFont({
  src: './fonts/SUIT-Variable.woff2',
  weight: '100 900',
  variable: '--font-suit',
});

// Body Latin font (variable 400–700, OFL), used with SUIT in --font-body
// 본문 영문 폰트 (가변 400~700, OFL), --font-body에서 SUIT와 함께 사용
const googleSans = Google_Sans({
  subsets: ['latin'],
  variable: '--font-google-sans',
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${suit.variable} ${googleSans.variable}`}>
    <body>
      <div className={styles.wrap}>
        {children}
        <Footer/>
      </div>
    </body>
    </html>
  );
}
