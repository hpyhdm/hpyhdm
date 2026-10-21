// Text in both languages
// 한·영 텍스트
export type Localized = Readonly<{
  ko: string;
  en: string;
}>;

// Date range ('YYYY.MM'), or ongoing maintenance with no dates
// 날짜 기간('YYYY.MM') 또는 기간 없는 유지운영
export type Period =
  | Readonly<{
  kind: 'range';
  from: string;
  to: string | null; // null = Present / 진행 중
}>
  | Readonly<{
  kind: 'maintenance';
}>;

// Employment type
// 고용 형태
export type Employment = 'full-time' | 'freelance';

// One project inside a company
// 회사 안의 프로젝트 하나
export type Project = Readonly<{
  id: string;
  name: Localized;
  url?: string;
  periods: readonly Period[];   // multiple stints allowed / 여러 기간 허용
  bullets: readonly Localized[];
}>;

// One company (or freelance block)
// 회사 하나 (또는 프리랜서 묶음)
export type Company = Readonly<{
  id: string;
  name: Localized;
  role: Localized;              // job title / 직함
  team?: Localized;             // team name / 팀명
  location: Localized;          // work location / 근무지
  employment: Employment;       // full-time or freelance / 정규직 또는 프리랜서
  period: Period;               // employment period / 재직 기간
  brief?: Localized;            // one-line summary / 한 줄 소개
  projects: readonly Project[];
}>;
