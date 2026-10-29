import { pick } from '@/lib/i18n';
import type { Lang } from '@/lib/i18n';
import type { Profile as ProfileData } from '@/data/resume/types';
import styles from './Profile.module.scss';

type Props = Readonly<{
  profile: ProfileData;
  lang: Lang;
}>;

// External links (http/https) open in a new tab; mailto: stays as is
// 외부 링크(http/https)는 새 탭으로, mailto:는 그대로
const isExternal = (href: string): boolean => href.startsWith('http');

// Profile row: ID, position, motto and contact links
// 프로필 행: 이름, 포지션, 모토, 연락처 링크
export default function Profile({ profile, lang }: Props) {
  const t = pick(lang);

  return (
    <dl className={styles.profile}>
      <div>
        <dt>ID</dt>
        <dd>{t(profile.name)}</dd>
      </div>
      <div>
        <dt>Position</dt>
        <dd>{t(profile.position)}</dd>
      </div>
      <div>
        <dt>Motto</dt>
        <dd>{t(profile.motto)}</dd>
      </div>
      <div>
        <dt>Contact</dt>
        <dd>
          <ul role="list">
            {profile.contacts.map((contact) => (
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
  );
}
