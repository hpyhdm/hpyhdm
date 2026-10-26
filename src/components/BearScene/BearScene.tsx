'use client';

import { useEffect, useRef } from 'react';
import type { CSSProperties } from 'react';
import { gsap } from 'gsap';
import styles from './BearScene.module.scss';

type Cloud = Readonly<{
  src: string;
  size: readonly [number, number]; // original px size [w, h] / 원본 이미지 크기 [가로, 세로]
  position: CSSProperties;         // top / right / bottom / left
  width: number;                   // % of scene width / 장면 너비 기준 %
  speed?: number;                  // px per second / 초당 이동 px
  rotation?: number;               // deg / 회전 각도
  zIndex?: number;                 // 2 = in front of bear / 곰 앞, -1 = behind other clouds / 다른 구름 뒤
  isStatic?: boolean;              // ground mass with a flat bottom, does not move / 바닥이 잘린 덩어리, 움직이지 않음
}>;

type Path = Readonly<{
  forward: number;  // distance to exit bottom-left / 왼쪽 아래로 나가는 거리
  backward: number; // distance to exit top-right / 오른쪽 위로 나가는 거리
}>;

const DEFAULT_SPEED = 28;
const EXIT_MARGIN = 8; // small extra so edges never peek in / 가장자리가 보이지 않도록 약간 여유

// Initial composition (same as the previous site).
// 초기 구도 (예전 사이트와 동일).
const CLOUDS: readonly Cloud[] = [
  {
    src: '/images/main/clouds/cloud-02.png',
    size: [237, 226],
    position: { top: '-20%', left: '50%' },
    width: 9,
    speed: 28
  },
  {
    src: '/images/main/clouds/cloud-03.png',
    size: [329, 439],
    position: { top: '48%', left: '20.5%' },
    width: 9,
    speed: 30,
    rotation: 6
  },
  {
    src: '/images/main/clouds/cloud-05.png',
    size: [319, 289],
    position: { top: '-10%', right: '10%' },
    width: 14,
    speed: 24,
    zIndex: -1
  },
  {
    src: '/images/main/clouds/cloud-06.png',
    size: [170, 200],
    position: { top: '0', right: '-8%' },
    width: 14,
    speed: 34
  },
  {
    src: '/images/main/clouds/cloud-07.png',
    size: [285, 259],
    position: { bottom: '-6%', right: '12%' },
    width: 16.6,
    zIndex: 2,
    isStatic: true,
  },
  {
    src: '/images/main/clouds/cloud-08.png',
    size: [169, 179],
    position: { bottom: '48%', right: '18%' },
    width: 5.3,
    speed: 22,
    zIndex: 2
  },
  {
    src: '/images/main/clouds/cloud-10.png',
    size: [289, 178],
    position: { bottom: '0', left: '2%' },
    width: 14,
    isStatic: true
  },
];

// Pure function: how far this cloud must move (at 45°) to just leave the scene in each direction.
// Down-left exits when its top passes the bottom edge or its right side passes the left edge.
// Up-right exits when its bottom passes the top edge or its left side passes the right edge.
// 순수 함수: 이 구름이 45도로 움직여 장면을 딱 벗어나는 거리를 방향별로 계산.
// 왼쪽 아래: 구름 위쪽이 장면 아래를 지나거나, 구름 오른쪽이 장면 왼쪽을 지나면 벗어남.
// 오른쪽 위: 구름 아래쪽이 장면 위를 지나거나, 구름 왼쪽이 장면 오른쪽을 지나면 벗어남.
const getPath = (scene: HTMLElement, cloud: HTMLElement): Path => {
  const { clientWidth: sceneWidth, clientHeight: sceneHeight } = scene;
  const { offsetTop: top, offsetLeft: left, offsetWidth: width, offsetHeight: height } = cloud;

  return {
    forward: Math.min(sceneHeight - top, left + width) + EXIT_MARGIN,
    backward: Math.min(top + height, sceneWidth - left) + EXIT_MARGIN,
  };
};

export default function BearScene() {
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    // gsap.context collects every tween so one revert() cleans them all up.
    // gsap.context가 트윈을 모아 두고, revert() 한 번으로 모두 정리해요.
    const ctx = gsap.context(() => {
      const clouds = scene.querySelectorAll<HTMLElement>('[data-cloud]');

      clouds.forEach((cloud, index) => {
        const { speed = DEFAULT_SPEED, rotation = 0, isStatic = false } = CLOUDS[index];

        // Flat-bottomed ground masses stay in place.
        // 바닥이 잘린 덩어리는 제자리에 고정.
        if (isStatic) return;

        const { forward, backward } = getPath(scene, cloud);
        const total = forward + backward;

        // Just outside top-right → original spot → just outside bottom-left, forever.
        // 오른쪽 위 바로 밖 → 원래 위치 → 왼쪽 아래 바로 밖을 무한 반복.
        gsap.fromTo(
          cloud,
          { x: backward, y: -backward, rotation },
          {
            x: -forward,
            y: forward,
            duration: total / speed, // same speed for every path length / 거리와 상관없이 같은 속도
            ease: 'none',
            repeat: -1,
          },
        ).progress(backward / total); // start from the original composition / 원래 구도에서 시작
      });
    }, scene);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sceneRef} className={styles.scene}>
      <div className={styles.clouds}>
        {CLOUDS.map((cloud) => (
          <img
            key={cloud.src}
            data-cloud
            className={styles.cloud}
            src={cloud.src}
            width={cloud.size[0]}
            height={cloud.size[1]}
            alt=""
            style={{ ...cloud.position, width: `${cloud.width}%`, zIndex: cloud.zIndex }}
          />
        ))}
      </div>
      <img className={styles.bear} src="/images/main/bear-01.png" alt=""/>
    </div>
  );
}
