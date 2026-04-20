"use client";

import styles from "@/app/page.module.css";
import SkinfoldsForm from "./skinfolds/SkinfoldsForm";

export default function CalculatorFormCard({
  bmiForm,
  onBmiChange,
  onClearBmi,
  skinfoldsForm,
  onSkinfoldsChange,
  onClearSkinfolds,
}) {
  return (
    <div className={styles.bmiCard}>
      <div className={styles.bmiHeader}>
        <div>
          <p className={styles.bmiEyebrow}>Health</p>
          <h1 className={styles.bmiTitle}>Calculadoras de Saúde</h1>
          <p className={styles.bmiSubtitle}>
            Informe seus dados para calcular seu IMC e estimar o percentual de
            gordura corporal com dobras cutâneas.
          </p>
        </div>
      </div>

      <div className={styles.calculatorSection}>
        <div className={styles.calculatorSectionHeader}>
          <h2 className={styles.calculatorSectionTitle}>Calculadora de IMC</h2>
          <p className={styles.calculatorSectionText}>
            Preencha peso, altura, idade e sexo.
          </p>
        </div>

        <div className={styles.bmiGrid}>
          <label className={styles.bmiField}>
            <span>Peso (kg)</span>
            <input
              type="number"
              name="weight"
              placeholder="Ex: 80"
              value={bmiForm.weight}
              onChange={onBmiChange}
              min="0"
              step="0.1"
            />
          </label>

          <label className={styles.bmiField}>
            <span>Altura (cm)</span>
            <input
              type="number"
              name="height"
              placeholder="Ex: 173"
              value={bmiForm.height}
              onChange={onBmiChange}
              min="0"
              step="0.1"
            />
          </label>

          <label className={styles.bmiField}>
            <span>Idade</span>
            <input
              type="number"
              name="age"
              placeholder="Ex: 34"
              value={bmiForm.age}
              onChange={onBmiChange}
              min="0"
            />
          </label>

          <label className={styles.bmiField}>
            <span>Sexo</span>
            <select name="sex" value={bmiForm.sex} onChange={onBmiChange}>
              <option value="male">Homem</option>
              <option value="female">Mulher</option>
            </select>
          </label>
        </div>

        <div className={styles.bmiActions}>
          <button
            type="button"
            className={styles.bmiSecondaryButton}
            onClick={onClearBmi}
          >
            Limpar IMC
          </button>
        </div>
      </div>

      <SkinfoldsForm
        age={bmiForm.age}
        sex={bmiForm.sex}
        form={skinfoldsForm}
        onChange={onSkinfoldsChange}
        onClear={onClearSkinfolds}
      />
    </div>
  );
}