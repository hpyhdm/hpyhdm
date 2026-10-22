import type { Lang } from '@/lib/i18n';
import { pick } from '@/lib/i18n';
import type { Period } from './types';

// Labels used in place of dates
// 날짜 대신 쓰는 라벨
const PRESENT = {ko: '현재', en: 'Present'} as const;
const MAINTENANCE = {ko: '유지운영', en: 'Maintenance'} as const;

// One period as display text: '2025.03 – 2025.06', '2023.09 – Present', 'Maintenance'
// 기간 하나를 화면용 글자로: '2025.03 – 2025.06', '2023.09 – 현재', '유지운영'
export const formatPeriod =
  (lang: Lang) =>
  (period: Period): string =>
    period.kind === 'maintenance'
      ? pick(lang)(MAINTENANCE)
      : `${period.from} – ${period.to ?? pick(lang)(PRESENT)}`;

// Several periods, one line each (an empty list gives no lines)
// 여러 기간을 한 줄씩 (빈 배열이면 줄 없음)
export const formatPeriods =
  (lang: Lang) =>
  (periods: readonly Period[]): readonly string[] =>
    periods.map(formatPeriod(lang));
