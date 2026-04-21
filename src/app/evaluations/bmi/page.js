"use client";

import { useMemo, useState } from "react";
import styles from "@/app/page.module.css";
import TopCanvas from "@/components/layout/TopCanvas";
import TopBar from "@/components/layout/TopBar";
import BottomNav from "@/components/layout/BottomNav";
import BmiResultCard from "@/components/bmi/BmiResultCard";
import { nutritionSummary } from "@/data/homeData";
import { buildBmiResult } from "@/utils/healthCalculator";

const INITIAL_BMI_FORM = {
  weight: "",
  height: "",
  age: "",
  sex: "male",
};

export default function BmiPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState(INITIAL_BMI_FORM);

  function openCanvas() {
    setIsOpen(true);
  }

  function closeCanvas() {
    setIsOpen(false);
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function clearForm() {
    setForm(INITIAL_BMI_FORM);
  }

  const result = useMemo(() => {
    return buildBmiResult(form);
  }, [form]);

  return (
    <main className={styles.page}>
      <TopCanvas
        isOpen={isOpen}
        closeCanvas={closeCanvas}
        nutritionSummary={nutritionSummary}
      />

      <section
        className={`${styles.mainContent} ${isOpen ? styles.mainShifted : ""}`}
      >
        {!isOpen && <TopBar onOpen={openCanvas} />}

        <section className={styles.content}>
          <div className={styles.bmiWrapper}>
            <div className={styles.bmiCard}>
              <div className={styles.bmiHeader}>
                <div>
                  <p className={styles.bmiEyebrow}>Health</p>
                  <h1 className={styles.bmiTitle}>Calculadora de IMC</h1>
                  <p className={styles.bmiSubtitle}>
                    Informe os dados do paciente para calcular o IMC e visualizar
                    a classificação correspondente.
                  </p>
                </div>
              </div>

              <div className={styles.calculatorSection}>
                <div className={styles.calculatorSectionHeader}>
                  <h2 className={styles.calculatorSectionTitle}>
                    Dados para o cálculo
                  </h2>
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
                      min="0"
                    />
                  </label>

                  <label className={styles.bmiField}>
                    <span>Sexo</span>
                    <select name="sex" value={form.sex} onChange={handleChange}>
                      <option value="male">Homem</option>
                      <option value="female">Mulher</option>
                    </select>
                  </label>
                </div>
              </div>
            </div>

            <div className={styles.bmiResultsColumn}>
              <BmiResultCard result={result} />
            </div>
          </div>

          <div className={styles.bmiActions}>
            <button
              type="button"
              className={styles.bmiSecondaryButton}
              onClick={clearForm}
            >
              Limpar dados
            </button>
          </div>
        </section>
      </section>

      <BottomNav />
    </main>
  );
}