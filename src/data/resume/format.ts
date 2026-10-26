import type { Lang } from '@/lib/i18n';
import { pick } from '@/lib/i18n';
import type { Period } from './types';

// Label used in place of an end date
// 종료일 대신 쓰는 라벨
const PRESENT = { ko: '현재', en: 'Present' } as const;

// One period as display text: '2025.03 – 2025.06', '2023.09 – Present'
// 기간 하나를 화면용 글자로: '2025.03 – 2025.06', '2023.09 – 현재'
export const formatPeriod =
  (lang: Lang) =>
    (period: Period): string =>
      `${period.from} – ${period.to ?? pick(lang)(PRESENT)}`;

// Several periods, one line each (an empty list gives no lines)
// 여러 기간을 한 줄씩 (빈 배열이면 줄 없음)
export const formatPeriods =
  (lang: Lang) =>
    (periods: readonly Period[]): readonly string[] =>
      periods.map(formatPeriod(lang));

// Team size as display text: 'Team of 2', '2인 팀'
// 팀 규모를 화면용 글자로: 'Team of 2', '2인 팀'
export const formatTeamSize =
  (lang: Lang) =>
    (size: number): string =>
      lang === 'ko' ? `${size}인 팀` : `Team of ${size}`;
