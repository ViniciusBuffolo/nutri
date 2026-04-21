"use client";

import styles from "@/app/page.module.css";

export default function EmptyState({
  title = "Sem dados",
  description = "Nenhuma informação disponível.",
}) {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      }}
    >
      <div className={styles.bmiEmptyValue}>--</div>
      <h2 className={styles.bmiResultTitle}>{title}</h2>
      <p className={styles.bmiResultText}>{description}</p>
    </div>
  );
}