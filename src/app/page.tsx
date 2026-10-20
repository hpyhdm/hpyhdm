import BearScene from '@/components/BearScene/BearScene';
import styles from './page.module.scss';

export default function Page() {
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}>
          <BearScene/>
        </div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
      </div>
    </main>
  );
}
