'use client';

import { useLayoutEffect, useRef } from 'react';
import type { PointerEvent, ReactNode } from 'react';
import { gsap } from 'gsap';
import { EDGE_OFFSET, findHoverCell, getCellBox, getEdge, isAligned } from './hoverGrid.utils';
import type { CellBox, Edge, Point } from './hoverGrid.utils';
import styles from './HoverGrid.module.scss';

type Props = Readonly<{
  className?: string; // grid layout class from the page / 페이지에서 넘겨주는 그리드 레이아웃 클래스
  children: ReactNode;
}>;

// Shared tween settings (power1.out ≈ cubic-bezier(0.25, 0.46, 0.45, 0.94))
// 공통 트윈 설정 (power1.out ≈ cubic-bezier(0.25, 0.46, 0.45, 0.94))
const TWEEN = {
  duration: 0.4,
  ease: 'power1.out',
  overwrite: 'auto',
} as const;

const CENTER = { xPercent: 0, yPercent: 0 } as const;

// ----- Side effects: GSAP animations / 사이드 이펙트: GSAP 애니메이션 -----

// Enter from outside or an empty cell: jump the frame, slide the fill in from the edge
// 바깥이나 빈 칸에서 진입: 틀은 즉시 이동, fill은 진입한 변에서 슬라이드인
const enterCell = (frame: HTMLElement, fill: HTMLElement, box: CellBox, edge: Edge): void => {
  gsap.set(frame, { ...box, autoAlpha: 1, overwrite: true });
  gsap.fromTo(fill, EDGE_OFFSET[edge], { ...CENTER, ...TWEEN });
};

// Target cell → target cell: glide the frame, keep the fill centered
// 대상 칸 → 대상 칸: 틀이 미끄러지듯 이동, fill은 가운데 유지
const moveToCell = (frame: HTMLElement, fill: HTMLElement, box: CellBox): void => {
  gsap.to(frame, { ...box, ...TWEEN });
  gsap.to(fill, { ...CENTER, ...TWEEN });
};

// Leave to an empty cell or outside: slide the fill out toward the exit edge
// 빈 칸이나 바깥으로 나감: fill을 나간 변 쪽으로 슬라이드아웃
const leaveCell = (fill: HTMLElement, edge: Edge): void => {
  gsap.to(fill, { ...EDGE_OFFSET[edge], ...TWEEN });
};

// Reads the frame's current (possibly mid-tween) position
// 틀의 현재 위치를 읽음 (애니메이션 도중의 값 포함)
const getFramePoint = (frame: HTMLElement): Point => ({
  x: Number(gsap.getProperty(frame, 'x')),
  y: Number(gsap.getProperty(frame, 'y')),
});

// Grid wrapper with a single hover highlight that moves between cells
// Cells marked with data-hover are targets
// 셀 사이를 이동하는 하이라이트 하나를 가진 그리드 래퍼
// data-hover가 붙은 셀이 대상
export default function HoverGrid({ className = '', children }: Props) {
  const frameRef = useRef<HTMLSpanElement>(null);
  const fillRef = useRef<HTMLSpanElement>(null);

  // Runs on unmount and when Activity hides this page (navigation)
  // Stop running tweens and push the fill out of the frame: the same idle state
  // as after leaving a cell, so the old highlight doesn't reappear when coming back
  // 언마운트될 때와 Activity가 페이지를 숨길 때(페이지 이동) 실행
  // 진행 중인 트윈을 멈추고 fill을 틀 밖으로 밀어냄: 칸에서 나갔을 때와 같은 대기 상태라서
  // 뒤로 돌아왔을 때 예전 하이라이트가 다시 보이지 않음
  useLayoutEffect(() => {
    const frame = frameRef.current;
    const fill = fillRef.current;

    return () => {
      gsap.killTweensOf([frame, fill]);

      if (fill) {
        gsap.set(fill, EDGE_OFFSET.top);
      }
    };
  }, []);

  // Pointer moved onto an element: enter or move / 요소 위로 포인터가 올라옴: 진입 또는 이동
  const handlePointerOver = (event: PointerEvent<HTMLDivElement>) => {
    const frame = frameRef.current;
    const fill = fillRef.current;
    const to = findHoverCell(event.target);
    const from = findHoverCell(event.relatedTarget);

    // Mouse only, and only when the target cell actually changed
    // 마우스일 때만, 그리고 대상 칸이 실제로 바뀌었을 때만
    if (event.pointerType !== 'mouse' || !frame || !fill || !to || to === from) {
      return;
    }

    const box = getCellBox(to);

    // Glide only along a row or a column; otherwise re-enter from the edge
    // 같은 행/열일 때만 미끄러지고, 아니면 변에서 다시 진입
    if (from && isAligned(getFramePoint(frame), box)) {
      moveToCell(frame, fill, box);
      return;
    }

    const edge = getEdge(to.getBoundingClientRect(), event.clientX, event.clientY);
    enterCell(frame, fill, box, edge);
  };

  // Pointer left an element: leave only when not heading into another target cell
  // 요소에서 포인터가 벗어남: 다른 대상 칸으로 가는 게 아닐 때만 나감 처리
  const handlePointerOut = (event: PointerEvent<HTMLDivElement>) => {
    const fill = fillRef.current;
    const from = findHoverCell(event.target);
    const to = findHoverCell(event.relatedTarget);

    // Moving into another target cell is handled by pointerover
    // 다른 대상 칸으로의 이동은 pointerover에서 처리
    if (event.pointerType !== 'mouse' || !fill || !from || from === to || to) {
      return;
    }

    const edge = getEdge(from.getBoundingClientRect(), event.clientX, event.clientY);
    leaveCell(fill, edge);
  };

  return (
    <div
      className={styles.board}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    >
      <div className={`${className} ${styles.grid}`}>
        {children}
        {/* Frame moves between cells, fill slides inside it / 틀은 셀 사이를 이동하고, fill은 틀 안에서 슬라이드 */}
        <span ref={frameRef} className={styles.highlight} aria-hidden="true">
          <span ref={fillRef} className={styles.highlightFill}/>
        </span>
      </div>
    </div>
  );
}
