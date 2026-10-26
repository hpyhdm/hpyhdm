import {pick} from '@/lib/i18n';
import type {Lang} from '@/lib/i18n';
import {formatPeriods, formatTeamSize} from '@/data/resume/format';
import type {Project} from '@/data/resume/types';
import styles from './ProjectRow.module.scss';

type Props = Readonly<{
  project: Project;
  lang: Lang;
}>;

// One project row: meta column on the left, bullets on the right
// 프로젝트 한 줄: 왼쪽 메타 칸, 오른쪽 bullet
export default function ProjectRow({project, lang}: Props) {
  const t = pick(lang);

  return (
    <li className={styles.row}>
      <div className={styles.meta}>
        {/* TODO: name (link if url), periods, Maintaining badge / 이름(url 있으면 링크), 기간, Maintaining 배지 */}
        {/* TODO: focus tag, team size / 각도 태그, 팀 규모 */}
      </div>
      <ul className={styles.bullets} role="list">
        {/* TODO: bullets / bullet 목록 */}
      </ul>
    </li>
  );
}
