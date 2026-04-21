"use client";

import styles from "@/app/page.module.css";

export default function BmiForm({ form, onChange, onClear }) {
  return (
    <div className={styles.bmiCard}>
      <div className={styles.bmiHeader}>
        <div>
          <p className={styles.bmiEyebrow}>Health</p>
          <h1 className={styles.bmiTitle}>Calculadora de IMC</h1>
          <p className={styles.bmiSubtitle}>
            Informe os dados para calcular o IMC e visualizar a classificação
            correspondente.
          </p>
        </div>
      </div>

      <div className={styles.calculatorSection}>
        <div className={styles.calculatorSectionHeader}>
          <h2 className={styles.calculatorSectionTitle}>Dados para o cálculo</h2>
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
              value={form.weight}
              onChange={onChange}
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
              value={form.height}
              onChange={onChange}
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
              value={form.age}
              onChange={onChange}
              min="0"
            />
          </label>

          <label className={styles.bmiField}>
            <span>Sexo</span>
            <select name="sex" value={form.sex} onChange={onChange}>
              <option value="male">Homem</option>
              <option value="female">Mulher</option>
            </select>
          </label>
        </div>

        {onClear ? (
          <div className={styles.bmiActions}>
            <button
              type="button"
              className={styles.bmiSecondaryButton}
              onClick={onClear}
            >
              Limpar IMC
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}