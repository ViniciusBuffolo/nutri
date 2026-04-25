"use client";

import styles from "@/app/styles/home.module.css";
import AppLayout from "@/components/layout/AppLayout";

export default function Home() {
  return (
    <AppLayout canvasInitiallyOpen={true}>
      <div className={styles.welcomeContainer}>
        <h1 className={styles.welcomeTitle}>Bem-vindo</h1>
      </div>
    </AppLayout>
  );
}