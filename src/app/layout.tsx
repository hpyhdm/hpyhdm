import type { ReactNode } from 'react';
import { Sniglet } from 'next/font/google';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import localFont from 'next/font/local';
import '../styles/globals.scss';

// Browser tab title for every page / 모든 페이지의 브라우저 탭 제목
export const metadata: Metadata = {
  title: 'hpyhdm',
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
