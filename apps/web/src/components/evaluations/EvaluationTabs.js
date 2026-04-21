"use client";

import styles from "@/app/page.module.css";
import Button from "@/components/shared/Button";

export default function EvaluationTabs({ activeTab = "overview" }) {
  return (
    <div className={styles.bmiActions}>
      <Button
        href="/evaluations"
        className={styles.bmiSecondaryButton}
        aria-current={activeTab === "overview" ? "page" : undefined}
      >
        Visão Geral
      </Button>

      <Button
        href="/evaluations/bmi"
        className={styles.bmiSecondaryButton}
        aria-current={activeTab === "bmi" ? "page" : undefined}
      >
        IMC
      </Button>

      <Button
        href="/evaluations/skinfolds"
        className={styles.bmiSecondaryButton}
        aria-current={activeTab === "skinfolds" ? "page" : undefined}
      >
        Dobras Cutâneas
      </Button>
    </div>
  );
}