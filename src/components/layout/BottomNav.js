import Link from "next/link";
import styles from "@/app/page.module.css";

export default function BottomNav() {
  return (
    <nav className={styles.bottomNav}>
      <Link href="/evaluations" className={styles.navItem}>
        <span>🔢</span>
        <small>Avaliações</small>
      </Link>

      <Link href="/profile" className={styles.navItem}>
        <span>👤</span>
        <small>Perfil</small>
      </Link>

      <Link href="/dashboard" className={`${styles.navItem} ${styles.navCenter}`}>
        <span>＋</span>
      </Link>

      <Link href="/appointments" className={styles.navItem}>
        <span>📅</span>
        <small>Agenda</small>
      </Link>

      <Link href="/patients" className={styles.navItem}>
        <span>🧑‍⚕️</span>
        <small>Pacientes</small>
      </Link>
    </nav>
  );
}