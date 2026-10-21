import Link from 'next/link';
import styles from './GridLink.module.scss';

type Props = Readonly<{
  href: string;
  label: string;
}>;

// Grid cell that moves to another page (Server Component, no JS needed)
// 다른 페이지로 이동하는 그리드 셀 (서버 컴포넌트, JS 불필요)
export default function GridLink({href, label}: Props) {
  return (
    <Link className={styles.link} href={href}>
      {label}
    </Link>
  );
}
