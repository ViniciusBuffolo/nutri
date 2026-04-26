import styles from "@/app/styles/header.module.css";
import Image from "next/image";
import Link from "next/link";

export default function TopBar({ onOpen, onOpenDrawer }) {
  function handleLogoClick(event) {
    event.stopPropagation();
  }

  function handleMenuClick(event) {
    event.stopPropagation();
    onOpenDrawer?.();
  }

  return (
    <button
      type="button"
      className={`${styles.topBar} ${styles.topBarHero}`}
      onClick={onOpen}
      aria-label="Abrir painel superior"
    >
      <Link
        href="/"
        className={styles.topBarLogoLink}
        onClick={handleLogoClick}
        aria-label="Ir para a página inicial"
      >
        <Image
          src="/logo-nx-nutri-white.svg"
          alt="NX Nutri"
          width={140}
          height={32}
          className={styles.topBarLogo}
          priority
        />
      </Link>

      <button
        type="button"
        className={styles.topBarMenuButton}
        onClick={handleMenuClick}
        aria-label="Abrir menu lateral"
      >
        <span />
        <span />
        <span />
      </button>
    </button>
  );
}