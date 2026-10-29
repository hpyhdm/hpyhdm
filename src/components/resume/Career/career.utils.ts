// Career helpers: display labels and pure functions for the career section
// 경력 섹션용 헬퍼: 화면 라벨과 순수 함수들

import type { Localized, Project, ProjectKind } from '@/data/resume/types';

// Group headings, shown only when a company has both groups
// 그룹 소제목, 한 회사에 두 그룹이 다 있을 때만 표시
export const BUILDS_LABEL = { ko: '구축·리뉴얼', en: 'Builds & renewals' } as const satisfies Localized;
export const OPERATIONS_LABEL = { ko: '운영 중인 사이트', en: 'Ongoing client sites' } as const satisfies Localized;

// Badge for a build that is still maintained after launch
// 오픈 후 지금도 운영 중인 구축 프로젝트에 붙는 배지
export const MAINTAINING_LABEL = { ko: '운영 중', en: 'Maintaining' } as const satisfies Localized;

// Projects of one kind, keeping the sorted order
// 한 종류의 프로젝트만, 정렬 순서는 그대로
export const byKind =
  (kind: ProjectKind) =>
    (projects: readonly Project[]): readonly Project[] =>
      projects.filter((project) => project.kind === kind);
