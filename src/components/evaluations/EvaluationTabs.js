"use client";

import Link from "next/link";
import styles from "@/app/page.module.css";

export default function EvaluationTabs({ activeTab = "overview" }) {
  return (
    <div className={styles.bmiActions}>
      <Link
        href="/evaluations"
        className={styles.bmiSecondaryButton}
        aria-current={activeTab === "overview" ? "page" : undefined}
      >
        Visão Geral
      </Link>

      <Link
        href="/evaluations/bmi"
        className={styles.bmiSecondaryButton}
        aria-current={activeTab === "bmi" ? "page" : undefined}
      >
        IMC
      </Link>

      <Link
        href="/evaluations/skinfolds"
        className={styles.bmiSecondaryButton}
        aria-current={activeTab === "skinfolds" ? "page" : undefined}
      >
        Dobras Cutâneas
      </Link>
    </div>
  );
}