'use client';

import { ARTWORKS, getArtworkIndex } from '@/data/artworks';
import type { ArtworkId } from '@/data/artworks';
import { useLightboxContext } from './LightboxContext';
import styles from './ArtworkButton.module.scss';

type Props = Readonly<{
  id: ArtworkId; // only a string crosses the server→client boundary / 서버→클라이언트로는 문자열만 전달
}>;

// Grid cell that shows the caption and opens the lightbox
// 캡션을 보여 주고, 클릭하면 라이트박스를 여는 그리드 셀
export default function ArtworkButton({id}: Props) {
  const {open} = useLightboxContext();
  const index = getArtworkIndex(id);
  const {year, title} = ARTWORKS[index];

  return (
    <button type="button" className={styles.button} onClick={() => open(index)}>
      <span className={styles.caption}>
        <span className={styles.year}>{year}</span>
        <span className={styles.title}>
          <span>{title.ko}</span>
          <span>{title.en}</span>
        </span>
      </span>
    </button>
  );
}
