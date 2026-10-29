import type { Profile } from './types';

// Profile shown in the top row (ID / POSITION / MOTTO / CONTACT)
// 상단 프로필 행에 보이는 정보 (ID / POSITION / MOTTO / CONTACT)
export const PROFILE = {
  name: { ko: '장하담', en: 'Hadam Jang' }, // uppercase is a style choice, done in CSS / 대문자 표시는 CSS에서 처리
  position: { ko: '웹 프론트엔드 개발자', en: 'Web Frontend Developer' },
  motto: { ko: '뜻이 있는 곳에 길이 있다.', en: 'Where there is a will, there is a way.' },
  contacts: [
    { label: 'hpyhdm@gmail.com', href: 'mailto:hpyhdm@gmail.com' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
    { label: 'Github', href: 'https://github.com/hpyhdm' },
  ],
  // Grouped so small libraries read as support for the main tools
  // 작은 라이브러리가 주요 기술을 보조하는 것으로 읽히도록 분류해서 표시
  skills: [
    { label: 'Languages', items: ['HTML', 'CSS/SCSS', 'JavaScript', 'TypeScript'] },
    { label: 'Frameworks & Libraries', items: ['React', 'Next.js', 'jQuery'] },
    { label: 'Interaction', items: ['GSAP', 'ScrollTrigger', 'Swiper', 'Lottie'] },
    { label: 'Accessibility', items: ['WCAG 2.1', 'KWCAG 2.2'] },
    { label: 'Tools', items: ['Git', 'Figma'] },
  ],
  education: [
    {
      school: { ko: '세종대학교', en: 'Sejong University' },
      degree: { ko: '미술학사 (한국화 전공)', en: 'Bachelor of Fine Arts in Korean Painting' }, // as on the certificate / 졸업증명서 표기 그대로
      period: { kind: 'range', from: '2015.03', to: '2020.02' },
    },
  ],
} as const satisfies Profile;
