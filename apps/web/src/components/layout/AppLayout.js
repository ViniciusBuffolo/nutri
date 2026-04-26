"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import TopCanvas from "@/components/layout/TopCanvas";
import BottomNav from "@/components/layout/BottomNav";
import SideDrawer from "@/components/layout/SideDrawer";
import { nutritionSummary as defaultNutritionSummary } from "@data/homeData";

function getCanvasVariant(pathname, canvasVariant) {
  if (canvasVariant) return canvasVariant;

  if (pathname?.startsWith("/dashboard")) return "dashboard";
  if (pathname?.startsWith("/login")) return "auth";
  if (pathname?.startsWith("/register")) return "auth";
  if (pathname?.startsWith("/forgot-password")) return "auth";
  if (pathname?.startsWith("/reset-password")) return "auth";
  if (pathname?.startsWith("/verify-email")) return "auth";
  if (pathname?.startsWith("/onboarding")) return "auth";

  return "home";
}

function AppLayoutContent({
  children,
  nutritionSummary = defaultNutritionSummary,
  canvasVariant,
  user = null,
  canvasInitiallyOpen = false,
}) {
  const pathname = usePathname();
  const variant = getCanvasVariant(pathname, canvasVariant);
  const isAuth = variant === "auth";

  const [isCanvasOpen, setIsCanvasOpen] = useState(
    !isAuth && canvasInitiallyOpen,
  );
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  function openCanvas() {
    if (isAuth) return;
    setIsCanvasOpen(true);
  }

  function closeCanvas() {
    setIsCanvasOpen(false);
  }

  function openDrawer() {
    setIsDrawerOpen(true);
  }

  function closeDrawer() {
    setIsDrawerOpen(false);
  }

  useEffect(() => {
    let startX = 0;

    function handleTouchStart(event) {
      startX = event.touches[0].clientX;
    }

    function handleTouchMove(event) {
      const currentX = event.touches[0].clientX;
      const isStartingFromRightEdge = startX > window.innerWidth - 48;
      const isSwipingLeft = currentX < startX - 40;

      if (isStartingFromRightEdge && isSwipingLeft) {
        openDrawer();
      }
    }

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <div className="page">
      <div className="backgroundOverlay" />

      {!isAuth && (
        <>
          <TopCanvas
            isOpen={isCanvasOpen}
            openCanvas={openCanvas}
            closeCanvas={closeCanvas}
            nutritionSummary={nutritionSummary}
            user={user}
            variant={variant}
            onOpenDrawer={openDrawer}
          />
        </>
      )}

      <main
        className={`mainContent ${
          isCanvasOpen && variant === "home" ? "mainShifted" : ""
        } ${
          isCanvasOpen && variant === "dashboard"
            ? "mainDashboardShifted"
            : ""
        }`}
      >
        {children}
      </main>

      {/* {!isAuth && <BottomNav />} */}
      <BottomNav />

      <SideDrawer isOpen={isDrawerOpen} onClose={closeDrawer} />
    </div>
  );
}

export default function AppLayout(props) {
  const pathname = usePathname();

  return <AppLayoutContent key={pathname} {...props} />;
}