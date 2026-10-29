import type { SkillGroup } from '@/data/resume/types';
import Section from '../Section/Section';
import styles from './Skills.module.scss';

type Props = Readonly<{
  skills: readonly SkillGroup[];
}>;

// Skills section: title row, then grouped skills
// 기술 섹션: 제목 줄, 그 아래 분류별 기술
export default function Skills({ skills }: Props) {
  return (
    <Section id="skills" title="Skills" className={styles.skills}>
      <dl className={styles.groups} lang="en">
        {skills.map((group) => (
          <div key={group.label} className={styles.group}>
            <dt>{group.label}</dt>
            <dd>
              <ul className={styles.items} role="list">
                {group.items.map((item) => (
                  <li key={item} className={styles.item}>{item}</li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
