import Link from "next/link";
import styles from "@/app/page.module.css";

export default function BottomNav() {
  return (
    <nav className={styles.bottomNav}>
      <Link href="/calculator" className={styles.navItem}>
        <span>🔢</span>
        <small>Calculadora</small>
      </Link>

      <button className={styles.navItem}>
        <span>👤</span>
        <small>Me</small>
      </button>

      <Link href="#" className={`${styles.navItem} ${styles.navCenter}`}>
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
