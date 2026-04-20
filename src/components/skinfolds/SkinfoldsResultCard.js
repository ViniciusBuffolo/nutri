"use client";

import styles from "@/app/page.module.css";

export default function SkinfoldsResultCard({ result }) {
  return (
    <div className={styles.bmiResultCard}>
      <p className={styles.bmiEyebrow}>Gordura Corporal</p>

      {result ? (
        <>
          <div className={styles.bmiResultTop}>
            <div>
              <div className={styles.bmiValue}>{result.bodyFat}%</div>
              <div className={styles.bmiRangeText}>
                Soma das dobras: {result.sum} mm
              </div>
            </div>

            <div className={styles.bmiStatusBlock}>
              <div className={styles.bmiBadge}>{result.protocol}</div>
              <h2 className={styles.bmiResultTitle}>{result.category}</h2>
            </div>
          </div>

          <p className={styles.bmiResultText}>
            Dobras usadas: {result.sites.join(", ")}.
          </p>

          <p className={styles.bmiHelperText}>
            O protocolo é definido por idade, sexo e escolha entre 3 ou 7
            dobras quando adulto.
          </p>
        </>
      ) : (
        <>
          <div className={styles.bmiEmptyValue}>--</div>
          <h2 className={styles.bmiResultTitle}>Preencha os dados</h2>
          <p className={styles.bmiResultText}>
            Informe idade, sexo e todas as dobras do protocolo selecionado.
          </p>
        </>
      )}
    </div>
  );
}