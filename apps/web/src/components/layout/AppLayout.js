"use client";

import { useRef, useState } from "react";
import TopCanvas from "@/components/layout/TopCanvas";
import TopBar from "@/components/layout/TopBar";
import SideDrawer from "@/components/layout/SideDrawer";
import BottomNav from "@/components/layout/BottomNav";
import { nutritionSummary } from "@data/homeData";

export default function AppLayout({ children, canvasInitiallyOpen = false }) {
  const [isOpen, setIsOpen] = useState(canvasInitiallyOpen);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const touchStartX = useRef(null);

  function openCanvas() {
    setIsOpen(true);
  }

  function closeCanvas() {
    setIsOpen(false);
  }

  function openDrawer() {
    setIsDrawerOpen(true);
  }

  function closeDrawer() {
    setIsDrawerOpen(false);
  }

  function handleTouchStart(event) {
    touchStartX.current = event.touches[0].clientX;
  }

  function handleTouchEnd(event) {
    if (touchStartX.current === null) return;

    const endX = event.changedTouches[0].clientX;
    const distance = touchStartX.current - endX;
    const startedNearRight = touchStartX.current > window.innerWidth - 48;

    if (startedNearRight && distance > 60) {
      openDrawer();
    }

    touchStartX.current = null;
  }

  return (
    <main
      className="page"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="backgroundOverlay" />

      <TopCanvas
        isOpen={isOpen}
        closeCanvas={closeCanvas}
        nutritionSummary={nutritionSummary}
      />

      <section className={`mainContent ${isOpen ? "mainShifted" : ""}`}>
        {!isOpen && (
          <TopBar onOpen={openCanvas} onOpenDrawer={openDrawer} />
        )}

        {children}
      </section>

      <SideDrawer isOpen={isDrawerOpen} onClose={closeDrawer} />

      <BottomNav />
    </main>
  );
}