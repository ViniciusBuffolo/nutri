"use client";

import Link from "next/link";
import styles from "@/app/page.module.css";

export default function EvaluationSummaryCard({
  eyebrow = "Avaliações",
  title = "Resumo do módulo",
  description = "Escolha uma das avaliações disponíveis para iniciar.",
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}) {
  return (
    <div className={styles.bmiResultCard}>
      <p className={styles.bmiEyebrow}>{eyebrow}</p>
      <h2 className={styles.bmiResultTitle}>{title}</h2>
      <p className={styles.bmiResultText}>{description}</p>

      <div className={styles.bmiActions}>
        {primaryHref && primaryLabel ? (
          <Link href={primaryHref} className={styles.bmiSecondaryButton}>
            {primaryLabel}
          </Link>
        ) : null}

        {secondaryHref && secondaryLabel ? (
          <Link href={secondaryHref} className={styles.bmiSecondaryButton}>
            {secondaryLabel}
          </Link>
        ) : null}
      </div>
    </div>
  );
}