import type { Localized } from '@/data/resume/types';

// Supported languages, derived from Localized so they never drift apart
// 지원 언어 — Localized에서 꺼내서 두 타입이 어긋나지 않음
export type Lang = keyof Localized; // 'ko' | 'en'

// Default language on first visit (no ?lang in the URL)
// 첫 방문 시 기본 언어 (URL에 ?lang이 없을 때)
export const DEFAULT_LANG: Lang = 'en';

// Turn any query value (?lang=...) into a valid language
// 어떤 쿼리 값(?lang=...)이 와도 유효한 언어로 변환
export const parseLang = (value: unknown): Lang =>
  value === 'ko' ? 'ko' : DEFAULT_LANG;

// Pick the text for the given language
// 주어진 언어의 텍스트 꺼내기
export const pick =
  (lang: Lang) =>
    (text: Localized): string =>
      text[lang];
