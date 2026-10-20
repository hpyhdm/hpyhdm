import BearScene from '@/components/BearScene/BearScene';
import GridLink from '@/components/GridLink/GridLink';
import HoverGrid from '@/components/HoverGrid/HoverGrid';
import Lightbox from '@/components/Lightbox/Lightbox';
import LightboxProvider from '@/components/Lightbox/LightboxContext';
import ArtworkButton from '@/components/Lightbox/ArtworkButton';
import styles from './page.module.scss';

// Server Component: only the provider and buttons run on the client
// 서버 컴포넌트: Provider와 버튼만 클라이언트에서 동작
export default function Page() {
  return (
    <main className={styles.main}>
      <LightboxProvider>
        <HoverGrid className={styles.grid}>
          <div className={styles.cell}></div>
          <div className={styles.cell}></div>
          <div className={styles.cell}>
            <BearScene/>
          </div>
          <div className={styles.cell} data-hover>
            <ArtworkButton id="clouds"/>
          </div>
          <div className={styles.cell}></div>
          <div className={styles.cell} data-hover>
            <GridLink href="/resume" label="/Resume"/>
          </div>
          <div className={styles.cell} data-hover>
            <GridLink href="/note" label="/Note"/>
          </div>
          <div className={styles.cell} data-hover>
            <ArtworkButton id="chin"/>
          </div>
          <div className={styles.cell}></div>
          <div className={styles.cell} data-hover>
            <ArtworkButton id="fell"/>
          </div>
          <div className={styles.cell}></div>
          <div className={styles.cell}></div>
          <div className={styles.cell}></div>
          <div className={styles.cell}></div>
          <div className={styles.cell}></div>
          <div className={styles.cell}></div>
        </HoverGrid>
        <Lightbox/>
      </LightboxProvider>
    </main>
  );
}
