import type { Profile } from './types';

// Profile shown in the top row (ID / POSITION / MOTTO / CONTACT)
// 상단 프로필 행에 보이는 정보 (ID / POSITION / MOTTO / CONTACT)
export const PROFILE = {
  name: {ko: '장하담', en: 'Hadam Jang'}, // uppercase is a style choice, done in CSS / 대문자 표시는 CSS에서 처리
  position: {ko: '웹 프론트엔드 개발자', en: 'Web Frontend Developer'},
  motto: {ko: '뜻이 있는 곳에 길이 있다.', en: 'Where there is a will, there is a way.'},
  contacts: [
    {label: 'hadamjang.dev@gmail.com', href: 'mailto:hadamjang.dev@gmail.com'},
    {label: 'LinkedIn', href: 'https://www.linkedin.com/in/hadam-jang-10256536a/'},
    {label: 'Github', href: 'https://github.com/happycodehouse'},
  ],
} as const satisfies Profile;
