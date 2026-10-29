import styles from './Footer.module.scss';

// Shared footer for every page (Server Component)
// 모든 페이지 공통 푸터 (서버 컴포넌트)
export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Placeholder content: replace when the footer is designed / 임시 내용: 푸터 디자인 후 교체 */}
      <small>© 2026 hpyhdm</small>
    </footer>
  );
}
