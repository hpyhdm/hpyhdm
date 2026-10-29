import type { Lang } from '@/lib/i18n';
import type { Company } from '@/data/resume/types';
import Section from '../Section/Section';
import CompanyBlock from './CompanyBlock';

type Props = Readonly<{
  experience: readonly Company[]; // already sorted, newest first / 이미 최신순으로 정렬된 목록
  lang: Lang;
}>;

// Experience section: title row, then one block per company
// 경력 섹션: 제목 줄, 그 아래 회사별 블록
export default function Experience({ experience, lang }: Props) {
  return (
    <Section id="experience" title="Experience">
      {experience.map((company) => (
        <CompanyBlock key={company.id} company={company} lang={lang} />
      ))}
    </Section>
  );
}
