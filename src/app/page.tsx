import Link from 'next/link';

// Cell kinds used by the main grid.
// 메인 그리드에서 쓰는 칸의 종류.
type CellKind = 'empty' | 'link' | 'cloud';

type GridCell = {
  readonly id: string;
  readonly kind: CellKind;
  readonly isActive: boolean; // gray, hoverable cell / 회색 배경, 호버 가능한 칸
  readonly label?: string;
  readonly href?: string;
};

const GRID_SIZE = 4;

// Cells that differ from the default empty cell, keyed by "row-col" (1-based).
// 기본 빈 칸과 다른 칸만 정의. 키는 "행-열" (1부터 시작).
const CELL_OVERRIDES: Readonly<Record<string, Partial<GridCell>>> = {
  '1-3': { kind: 'cloud' },
  '2-2': { kind: 'link', isActive: true, label: '/Feed', href: '/feed' },
  '2-3': { kind: 'link', isActive: true, label: '/Resume', href: '/resume' },
  '2-4': { isActive: true },
  '3-2': { isActive: true },
};

// Pure function: builds one cell from its position.
// 순수 함수: 위치값으로 칸 하나를 만든다.
const createCell = (row: number, col: number): GridCell => {
  const id = `${row}-${col}`;

  return {
    id,
    kind: 'empty',
    isActive: false,
    ...CELL_OVERRIDES[id],
  };
};

// Pure function: builds all 16 cells in row-major order (left → right, top → bottom).
// 순수 함수: 16칸을 행 우선 순서(왼→오, 위→아래)로 만든다.
const createGridCells = (size: number): readonly GridCell[] =>
  Array.from({ length: size * size }, (_, index) =>
    createCell(Math.floor(index / size) + 1, (index % size) + 1),
  );

const GRID_CELLS = createGridCells(GRID_SIZE);

// Renders the inner content of a cell by its kind.
// 칸 종류에 따라 내부 콘텐츠를 렌더링.
const renderCellContent = (cell: GridCell) => {
  if (cell.kind === 'link' && cell.href) {
    return <Link href={cell.href}>{cell.label}</Link>;
  }

  // Cloud animation will be added in step 4.
  // 구름 애니메이션은 4단계에서 추가.
  return null;
};

export default function Page() {
  return (
    <main>
      {GRID_CELLS.map((cell) => (
        <div key={cell.id} data-kind={cell.kind} data-active={cell.isActive}>
          {renderCellContent(cell)}
        </div>
      ))}
    </main>
  );
}
