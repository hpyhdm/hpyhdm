import { useState } from 'react';

// null = closed, number = index of the open artwork
// null = 닫힘, 숫자 = 열려 있는 작품의 인덱스
export const useLightbox = () => {
  const [index, setIndex] = useState<number | null>(null);

  return {
    index,
    open: (target: number) => setIndex(target),
    close: () => setIndex(null),
  };
};

// Shape shared through context / Context로 공유할 타입
export type LightboxControls = ReturnType<typeof useLightbox>;
