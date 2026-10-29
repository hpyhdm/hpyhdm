// Helpers for the hover highlight: calculations only, no DOM writes
// 호버 하이라이트용 헬퍼: 계산만 하고 DOM을 변경하지 않음

export type Edge = 'top' | 'right' | 'bottom' | 'left';

export type Offset = Readonly<{
  xPercent: number;
  yPercent: number;
}>;

export type CellBox = Readonly<{
  x: number;
  y: number;
  width: number;
  height: number;
}>;

// Fill offset (%) per edge — used as both the enter-from and the exit-to position
// 변마다 fill의 오프셋(%) — 진입 시작 위치와 나갈 때 도착 위치에 같이 사용
export const EDGE_OFFSET: Readonly<Record<Edge, Offset>> = {
  top: { xPercent: 0, yPercent: -100 },
  right: { xPercent: 100, yPercent: 0 },
  bottom: { xPercent: 0, yPercent: 100 },
  left: { xPercent: -100, yPercent: 0 },
};

// Returns the edge of the rect nearest to the pointer (pure)
// 포인터에서 가장 가까운 사각형의 변을 반환 (순수 함수)
export const getEdge = (rect: DOMRectReadOnly, x: number, y: number): Edge => {
  // Distance from the pointer to each edge / 포인터에서 각 변까지의 거리
  const distances: ReadonlyArray<readonly [Edge, number]> = [
    ['top', y - rect.top],
    ['right', rect.right - x],
    ['bottom', rect.bottom - y],
    ['left', x - rect.left],
  ];

  // Pick the pair with the smallest distance / 거리가 가장 작은 쌍을 선택
  const [edge] = distances.reduce((nearest, current) => (
    current[1] < nearest[1] ? current : nearest
  ));

  return edge;
};

// Cell box relative to its positioned parent (the grid), measured with sub-pixel precision
// so fractional row/column sizes (e.g. 100svh / 4) don't leave a gap
// Excludes the cell's own borders so its lines stay visible
// Reads layout values only and returns a new object
// 위치 지정 부모(그리드) 기준 셀 박스, 소수점 픽셀까지 측정
// 행/열 크기가 소수점(예: 100svh / 4)이어도 틈이 생기지 않도록
// 셀 자신의 테두리는 빼서 선이 가려지지 않음
// 레이아웃 값을 읽기만 하고 새 객체를 반환
export const getCellBox = (cell: HTMLElement): CellBox => {
  const parent = cell.offsetParent;
  const cellRect = cell.getBoundingClientRect();
  const parentRect = parent instanceof HTMLElement ? parent.getBoundingClientRect() : new DOMRect();
  const style = getComputedStyle(cell);

  const borderTop = parseFloat(style.borderTopWidth);
  const borderRight = parseFloat(style.borderRightWidth);
  const borderBottom = parseFloat(style.borderBottomWidth);
  const borderLeft = parseFloat(style.borderLeftWidth);

  return {
    x: cellRect.left - parentRect.left + borderLeft,
    y: cellRect.top - parentRect.top + borderTop,
    width: cellRect.width - borderLeft - borderRight,
    height: cellRect.height - borderTop - borderBottom,
  };
};

// Finds the hover-target cell (data-hover) that contains the event target
// Returns null for empty cells, the outside, or non-element targets
// 이벤트 대상을 포함하는 hover 대상 셀(data-hover)을 찾음
// 빈 칸, 그리드 바깥, 요소가 아닌 대상이면 null 반환
export const findHoverCell = (target: EventTarget | null): HTMLElement | null => (
  target instanceof Element ? target.closest<HTMLElement>('[data-hover]') : null
);

// Point type for the frame's current position / 틀의 현재 위치를 나타내는 좌표 타입
export type Point = Readonly<{
  x: number;
  y: number;
}>;

// Pixel tolerance for comparing positions / 위치 비교 시 허용 오차(px)
const ALIGN_TOLERANCE = 1;

// True when the frame shares a row or a column with the target cell (pure)
// Only then can it glide in a straight line (no diagonal moves)
// 틀이 목표 칸과 같은 행 또는 같은 열에 있으면 true (순수 함수)
// 이 경우에만 직선으로 미끄러질 수 있음 (대각선 이동 방지)
export const isAligned = (current: Point, box: CellBox): boolean => (
  Math.abs(current.x - box.x) < ALIGN_TOLERANCE
  || Math.abs(current.y - box.y) < ALIGN_TOLERANCE
);
