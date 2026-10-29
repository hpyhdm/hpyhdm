import type { Lang } from '@/lib/i18n';
import type { Project } from '@/data/resume/types';
import ProjectRow from './ProjectRow';
import styles from './ProjectGroup.module.scss';

type Props = Readonly<{
  projects: readonly Project[];
  lang: Lang;
  label?: string; // group heading, already translated / 그룹 소제목 (번역된 글자)
}>;

// One group of projects (builds or operations) with an optional heading
// 프로젝트 그룹 하나 (구축 또는 운영), 소제목은 선택
export default function ProjectGroup({ projects, lang, label }: Props) {
  return (
    <div className={styles.group}>
      {label && <p className={styles.label}>
        <span>{label}</span>
      </p>}
      <ul className={styles.projects} role="list">
        {projects.map((project) => (
          <ProjectRow key={project.id} project={project} lang={lang} />
        ))}
      </ul>
    </div>
  );
}
