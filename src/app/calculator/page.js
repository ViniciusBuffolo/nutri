"use client";

import { useState } from "react";
import styles from "../page.module.css";
import TopCanvas from "@/components/TopCanvas";
import TopBar from "@/components/TopBar";
import BottomNav from "@/components/BottomNav";
import { nutritionSummary } from "@/data/homeData";
import CalculatorContent from "@/components/CalculatorContent";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  function openCanvas() {
    setIsOpen(true);
  }

  function closeCanvas() {
    setIsOpen(false);
  }

  return (
    <main className={styles.page}>
      <TopCanvas
        isOpen={isOpen}
        closeCanvas={closeCanvas}
        nutritionSummary={nutritionSummary}
      />

      <section
        className={`${styles.mainContent} ${isOpen ? styles.mainShifted : ""}`}
      >
        {!isOpen && <TopBar onOpen={openCanvas} />}

        <CalculatorContent />
      </section>

      <BottomNav />
    </main>
  );
}