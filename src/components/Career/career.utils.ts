// Career helpers: display labels and pure functions for the career section
// 경력 섹션용 헬퍼: 화면 라벨과 순수 함수들

import type { Localized, Project, ProjectKind } from '@/data/resume/types';

// Heading shown above the operations group
// 운영 그룹 위에 붙는 소제목
export const OPERATIONS_LABEL = { ko: '유지운영', en: 'Ongoing operations' } as const satisfies Localized;

// Projects of one kind, keeping the sorted order
// 한 종류의 프로젝트만, 정렬 순서는 그대로
export const byKind =
  (kind: ProjectKind) =>
    (projects: readonly Project[]): readonly Project[] =>
      projects.filter((project) => project.kind === kind);
