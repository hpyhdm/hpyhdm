import { pick } from '@/lib/i18n';
import type { Lang } from '@/lib/i18n';
import { formatPeriod } from '@/data/resume/format';
import type { Education as EducationEntry } from '@/data/resume/types';
import Section from '../Section/Section';
import styles from './Education.module.scss';

type Props = Readonly<{
  education: readonly EducationEntry[];
  lang: Lang;
}>;

// Education section: school and years on the left, degree on the right
// 학력 섹션: 왼쪽 학교와 기간, 오른쪽 학위
export default function Education({ education, lang }: Props) {
  const t = pick(lang);

  return (
    <Section id="education" title="Education">
      <ul className={styles.list} role="list">
        {education.map((entry) => (
          <li key={entry.school.en} className={styles.entry}>
            <div className={styles.school}>
              <h3>{t(entry.school)}</h3>
              <span className={styles.period}>{formatPeriod(lang)(entry.period)}</span>
            </div>
            <p className={styles.degree}>{t(entry.degree)}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
