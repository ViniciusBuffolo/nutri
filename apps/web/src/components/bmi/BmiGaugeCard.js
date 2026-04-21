"use client";

import styles from "@/app/page.module.css";
import Card from "@/components/shared/Card";
import Badge from "@/components/shared/Badge";
import BmiGauge from "@/components/bmi/BmiGauge";

export default function BmiGaugeCard({ result }) {
  return (
    <Card className={styles.bmiResultCard}>
      <p className={styles.bmiEyebrow}>Gauge de IMC</p>

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
              <Badge className={styles.bmiBadge}>
                {result.group === "child" && "Criança / Adolescente"}
                {result.group === "adult" && "Adulto"}
                {result.group === "older" && "Idoso"}
              </Badge>
            </div>
          </div>

          <BmiGauge result={result} />

          <p className={styles.bmiHelperText}>
            Visualização gráfica do IMC com ponteiro dinâmico.
          </p>
        </>
      ) : (
        <>
          <div className={styles.bmiEmptyValue}>--</div>
          <h2 className={styles.bmiResultTitle}>Sem dados para exibir</h2>
          <p className={styles.bmiResultText}>
            Preencha os dados do IMC para visualizar o gauge.
          </p>
        </>
      )}
    </Card>
  );
}