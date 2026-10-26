import type { ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';
import { Sniglet } from 'next/font/google';
import localFont from 'next/font/local';
import '../styles/globals.scss';

// Browser tab title for every page / 모든 페이지의 브라우저 탭 제목
export const metadata: Metadata = {
  title: 'hpyhdm.me',
};

// Browser UI color (mobile address/status bar), same as $bg-muted in _variables.scss
// 브라우저 UI 색 (모바일 주소창/상태바), _variables.scss의 $bg-muted와 같은 값
export const viewport: Viewport = {
  themeColor: '#fafafa',
};

const sniglet = Sniglet({
  weight: ['400', '800'],
  subsets: ['latin'],
  variable: '--font-sniglet',
});

const suit = localFont({
  src: './fonts/SUIT-Variable.woff2',
  weight: '100 900',
  variable: '--font-suit',
});

export default function RootLayout({children}: { children: ReactNode }) {
  return (
    <html lang="en" className={suit.variable}>
    <body>{children}</body>
    </html>
  );
}
