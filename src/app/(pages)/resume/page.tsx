import Link from 'next/link';
import {parseLang, pick} from '@/lib/i18n';
import {PROFILE} from '@/data/resume/profile';
import HoverGrid from '@/components/HoverGrid/HoverGrid';
import styles from './page.module.scss';

// External links (http/https) open in a new tab; mailto: stays as is
// 외부 링크(http/https)는 새 탭으로, mailto:는 그대로
const isExternal = (href: string): boolean => href.startsWith('http');

// Whole body depends on ?lang, so there is no static shell to show first
// 본문 전체가 ?lang에 따라 달라져서 먼저 보여줄 정적 화면이 없음
export const instant = false;

export default async function Page(props: PageProps<'/resume'>) {
  const lang = parseLang((await props.searchParams).lang);
  const t = pick(lang);

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

      <dl className={styles.profile}>
        <div>
          <dt>ID</dt>
          <dd>{t(PROFILE.name)}</dd>
        </div>
        <div>
          <dt>Position</dt>
          <dd>{t(PROFILE.position)}</dd>
        </div>
        <div>
          <dt>Motto</dt>
          <dd>{t(PROFILE.motto)}</dd>
        </div>
        <div>
          <dt>Contact</dt>
          <dd>
            <ul role="list">
              {PROFILE.contacts.map((contact) => (
                <li key={contact.href}>
                  <a
                    href={contact.href}
                    target={isExternal(contact.href) ? '_blank' : undefined}
                    rel={isExternal(contact.href) ? 'noopener noreferrer' : undefined}
                  >
                    {contact.label}
                  </a>
                </li>
              ))}
            </ul>
          </dd>
        </div>
      </dl>
    </main>
  );
}
