import { pick } from '@/lib/i18n';
import type { Lang } from '@/lib/i18n';
import { formatPeriods, formatTeamSize } from '@/data/resume/format';
import type { Project } from '@/data/resume/types';
import { MAINTAINING_LABEL } from './career.utils';
import styles from './ProjectRow.module.scss';

type Props = Readonly<{
  project: Project;
  lang: Lang;
}>;

// One project row: meta column on the left, bullets on the right
// 프로젝트 한 줄: 왼쪽 메타 칸, 오른쪽 bullet
export default function ProjectRow({ project, lang }: Props) {
  const t = pick(lang);

  return (
    <li className={styles.row}>
      <div className={styles.meta}>
        {/* TODO: focus tag, team size / 각도 태그, 팀 규모 */}
        <h3>
          {project.url ? (
            <a href={t(project.url)} target="_blank" rel="noopener noreferrer">
              {t(project.name)}
            </a>
          ) : (
            t(project.name)
          )}
        </h3>
        {/* Build periods, with the badge beside the first line / 구축 기간, 배지는 첫 줄 옆에 */}
        <div className={styles.dates}>
          {formatPeriods(lang)(project.periods).map((period) => (
            <span key={period} className={styles.period}>{period}</span>
          ))}
          {project.maintaining && (
            <span className={styles.badge}>{t(MAINTAINING_LABEL)}</span>
          )}
        </div>
      </div>
      <ul className={styles.bullets} role="list">
        {/* TODO: bullets / bullet 목록 */}
        {project.bullets.map((bullet) => (
          <li key={bullet.en}>{t(bullet)}</li>
        ))}
      </ul>
    </li>
  );
}
