'use client';

import { createContext, use } from 'react';
import type { ReactNode } from 'react';
import { useLightbox } from '@/hooks/useLightbox';
import type { LightboxControls } from '@/hooks/useLightbox';

// null default lets us detect usage outside the provider
// 기본값을 null로 두면 Provider 밖에서 쓴 경우를 잡아낼 수 있음
const LightboxContext = createContext<LightboxControls | null>(null);

// Holds state only; children are rendered on the server
// 상태만 보유하고, children은 서버에서 렌더된 결과 그대로 전달
export default function LightboxProvider({children}: { children: ReactNode }) {
  const lightbox = useLightbox();

  return <LightboxContext value={lightbox}>{children}</LightboxContext>;
}

// Read lightbox controls from any client component inside the provider
// Provider 안의 클라이언트 컴포넌트에서 라이트박스 제어 함수 사용
export const useLightboxContext = (): LightboxControls => {
  const context = use(LightboxContext);

  if (!context) {
    throw new Error('useLightboxContext must be used inside <LightboxProvider>');
  }

  return context;
};
