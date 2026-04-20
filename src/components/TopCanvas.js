import styles from "@/app/page.module.css";
import CanvasContent from "./CanvasContent";

export default function TopCanvas({ isOpen, closeCanvas, nutritionSummary }) {
  return (
    <div className={`${styles.topCanvas} ${isOpen ? styles.open : ""}`}>
      <div className={styles.heroInner}>
        <CanvasContent nutritionSummary={nutritionSummary} />

        <button
          type="button"
          className={styles.arrowBtn}
          onClick={closeCanvas}
          aria-label="Fechar painel"
        >
          <span className={`${styles.chevronIcon} ${styles.chevronUp}`} />
        </button>
      </div>
    </div>
  );
}