import { pick } from '@/lib/i18n';
import type { Lang } from '@/lib/i18n';
import { formatPeriod } from '@/data/resume/format';
import type { Company } from '@/data/resume/types';
import ProjectGroup from './ProjectGroup';
import { BUILDS_LABEL, byKind, OPERATIONS_LABEL } from './career.utils';
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
  const hasOperations = operations.length > 0;

  return (
    <section className={styles.company}>
      <header className={styles.info}>
        <div className={styles.sticky}>
          <h2>{t(company.name)}</h2>
          <span className={styles.role} lang="en">{company.role}</span>
          <span className={styles.period}>{formatPeriod(lang)(company.period)}</span>
        </div>
      </header>
      <div className={styles.body}>
        {company.brief && (
          <p className={styles.brief}>{t(company.brief)}</p>
        )}
        <ProjectGroup
          projects={builds}
          lang={lang}
          label={hasOperations ? t(BUILDS_LABEL) : undefined}
        />
        {hasOperations && (
          <ProjectGroup projects={operations} lang={lang} label={t(OPERATIONS_LABEL)}/>
        )}
      </div>
    </section>
  );
}
