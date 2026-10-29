import type { ReactNode } from 'react';
import styles from './Section.module.scss';

type Props = Readonly<{
  id: string; // base for the heading id, e.g. 'skills' → 'skills-title' / 제목 id의 기준값
  title: string;
  className?: string; // extra styles for one section only / 특정 섹션에만 더할 스타일
  children: ReactNode;
}>;

// Shared shell for every resume section: full-width title row, then content
// 이력서 섹션 공통 껍데기: 전체 폭 제목 줄, 그 아래 내용
export default function Section({ id, title, className, children }: Props) {
  const titleId = `${id}-title`;
  const sectionClass = className ? `${styles.section} ${className}` : styles.section;

  return (
    <section className={sectionClass} aria-labelledby={titleId}>
      <h2 id={titleId} className={styles.title}>{title}</h2>
      {children}
    </section>
  );
}
