// Text in both languages
// 한·영 텍스트
export type Localized = Readonly<{
  ko: string;
  en: string;
}>;

// Date range ('YYYY.MM')
// 날짜 기간('YYYY.MM')
export type Period = Readonly<{
  kind: 'range';
  from: string;
  to: string | null; // null = Present / 진행 중
}>;

// Whether a project was a build or ongoing operations
// 구축 프로젝트인지 유지운영인지
export type ProjectKind = 'build' | 'operations';

// One project inside a company
// 회사 안의 프로젝트 하나
export type Project = Readonly<{
  id: string;
  kind: ProjectKind;            // build or operations / 구축 또는 운영
  name: Localized;
  url?: Localized;             // site address per language / 언어별 사이트 주소
  periods: readonly Period[];   // build stints / 구축 기간 (여러 번 허용)
  maintaining?: boolean;        // still maintained after launch / 오픈 후 현재도 유지운영 중
  teamSize?: number;            // front-end headcount / 프론트엔드 인원 수
  bullets: readonly Localized[];
}>;

// One company (or freelance block)
// 회사 하나 (또는 프리랜서 묶음)
export type Company = Readonly<{
  id: string;
  name: Localized;
  role: string;                 // job title, always in English / 직함 (언어와 상관없이 영어)
  period: Period;               // employment period / 재직 기간
  brief?: Localized;            // one-line summary / 한 줄 소개
  projects: readonly Project[];
}>;

// One contact link (label is not translated)
// 연락처 링크 하나 (라벨은 번역하지 않음)
export type Contact = Readonly<{
  label: string;
  href: string;  // mailto: or https: / mailto: 또는 https:
}>;

// One group of skills; names are not translated
// 기술 묶음 하나 (기술 이름은 번역하지 않음)
export type SkillGroup = Readonly<{
  label: string;
  items: readonly string[];
}>;

// Profile row at the top of the resume
// 이력서 상단 프로필 행
export type Profile = Readonly<{
  name: Localized;
  position: Localized;
  motto: Localized;
  contacts: readonly Contact[];
  skills: readonly SkillGroup[];
}>;
