// Header helpers: pure functions that map a pathname to header content
// 헤더용 헬퍼: 경로를 헤더 내용으로 바꾸는 순수 함수들

export type NavItem = Readonly<{
  href: string;
  label: string;
}>;

// Every page that can appear in the header (order = display order)
// 헤더에 나올 수 있는 모든 페이지 (배열 순서 = 화면 순서)
export const NAV_ITEMS: ReadonlyArray<NavItem> = [
  {href: '/archive', label: 'Archive'},
  {href: '/resume', label: 'Resume'},
  {href: '/', label: 'Home'},
];

// Left-side title from the first path segment ('/archive/post' → 'Archive')
// 경로의 첫 번째 구간으로 왼쪽 제목을 구함 ('/archive/post' → 'Archive')
export const getPageTitle = (pathname: string): string => {
  const section = `/${pathname.split('/')[1]}`;

  return NAV_ITEMS.find((item) => item.href === section)?.label ?? '';
};

// Right-side links: every page except the exact current one
// 오른쪽 링크: 현재 경로와 정확히 같은 페이지만 제외
export const getNavItems = (pathname: string): ReadonlyArray<NavItem> => (
  NAV_ITEMS.filter((item) => item.href !== pathname)
);
