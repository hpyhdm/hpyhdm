'use client';

import { useEffect, useRef } from 'react';
import type { MouseEvent, SyntheticEvent } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ARTWORKS } from '@/data/artworks';
import { useLightboxContext } from './LightboxContext';
import styles from './Lightbox.module.scss';

const FADE_DURATION = 0.15; // seconds, same as the old UIkit site / 초, 예전 UIkit 사이트와 동일

// Full-screen image viewer built on <dialog>, faded with GSAP
// <dialog> 기반 전체 화면 이미지 뷰어, 페이드는 GSAP
export default function Lightbox() {
  const {index, close} = useLightboxContext();
  const dialogRef = useRef<HTMLDialogElement>(null);

  // Keep the artwork while fading out (index is still set until onClose)
  // 페이드 아웃 동안에도 작품 유지 (onClose 전까지 index가 남아 있음)
  const artwork = index === null ? null : ARTWORKS[index];

  // When an artwork is chosen: open the dialog and fade in
  // 작품이 선택되면: dialog를 열고 페이드 인
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || index === null) return;

    dialog.showModal();
    gsap.fromTo(dialog, {opacity: 0}, {opacity: 1, duration: FADE_DURATION, ease: 'none', overwrite: true});
  }, [index]);

  // Fade out first, then really close (onClose syncs the state)
  // 먼저 페이드 아웃하고 실제로 닫기 (상태는 onClose에서 맞춤)
  const requestClose = () => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    gsap.to(dialog, {
      opacity: 0,
      duration: FADE_DURATION,
      ease: 'none',
      overwrite: true,
      onComplete: () => dialog.close(),
    });
  };

  // Esc fires "cancel": stop the instant close and animate instead
  // Esc는 "cancel" 이벤트 발생: 즉시 닫힘을 막고 애니메이션으로 닫기
  const handleCancel = (event: SyntheticEvent<HTMLDialogElement>) => {
    event.preventDefault();
    requestClose();
  };

  // Click on empty space (not the image or button) closes
  // 이미지나 버튼이 아닌 빈 공간을 클릭하면 닫기
  const handleStageClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) requestClose();
  };

  return (
    <dialog
      ref={dialogRef}
      className={styles.dialog}
      aria-label={artwork?.title.en}
      onCancel={handleCancel}
      onClose={close}
    >
      <div className={styles.stage} onClick={handleStageClick}>
        {artwork && (
          <Image
            className={styles.image}
            src={artwork.src}
            width={artwork.width}
            height={artwork.height}
            sizes="100vw"
            alt={`${artwork.title.ko} - ${artwork.title.en}`}
          />
        )}
      </div>

      <button type="button" className={styles.close} aria-label="Close" onClick={requestClose}>
        <svg viewBox="0 0 20 20" aria-hidden="true">
          <path d="M1 1 19 19M19 1 1 19"/>
        </svg>
      </button>
    </dialog>
  );
}
