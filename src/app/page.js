"use client";

import { useState } from "react";
import styles from "./page.module.css";
import TopCanvas from "@/components/TopCanvas";
import TopBar from "@/components/TopBar";
import BottomNav from "@/components/BottomNav";
import { nutritionSummary } from "@/data/homeData";

export default function Home() {
  const [isOpen, setIsOpen] = useState(true);

  function openCanvas() {
    setIsOpen(true);
  }

  function closeCanvas() {
    setIsOpen(false);
  }

  return (
    <main className={styles.page}>
      <div className={styles.backgroundOverlay} />

      <TopCanvas
        isOpen={isOpen}
        closeCanvas={closeCanvas}
        nutritionSummary={nutritionSummary}
      />

      <section
        className={`${styles.mainContent} ${isOpen ? styles.mainShifted : ""}`}
      >
        {!isOpen && <TopBar onOpen={openCanvas} />}

        <div className={styles.welcomeContainer}>
          <h1 className={styles.welcomeTitle}>Bem-vindo</h1>
        </div>
      </section>

      <BottomNav />
    </main>
  );
}