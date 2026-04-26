"use client";

import Link from "next/link";
import styles from "@/app/styles/header.module.css";

export default function SideDrawer({ isOpen, onClose }) {
  return (
    <>
      <button
        type="button"
        className={`${styles.drawerOverlay} ${
          isOpen ? styles.drawerOverlayOpen : ""
        }`}
        onClick={onClose}
        aria-label="Fechar menu lateral"
      />

      <aside
        className={`${styles.sideDrawer} ${
          isOpen ? styles.sideDrawerOpen : ""
        }`}
      >
        <div className={styles.drawerHeader}>
          <strong>Menu</strong>

          <button
            type="button"
            className={styles.drawerCloseButton}
            onClick={onClose}
            aria-label="Fechar menu lateral"
          >
            ×
          </button>
        </div>

        <nav className={styles.drawerNav}>
          <Link href="/" onClick={onClose}>
            Home
          </Link>

          <Link href="/dashboard" onClick={onClose}>
            Dashboard
          </Link>

          <Link href="/evaluations" onClick={onClose}>
            Evaluations
          </Link>

          <Link href="/patients" onClick={onClose}>
            Patients
          </Link>

          <Link href="/appointments" onClick={onClose}>
            Appointments
          </Link>

          <Link href="/settings" onClick={onClose}>
            Settings
          </Link>
        </nav>
      </aside>
    </>
  );
}