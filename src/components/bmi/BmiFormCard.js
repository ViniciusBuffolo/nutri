"use client";

import styles from "@/app/page.module.css";

export default function BmiFormCard({ form, onChange, onClear }) {
  return (
    <div className={styles.bmiCard}>
      <div className={styles.bmiHeader}>
        <div>
          <p className={styles.bmiEyebrow}>Health</p>
          <h1 className={styles.bmiTitle}>Calculadora de IMC</h1>
          <p className={styles.bmiSubtitle}>
            Informe seus dados para calcular seu IMC e visualizar a
            classificação por faixa etária.
          </p>
        </div>
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

      <div className={styles.bmiActions}>
        <button
          type="button"
          className={styles.bmiPrimaryButton}
          onClick={() => {}}
        >
          Calcular
        </button>

        <button
          type="button"
          className={styles.bmiSecondaryButton}
          onClick={onClear}
        >
          Limpar
        </button>
      </div>
    </div>
  );
}