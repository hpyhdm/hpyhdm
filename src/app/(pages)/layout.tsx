import type { ReactNode } from 'react';
import Header from '@/components/shared/Header/Header';
import styles from './layout.module.scss';

type Props = Readonly<{
  children: ReactNode;
}>;

// Layout for every page except home: adds the shared Header above the page
// 홈을 제외한 모든 페이지의 레이아웃: 페이지 위에 공통 Header 추가
export default function PagesLayout({ children }: Props) {
  return (
    <div className={styles.container}>
      <Header/>
      {children}
    </div>
  );
}
