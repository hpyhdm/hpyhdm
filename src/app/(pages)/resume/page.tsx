import Link from 'next/link';
import { parseLang } from '@/lib/i18n';
import { PROFILE } from '@/data/resume/profile';
import { EXPERIENCE } from '@/data/resume/experience';
import { sortExperience } from '@/data/resume/sort';
import HoverGrid from '@/components/shared/HoverGrid/HoverGrid';
import Profile from '@/components/resume/Profile/Profile';
import Skills from '@/components/resume/Skills/Skills';
import Experience from '@/components/resume/Experience/Experience';
import Education from '@/components/resume/Education/Education';
import styles from './page.module.scss';

// Whole body depends on ?lang, so there is no static shell to show first
// 본문 전체가 ?lang에 따라 달라져서 먼저 보여줄 정적 화면이 없음
export const instant = false;

// Sorted once at module level; the data never changes at runtime
// 데이터가 런타임에 바뀌지 않으니 모듈에서 한 번만 정렬
const SORTED_EXPERIENCE = sortExperience(EXPERIENCE);

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

      <Skills skills={PROFILE.skills} />

      <Experience experience={SORTED_EXPERIENCE} lang={lang} />

      <Education education={PROFILE.education} lang={lang} />
    </main>
  );
}
