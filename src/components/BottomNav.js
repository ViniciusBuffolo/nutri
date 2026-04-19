import Link from "next/link";
import styles from "@/app/page.module.css";

export default function BottomNav() {
  return (
    <nav className={styles.bottomNav}>
      <button className={styles.navItem}>
        <span>📘</span>
        <small>Diary</small>
      </button>

      <button className={styles.navItem}>
        <span>👤</span>
        <small>Me</small>
      </button>

      <Link href="/calc" className={`${styles.navItem} ${styles.navCenter}`}>
        <span>＋</span>
      </Link>

      <button className={styles.navItem}>
        <span>📋</span>
        <small>Plans</small>
      </button>

      <button className={styles.navItem}>
        <span>👨‍🍳</span>
        <small>Recipes</small>
      </button>
    </nav>
  );
}