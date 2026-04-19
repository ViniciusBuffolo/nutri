import styles from "@/app/page.module.css";

export default function TopBar({ onOpen }) {
  return (
    <button
      type="button"
      className={`${styles.topBar} ${styles.topBarHero}`}
      onClick={onOpen}
      aria-label="Abrir painel superior"
    >
      <span className={styles.topBarTitle}>Logo</span>
    </button>
  );
}