import styles from "@/app/styles/header.module.css";
import CanvasContent from "@/components/layout/CanvasContent";

export default function TopCanvas({
  isOpen,
  openCanvas,
  closeCanvas,
  nutritionSummary,
  user,
  variant = "home",
  onOpenDrawer,
}) {
  return (
    <div
      className={`${styles.topCanvas} ${
        variant === "dashboard" ? styles.topCanvasDashboard : styles.topCanvasHome
      } ${isOpen ? styles.open : ""}`}
    >
      <div className={styles.heroInner}>
        <CanvasContent
          nutritionSummary={nutritionSummary}
          user={user}
          variant={variant}
          isOpen={isOpen}
          openCanvas={openCanvas}
          closeCanvas={closeCanvas}
          onOpenDrawer={onOpenDrawer}
        />
      </div>
    </div>
  );
}