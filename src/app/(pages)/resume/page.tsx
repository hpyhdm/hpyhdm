import Link from 'next/link';
import { parseLang } from '@/lib/i18n';
import { PROFILE } from '@/data/resume/profile';
import { CAREERS } from '@/data/resume/careers';
import { sortCareers } from '@/data/resume/sort';
import HoverGrid from '@/components/shared/HoverGrid/HoverGrid';
import CompanyBlock from '@/components/resume/Career/CompanyBlock';
import Profile from '@/components/resume/Profile/Profile';
import styles from './page.module.scss';

// Whole body depends on ?lang, so there is no static shell to show first
// 본문 전체가 ?lang에 따라 달라져서 먼저 보여줄 정적 화면이 없음
export const instant = false;

// Sorted once at module level; the data never changes at runtime
// 데이터가 런타임에 바뀌지 않으니 모듈에서 한 번만 정렬
const SORTED_CAREERS = sortCareers(CAREERS);

export default async function Page(props: PageProps<'/resume'>) {
  const lang = parseLang((await props.searchParams).lang);

  return (
    <main className={styles.page} lang={lang}>
      {/* Language toggle: plain links, no client JS / 언어 토글: 그냥 링크라 클라이언트 JS 불필요 */}
      <div className={styles.lang}>
        {/* HoverGrid: 2 cells with the moving highlight / HoverGrid: 하이라이트가 움직이는 2칸 */}
        <HoverGrid className={styles.langGrid}>
          <Link href="/resume?lang=ko" data-hover aria-current={lang === 'ko' ? 'true' : undefined}>KR</Link>
          <Link href="/resume" data-hover aria-current={lang === 'en' ? 'true' : undefined}>ENG</Link>
        </HoverGrid>
      </div>

      <Profile profile={PROFILE} lang={lang} />

      <div className={styles.career}>
        {/* Career: one block per company, newest first / 경력: 회사별 블록, 최신순 */}
        {SORTED_CAREERS.map((company) => (
          <CompanyBlock key={company.id} company={company} lang={lang}/>
        ))}
      </div>
    </main>
  );
}
