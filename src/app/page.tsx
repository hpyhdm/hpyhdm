import BearScene from '@/components/home/BearScene/BearScene';
import GridLink from '@/components/home/GridLink/GridLink';
import HoverGrid from '@/components/shared/HoverGrid/HoverGrid';
import Lightbox from '@/components/home/Lightbox/Lightbox';
import LightboxProvider from '@/components/home/Lightbox/LightboxContext';
import ArtworkButton from '@/components/home/Lightbox/ArtworkButton';
import styles from './page.module.scss';

// Server Component: only the provider and buttons run on the client
// 서버 컴포넌트: Provider와 버튼만 클라이언트에서 동작
export default function Page() {
  return (
    <main className={styles.main}>
      <LightboxProvider>
        <HoverGrid className={styles.grid}>
          <div className={`${styles.cell} ${styles.spacer}`}></div>
          <div className={`${styles.cell} ${styles.spacer}`}></div>
          <div className={styles.cell}>
            <BearScene/>
          </div>
          <div className={styles.cell} data-hover>
            <ArtworkButton id="clouds"/>
          </div>
          <div className={`${styles.cell} ${styles.spacer}`}></div>
          <div className={`${styles.cell} ${styles.nav}`} data-hover>
            <GridLink href="/archive" label="/Archive"/>
          </div>
          <div className={`${styles.cell} ${styles.nav}`} data-hover>
            <GridLink href="/resume" label="/Resume"/>
          </div>
          <div className={styles.cell} data-hover>
            <ArtworkButton id="chin"/>
          </div>
          <div className={`${styles.cell} ${styles.spacer}`}></div>
          <div className={styles.cell} data-hover>
            <ArtworkButton id="fell"/>
          </div>
          <div className={`${styles.cell} ${styles.spacer}`}></div>
          <div className={`${styles.cell} ${styles.spacer}`}></div>
          <div className={`${styles.cell} ${styles.spacer}`}></div>
          <div className={`${styles.cell} ${styles.spacer}`}></div>
          <div className={`${styles.cell} ${styles.spacer}`}></div>
          <div className={`${styles.cell} ${styles.spacer}`}></div>
        </HoverGrid>
        <Lightbox/>
      </LightboxProvider>
    </main>
  );
}
