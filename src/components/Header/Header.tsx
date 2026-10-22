'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {getNavItems, getPageTitle} from './header.utils';
import styles from './Header.module.scss';
import HoverGrid from '@/components/HoverGrid/HoverGrid';

// Shared header: current page title on the left, links to the other pages on the right
// Client Component because usePathname only works on the client
// 공통 헤더: 왼쪽은 현재 페이지 제목, 오른쪽은 나머지 페이지 링크
// usePathname이 클라이언트에서만 동작하므로 클라이언트 컴포넌트
export default function Header() {
  const pathname = usePathname();

  const title = getPageTitle(pathname);
  const navItems = getNavItems(pathname);

  return (
    <header className={styles.header}>
      <HoverGrid className={styles.grid}>
        <h1 className={styles.title}>{title}</h1>
        <nav className={styles.nav} aria-label="Main">
          <ul>
            {navItems.map((item) => (
              <li key={item.href} data-hover>
                <Link className={styles.link} href={item.href}>
                  <span aria-hidden="true">/ </span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </HoverGrid>
    </header>
  );
}
