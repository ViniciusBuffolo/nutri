"use client";

import { useState } from "react";
import TopCanvas from "@/components/layout/TopCanvas";
import TopBar from "@/components/layout/TopBar";
import BottomNav from "@/components/layout/BottomNav";
import { nutritionSummary } from "@data/homeData";

export default function AppLayout({ children, canvasInitiallyOpen = false }) {
  const [isOpen, setIsOpen] = useState(canvasInitiallyOpen);

  function openCanvas() {
    setIsOpen(true);
  }

  function closeCanvas() {
    setIsOpen(false);
  }

  return (
    <main className="page">
      <div className="backgroundOverlay" />

      <TopCanvas
        isOpen={isOpen}
        closeCanvas={closeCanvas}
        nutritionSummary={nutritionSummary}
      />

      <section className={`mainContent ${isOpen ? "mainShifted" : ""}`}>
        {!isOpen && <TopBar onOpen={openCanvas} />}

        {children}
      </section>

      <BottomNav />
    </main>
  );
}