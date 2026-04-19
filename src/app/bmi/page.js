"use client";

import { useState } from "react";
import styles from "../page.module.css";
import TopCanvas from "@/components/TopCanvas";
import TopBar from "@/components/TopBar";
import HomeContent from "@/components/home/HomeContent";
import BottomNav from "@/components/BottomNav";
import { meals, macroItems } from "@/data/homeData";

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
        macroItems={macroItems}
      />

      <section
        className={`${styles.mainContent} ${isOpen ? styles.mainShifted : ""}`}
      >
        {!isOpen && <TopBar onOpen={openCanvas} />}

        <HomeContent meals={meals} />
      </section>

      <BottomNav />
    </main>
  );
}