import type { ReactNode } from 'react';
import localFont from 'next/font/local';
import '../styles/globals.scss';

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
