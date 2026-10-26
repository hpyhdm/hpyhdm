import { pick } from '@/lib/i18n';
import type { Lang } from '@/lib/i18n';
import { BASELINE } from '@/data/resume/careers';
import { formatPeriod } from '@/data/resume/format';
import type { Company } from '@/data/resume/types';
import ProjectRow from './ProjectRow';
import { byKind, OPERATIONS_LABEL } from './career.utils';
import styles from './CompanyBlock.module.scss';

type Props = Readonly<{
  company: Company;
  lang: Lang;
}>;

// One company: sticky info on the left, brief and project groups on the right
// 회사 하나: 왼쪽 sticky 정보, 오른쪽 brief와 프로젝트 그룹
export default function CompanyBlock({ company, lang }: Props) {
  const t = pick(lang);
  const builds = byKind('build')(company.projects);
  const operations = byKind('operations')(company.projects);

  return (
    <section className={styles.company}>
      <header className={styles.info}>
        {/* TODO: name, team, period (sticky) / 회사명, 팀, 재직 기간 (sticky) */}
        <h2>{t(company.name)}</h2>
      </header>
      <div className={styles.body}>
        {/* TODO: brief, BASELINE / 한 줄 소개, 공통 기본기 */}
        <ul className={styles.projects} role="list">
          {builds.map((project) => (
            <ProjectRow key={project.id} project={project} lang={lang}/>
          ))}
        </ul>
        {/* TODO: render only when operations.length > 0 / operations가 있을 때만 */}
        {/* OPERATIONS_LABEL heading + ProjectRow list / 소제목 + ProjectRow 목록 */}
      </div>
    </section>
  );
}
