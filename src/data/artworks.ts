// Artwork shown in the home grid and lightbox
// 홈 그리드와 라이트박스에 쓰는 작품 정보
export type Artwork = Readonly<{
  id: string;
  src: string;
  width: number;  // original px / 원본 크기
  height: number;
  year: number;
  title: Readonly<{ ko: string; en: string }>;
}>;

// `as const` keeps literal ids ('clouds'…), `satisfies` still checks the shape
// as const로 id를 리터럴 타입('clouds'…)으로 유지하고, satisfies로 구조는 계속 검사
export const ARTWORKS = [
  {
    id: 'clouds',
    src: '/images/main/bear-01.jpg',
    width: 4096,
    height: 1714,
    year: 2018,
    title: {ko: '구름 사이로', en: 'Through the Clouds'},
  },
  {
    id: 'chin',
    src: '/images/main/bear-02.jpg',
    width: 2070,
    height: 2080,
    year: 2018,
    title: {ko: '턱을 괴고서', en: 'Chin in Hand'},
  },
  {
    id: 'fell',
    src: '/images/main/bear-03.jpg',
    width: 4210,
    height: 5387,
    year: 2018,
    title: {ko: '넘어졌어요.. 그런데', en: 'I fell... But'},
  },
] as const satisfies readonly Artwork[];

// Union of valid ids: 'clouds' | 'chin' | 'fell'
// 사용할 수 있는 id 목록 타입: 'clouds' | 'chin' | 'fell'
export type ArtworkId = (typeof ARTWORKS)[number]['id'];

// Pure: id → index in ARTWORKS
// 순수 함수: id로 ARTWORKS 안의 위치 찾기
export const getArtworkIndex = (id: ArtworkId): number =>
  ARTWORKS.findIndex((artwork) => artwork.id === id);
