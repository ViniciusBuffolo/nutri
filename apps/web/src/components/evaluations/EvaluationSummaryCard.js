"use client";

import styles from "@/app/page.module.css";
import Card from "@/components/shared/Card";
import Button from "@/components/shared/Button";

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
    <Card className={styles.bmiResultCard}>
      <p className={styles.bmiEyebrow}>{eyebrow}</p>
      <h2 className={styles.bmiResultTitle}>{title}</h2>
      <p className={styles.bmiResultText}>{description}</p>

      <div className={styles.bmiActions}>
        {primaryHref && primaryLabel ? (
          <Button href={primaryHref} className={styles.bmiSecondaryButton}>
            {primaryLabel}
          </Button>
        ) : null}

        {secondaryHref && secondaryLabel ? (
          <Button href={secondaryHref} className={styles.bmiSecondaryButton}>
            {secondaryLabel}
          </Button>
        ) : null}
      </div>
    </Card>
  );
}