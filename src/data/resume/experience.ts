import type { Company } from './types';

// Work experience (display order is decided by sort.ts)
// 경력 목록 (화면 순서는 sort.ts에서 정렬)
export const EXPERIENCE = [
  // ───────────────────────── The Uber Creative / 더위버크리에이티브 ─────────────────────────
  {
    id: 'uber-creative',
    name: { ko: '더위버크리에이티브', en: 'The Uber Creative' },
    role: 'Frontend Developer',
    period: { kind: 'range', from: '2023.09', to: null }, // still working here / 재직 중
    brief: {
      ko: '기업 웹사이트를 구축하고 운영하는 디지털 에이전시로, 신규 구축과 리뉴얼, 장기 운영을 함께 맡고 있습니다.',
      en: 'A digital agency building and running corporate websites. I work across new builds, renewals and long-term site operations.',
    },
    projects: [
      {
        id: 'esteel4u',
        kind: 'build',
        name: { ko: '이스틸포유 기업 홈페이지 리뉴얼', en: 'Esteel4U Corporate Website Renewal' },
        url: { ko: 'https://home.esteel4u.com/', en: 'https://home.esteel4u.com/' }, // no English site / 영문 사이트 없음
        periods: [{ kind: 'range', from: '2026.07', to: '2026.09' }],
        teamSize: 2,
        bullets: [
          {
            ko: '자주 바뀌는 키비주얼·연혁을 관리자에서 직접 수정할 수 있도록 마크업·스크립트를 작성해, 오픈 후 개발 요청 없이 고객사가 콘텐츠 운영',
            en: 'Wrote markup and scripts that let the client edit the key visual and company history from the admin, so content runs without developer requests after launch',
          },
          {
            ko: '기존 구조 안에서 메인 페이지 GSAP 인터랙션과 기업소개 페이지를 개발하고, 스크롤이 길다는 피드백을 반영해 ScrollTrigger 핀 구간을 조정',
            en: 'Built the main page GSAP interactions and the company pages within an existing structure, then tuned ScrollTrigger pin lengths after feedback that scrolling felt too long',
          },
        ],
      },
      {
        id: 'db-group-ci',
        kind: 'build',
        name: { ko: 'DB그룹 CI 아카이브 개편', en: 'DB Group CI Archive Renewal' },
        url: { ko: 'https://ci.dbgroup.co.kr/', en: 'https://ci.dbgroup.co.kr/' }, // no English site / 영문 사이트 없음
        periods: [{ kind: 'range', from: '2025.10', to: '2025.12' }],
        teamSize: 2,
        bullets: [
          {
            ko: '섹션 제목에서 상단 LNB를, GNB 메뉴에서 하단 배너 링크를 자동 생성하도록 스크립트화해, 콘텐츠만 수정하면 내비게이션이 함께 갱신되는 구조로 구성',
            en: 'Scripted the in-page LNB to build from section headings and footer banners from the GNB menu, so navigation updates automatically whenever content changes',
          },
          {
            ko: '공통 컴포넌트부터 페이지 단위까지 프론트엔드 전반을 주도해 개발',
            en: 'Drove most of the front-end work, from shared components to full pages',
          },
          {
            ko: '방대한 CI 자료를 일관되게 담을 수 있도록 공통 컴포넌트 재사용 구조로 설계하고, 좌측 세로형 GNB와 상단 섹션 내비게이션 레이아웃 구현',
            en: 'Structured a reusable component system to present a large volume of CI assets consistently, with a left-side vertical GNB and in-page section navigation',
          },
        ],
      },
      {
        id: 'db-hitek',
        kind: 'build',
        name: { ko: 'DB HiTek 리뉴얼', en: 'DB HiTek Website Renewal' },
        url: { ko: 'https://dbhitek.com/', en: 'https://dbhitek.com/en' },
        periods: [{ kind: 'range', from: '2025.03', to: '2025.06' }],
        maintaining: true, // still maintained after launch / 오픈 후 유지운영 중
        teamSize: 2,
        bullets: [
          {
            ko: '국·영·중·일 4개 언어 버전을 제작하며, 언어별 텍스트 길이 차이로 생기는 레이아웃 깨짐을 보정하고 중·일문 환경에 맞는 기본 폰트 적용',
            en: 'Built the KR/EN/CN/JP versions, fixing layout breaks caused by text-length differences and applying default fonts suited to Chinese and Japanese environments',
          },
          {
            ko: '회사소개·기술·고객지원·IR·지속가능경영 카테고리 서브 페이지 20개 개발, 기존 컴포넌트 구조에 맞춰 반복 레이아웃을 공통 컴포넌트로 추가 작성',
            en: 'Built 20 sub-pages across Company, Technology, Customer Support, IR and Sustainability, adding shared components for repeated layouts in line with the existing structure',
          },
          {
            ko: '회사소개·기술 개요 페이지 GSAP 인터랙션 구현, 오픈 이후 유지운영 단계에서 신규 페이지 추가 제작',
            en: 'Implemented GSAP interactions for the Company and Technology Overview pages, and added new pages during post-launch maintenance',
          },
        ],
      },
      {
        id: 'daesang-wellife',
        kind: 'build',
        name: { ko: '대상웰라이프', en: 'Daesang Wellife' },
        url: { ko: 'https://www.daesangwellife.com/', en: 'https://www.daesangwellife.com/en' },
        periods: [{ kind: 'range', from: '2024.12', to: '2025.05' }],
        maintaining: true, // still maintained after launch / 오픈 후 유지운영 중
        teamSize: 3,
        bullets: [
          {
            ko: '디자인팀의 Figma 스타일가이드를 코드로 구현하는 작업을 처음 담당, 다른 작업자도 바로 이해할 수 있는 직관적인 클래스 네이밍으로 공통 CSS·스크립트 구성',
            en: 'Took on translating the design team\'s Figma style guide into code for the first time, building shared CSS and scripts with intuitive class names any teammate could pick up',
          },
          {
            ko: '배경색별 테마 전환, 스크롤 방향에 따른 노출 토글, 마우스·터치 입력까지 고려한 공통 헤더 개발, 이전 프로젝트의 리사이즈 이슈를 반영해 안정성 보완',
            en: 'Built a shared header handling background-based themes, hide/show on scroll direction, and both mouse and touch input, hardening resize behavior based on issues from earlier projects',
          },
          {
            ko: 'GSAP 인터랙션 구현과 함께, 뷰포트를 벗어난 비디오·CSS 무한 슬라이드를 자동 정지시켜 불필요한 리소스 사용 감소',
            en: 'Implemented GSAP interactions and paused off-screen videos and infinite CSS sliders automatically to cut unnecessary resource use',
          },
          {
            ko: '회사소개·R&D 등 서브 페이지 개발, 디자이너 제작 Lottie(JSON) 애니메이션 적용 및 카카오맵 API 연동',
            en: 'Developed company and R&D sub-pages, integrated designer-made Lottie (JSON) animations and the Kakao Map API',
          },
        ],
      },
      {
        id: 'xi-elevator',
        kind: 'build',
        name: { ko: '자이엘리베이터', en: 'XI Elevator' },
        url: { ko: 'https://www.xielevator.com/', en: 'https://www.xielevator.com/en' },
        periods: [
          { kind: 'range', from: '2023.09', to: '2023.12' },
          { kind: 'range', from: '2025.03', to: '2025.04' },
        ],
        bullets: [
          {
            ko: '입사 직후 진행 중인 구축 프로젝트에 합류(3인), 기존 공통 컴포넌트 구조를 파악해 제품·유지보수 페이지 개발',
            en: 'Joined an in-progress build right after onboarding (3-person team); picked up the existing shared component system and built product and maintenance pages',
          },
          {
            ko: '디자이너 의도에 맞춘 GSAP ScrollTrigger 스크롤 인터랙션 구현, 브레이크포인트 전환 시 애니메이션 해제·재생성 처리',
            en: 'Implemented GSAP ScrollTrigger interactions to the designer\'s spec, handling teardown and re-initialization across breakpoints',
          },
          {
            ko: '사명 변경에 따른 리뉴얼 프론트엔드 단독 수행 — 메인 신규 섹션 추가, 중복 페이지 통합 등 사이트 구조 개편',
            en: 'Delivered the post-rebrand redesign as sole front-end developer, adding new main-page sections and consolidating overlapping pages',
          },
        ],
      },
      {
        id: 'samyang-ci',
        kind: 'build',
        name: { ko: '삼양그룹 전사 CI 변경', en: 'Samyang Group CI Renewal' },
        url: { ko: 'https://www.samyang.com/', en: 'https://www.samyang.com/en' },
        periods: [{ kind: 'range', from: '2024.07', to: '2024.10' }],
        teamSize: 3,
        bullets: [
          {
            ko: '삼양홀딩스 포함 12개 계열사 사이트 CI 리뉴얼, 운영 중인 소스와 리뉴얼 CSS를 분리해 고객사 수정 사항을 보존하며 개편 병행',
            en: 'Rebranded 12 Samyang Group sites, including the holding company, isolating the new CSS from the live codebase so the client\'s ongoing edits stayed intact',
          },
          {
            ko: '스타일가이드의 타이포 위계(h1–h6, 본문) 기준으로 국/영문 폰트·크기를 단계별 조정해, 일괄 치환에 따른 의도치 않은 변경 방지',
            en: 'Adjusted Korean/English fonts and sizes by style-guide level (h1–h6, body) rather than global find-and-replace, avoiding unintended changes',
          },
          {
            ko: '계열사 공통(global)·사이트별(local) 리소스 구조에 맞춰 공통 스타일과 스크립트(utils)를 분리 작성해, 12개 사이트의 유지운영 효율 확보',
            en: 'Worked within a shared global / per-site local resource structure, writing common styles and utility scripts to be reused across all 12 sites',
          },
        ],
      },
      {
        id: 'hanatour',
        kind: 'build',
        name: { ko: '하나투어 기업 웹사이트', en: 'Hanatour Corporate Website' },
        url: { ko: 'https://www.hanatourcompany.com/', en: 'https://www.hanatourcompany.com/en' },
        periods: [{ kind: 'range', from: '2024.04', to: '2024.07' }],
        teamSize: 3,
        bullets: [
          {
            ko: '사업소개 페이지 인터랙션 담당, Swiper와 GSAP ScrollTrigger를 연동한 커스텀 슬라이드 구현',
            en: 'Built custom Swiper slides synced with GSAP ScrollTrigger for the business pages',
          },
          {
            ko: '웹/모바일별 슬라이드 동작을 분리 설계해 디바이스에 맞는 사용 흐름 제공',
            en: 'Designed separate slide behavior for desktop and mobile to fit each device\'s usage',
          },
        ],
      },
      {
        id: 'samick-thk',
        kind: 'build',
        name: { ko: '삼익THK 통합 사이트 리뉴얼', en: 'Samick THK Integrated Site Renewal' },
        url: { ko: 'https://www.samickthk.co.kr/', en: 'https://www.samickthk.co.kr/en' },
        periods: [{ kind: 'range', from: '2023.12', to: '2024.05' }],
        teamSize: 4,
        bullets: [
          {
            ko: '연혁(Heritage) 페이지 인터랙션 담당, GSAP ScrollTrigger 기반 타임라인 구현',
            en: 'Owned the Heritage page interactions, building a GSAP ScrollTrigger timeline',
          },
          {
            ko: '스크롤 위치에 따른 LNB 하이라이트와 앵커 이동을 공통 함수로 묶어 재사용 가능한 구조로 작성',
            en: 'Combined scroll-based LNB highlighting and anchor navigation into shared, reusable functions',
          },
        ],
      },
      {
        id: 'samsung-em',
        kind: 'operations',
        name: { ko: '삼성전기', en: 'Samsung Electro-Mechanics' },
        url: { ko: 'https://www.samsungsem.com/kr/index.do', en: 'https://www.samsungsem.com/global/index.do' },
        periods: [{ kind: 'range', from: '2023.09', to: null }], // since joining / 입사 때부터
        teamSize: 3,
        bullets: [
          {
            ko: '매년 웹 접근성 품질인증(KWCAG 2.2) 재심사에 대응해 인증을 갱신하고, 새로 추가·개편되는 페이지도 접근성 기준에 맞게 제작해 인증 상태를 유지',
            en: 'Renewed the site\'s national web accessibility certification through yearly audits (KWCAG 2.2, based on WCAG 2.1), building new and redesigned pages to accessibility standards so the certification never lapsed',
          },
          {
            ko: '매년 GNB 카테고리 단위 리뉴얼(지속가능경영, PS/CL 기술 리소스 사이트 등)에서 톤앤매너와 공통 컴포넌트를 정비하고 운영 버전과 충돌 없이 반영, 단일 sub.css를 분리해 유지보수 구조 개선',
            en: 'Led yearly section redesigns by GNB category (Sustainability, PS/CL technical resource sites and more), refreshing tone and shared components without conflicting with the live site, and split a single sub.css into modular files for easier maintenance',
          },
          {
            ko: '분기별 IR·연혁·주주총회 콘텐츠 업데이트 등 운영 전반 담당, 4단계로 진행되는 주주총회 페이지·팝업을 일정별 예약 스크립트로 오픈·전환·종료',
            en: 'Ran day-to-day operations including quarterly IR, history and AGM updates, using scheduled scripts to open, switch and close AGM pages and pop-ups across a four-stage rollout',
          },
          {
            ko: '보안 VDI·수동 배포 환경에서 반복 재작업을 줄이기 위한 개선점을 제안해, 팀 공통 업무 유의사항으로 정리',
            en: 'Proposed process improvements for a secure VDI, manual-deploy environment, which became team-wide working guidelines',
          },
          {
            ko: '임직원 대상 사내 커뮤니티도 함께 운영하며, 칭찬 포인트 등 조건에 따라 컴포넌트를 노출·숨김 처리',
            en: 'Also maintain an internal community platform for employees, showing and hiding components based on conditions such as recognition points',
          },
          {
            ko: '연례 뉴스레터 리뉴얼에서 메일 클라이언트별 렌더링 제약을 고객사에 설명하고 대안을 제시해 디자인과 호환성을 조율, 월간 정기·제품 뉴스레터 제작',
            en: 'Explained email-client rendering limits to the client during annual newsletter redesigns and proposed alternatives that balanced design with compatibility, alongside producing monthly newsletters',
          },
        ],
      },
      {
        id: 'samyang-specialty',
        kind: 'operations',
        name: { ko: '삼양 스페셜티', en: 'Samyang Specialty' },
        url: { ko: 'https://samyangspecialty.com/', en: 'https://samyangspecialty.com/en' },
        periods: [{ kind: 'range', from: '2023.09', to: null }], // since joining / 입사 때부터
        teamSize: 1,
        bullets: [
          {
            ko: '매년 전시회 페이지 제작, 신규 페이지 추가 및 콘텐츠 업데이트',
            en: 'Ran the Samyang Specialty site, building an exhibition page every year along with new pages and content updates',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Freelance / 프리랜서 ─────────────────────────
  {
    id: 'freelance',
    name: { ko: '프리랜서', en: 'Freelance' },
    role: 'Frontend Developer',
    period: { kind: 'range', from: '2024.04', to: '2025.08' },
    brief: {
      ko: '삼성 VXT CMS 프로젝트에 프리랜서로 세 차례 참여했습니다.',
      en: 'Contract frontend work on Samsung\'s VXT CMS, across three engagements.',
    },
    projects: [
      {
        id: 'samsung-vxt',
        kind: 'build',
        name: { ko: 'Samsung VXT CMS', en: 'Samsung VXT CMS' },
        periods: [
          { kind: 'range', from: '2024.04', to: '2024.06' },
          { kind: 'range', from: '2024.10', to: '2024.11' },
          { kind: 'range', from: '2025.06', to: '2025.08' },
        ],
        bullets: [
          {
            ko: '디자인 시안을 React로 실제 화면화해, 개발팀이 본 개발 전에 UI/UX를 확인하는 기준 화면 제작',
            en: 'Turned design mockups into working React screens that the development team reviewed as the reference before production',
          },
          {
            ko: '재사용 가능한 컴포넌트로 구성하고, 디자이너와 협업해 반응형 인터페이스 구현',
            en: 'Built them from reusable components and worked with designers on responsive interfaces',
          },
        ],
      },
    ],
  },

  // ───────────────────────── Wever CNS / 웨버CNS ─────────────────────────
  {
    id: 'wever-cns',
    name: { ko: '웨버CNS', en: 'Wever CNS' },
    role: 'UI Developer', // was 웹 퍼블리셔; 'publisher' reads as content owner in English / 이전 웹 퍼블리셔, 영어권에서 publisher는 콘텐츠 발행자로 읽힘
    period: { kind: 'range', from: '2021.12', to: '2023.02' },
    brief: {
      ko: '정부기관과 기업 웹사이트를 구축하는 에이전시로, 대규모 공공 프로젝트와 기업 홈페이지 구축에 참여했습니다.',
      en: 'An agency building government and corporate websites, where I worked on large-scale public projects and corporate sites.',
    },
    projects: [
      {
        id: 'presidential-office',
        kind: 'build',
        name: { ko: '제20대 대통령실 웹사이트 개편', en: '20th Presidential Office Website' },
        periods: [{ kind: 'range', from: '2022.07', to: '2022.12' }],
        bullets: [
          {
            ko: '국·영문 공식 홈페이지 구축 참여, 반응형 웹 및 웹접근성 인증 획득',
            en: 'Contributed to the bilingual official website of the 20th Presidential Office, with responsive design and accessibility certification',
          },
        ],
      },
      {
        id: 'cheongwadae-special',
        kind: 'build',
        name: { ko: '제19대 청와대 특별 페이지', en: 'Cheong Wa Dae (Blue House) Special Portal, 19th Administration' },
        periods: [{ kind: 'range', from: '2021.12', to: '2022.05' }],
        bullets: [
          {
            ko: '100여 개 국정과제 데이터를 API로 받아 페이지에 표시하는 특별 페이지 구축 참여',
            en: 'Contributed to a special portal displaying 100+ national policy tasks loaded via API',
          },
        ],
      },
      {
        id: 'itcen-daedong',
        kind: 'build',
        name: { ko: '아이티센그룹·대동 웹사이트', en: 'ITcen Group & Daedong Websites' },
        periods: [{ kind: 'range', from: '2021.12', to: '2023.02' }],
        bullets: [
          {
            ko: '아이티센그룹 계열사 홈페이지 구축 및 유지보수, 대동 홈페이지 유지보수',
            en: 'Built and maintained ITcen Group affiliate websites, and maintained the Daedong website',
          },
        ],
      },
    ],
  },
] as const satisfies readonly Company[];
