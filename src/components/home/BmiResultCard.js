"use client";

import styles from "@/app/page.module.css";

function getToneClass(tone) {
  switch (tone) {
    case "under":
      return styles.bmiToneUnder;
    case "normal":
      return styles.bmiToneNormal;
    case "over":
      return styles.bmiToneOver;
    case "obesity1":
      return styles.bmiToneObesity1;
    case "obesity2":
      return styles.bmiToneObesity2;
    case "obesity3":
      return styles.bmiToneObesity3;
    default:
      return "";
  }
}

export default function BmiResultCard({ result }) {
  const resultToneClass = result ? getToneClass(result.tone) : "";

  return (
    <div className={`${styles.bmiResultCard} ${resultToneClass}`}>
      <p className={styles.bmiEyebrow}>Resultado</p>

      {result ? (
        <>
          <div className={styles.bmiResultTop}>
            <div>
              <div className={styles.bmiValue}>{result.bmi}</div>
              <div className={styles.bmiRangeText}>
                Faixa atual: {result.range}
              </div>
            </div>

            <div className={styles.bmiStatusBlock}>
              <div className={styles.bmiBadge}>
                {result.group === "child" && "Criança / Adolescente"}
                {result.group === "adult" && "Adulto"}
                {result.group === "older" && "Idoso"}
              </div>

              <h2 className={styles.bmiResultTitle}>{result.label}</h2>
            </div>
          </div>

          <p className={styles.bmiResultText}>{result.shortText}</p>
          <p className={styles.bmiHelperText}>{result.helperText}</p>
        </>
      ) : (
        <>
          <div className={styles.bmiEmptyValue}>--</div>
          <h2 className={styles.bmiResultTitle}>Preencha os dados</h2>
          <p className={styles.bmiResultText}>
            Informe peso e altura para visualizar o cálculo do IMC.
          </p>
        </>
      )}
    </div>
  );
}