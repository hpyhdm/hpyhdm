import type { Company, Period, Project } from './types';

// Keys are 'YYYY.MM' strings, so plain string comparison gives date order
// 키는 'YYYY.MM' 문자열이라 문자열 비교만으로 날짜 순서가 맞음
const ONGOING_KEY = '9999.12'; // Present → always first / 진행 중 → 항상 맨 위
const NO_DATE_KEY = '0000.00'; // no dates → always last / 기간 없음 → 항상 맨 아래

// End and start keys used for ordering
// 정렬에 쓰는 종료·시작 키
type SortKey = Readonly<{
  end: string;
  start: string;
}>;

// Sort key of a single period
// 기간 하나의 정렬 키
const periodKey = (period: Period): SortKey => ({
  end: period.to ?? ONGOING_KEY,
  start: period.from,
});

// Descending comparison for 'YYYY.MM' strings (later first)
// 'YYYY.MM' 문자열 내림차순 비교 (늦은 쪽이 앞)
const compareDesc = (a: string, b: string): number =>
  a < b ? 1 : a > b ? -1 : 0;

// Later end first; if the ends are equal, later start first
// 종료일이 늦은 쪽 먼저, 같으면 시작일이 늦은 쪽 먼저
const compareKeys = (a: SortKey, b: SortKey): number =>
  compareDesc(a.end, b.end) || compareDesc(a.start, b.start);

// Latest key among several periods; an empty list counts as no date
// 여러 기간 중 가장 늦은 키, 빈 배열은 기간 없음으로 처리
const latestKey = (periods: readonly Period[]): SortKey =>
  periods
    .map(periodKey)
    .reduce<SortKey>(
      (latest, key) => (compareKeys(key, latest) < 0 ? key : latest),
      { end: NO_DATE_KEY, start: NO_DATE_KEY },
    );

// Build a newest-first sorter from a key getter (input is never mutated)
// 키를 꺼내는 함수로 최신순 정렬 함수를 만듦 (원본은 바꾸지 않음)
const sortByLatest =
  <T, >(getKey: (item: T) => SortKey) =>
    (items: readonly T[]): readonly T[] =>
      items.toSorted((a, b) => compareKeys(getKey(a), getKey(b)));

// Projects: by their latest period
// 프로젝트: 가장 늦은 기간 기준
export const sortProjects = sortByLatest((project: Project) => latestKey(project.periods));

// Companies: by employment period
// 회사: 재직 기간 기준
export const sortCompanies = sortByLatest((company: Company) => periodKey(company.period));

// Companies newest first, with each company's projects also sorted
// 회사를 최신순으로, 각 회사의 프로젝트도 함께 정렬
export const sortExperience = (companies: readonly Company[]): readonly Company[] =>
  sortCompanies(companies).map((company) => ({
    ...company,
    projects: sortProjects(company.projects),
  }));
