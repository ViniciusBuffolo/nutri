"use client";

import { useMemo, useState } from "react";
import styles from "@/app/page.module.css";
import TopCanvas from "@/components/layout/TopCanvas";
import TopBar from "@/components/layout/TopBar";
import BottomNav from "@/components/layout/BottomNav";
import SkinfoldsForm from "@/components/skinfolds/SkinfoldsForm";
import SkinfoldsResultCard from "@/components/skinfolds/SkinfoldsResultCard";
import { nutritionSummary } from "@/data/homeData";
import { calculateBodyFat } from "@/utils/skinfoldCalculator";

const INITIAL_FORM = {
  age: "",
  sex: "male",
  protocol: "3",
  chest: "",
  midaxillary: "",
  triceps: "",
  subscapular: "",
  abdomen: "",
  suprailiac: "",
  thigh: "",
};

export default function SkinfoldsPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState(INITIAL_FORM);

  function openCanvas() {
    setIsOpen(true);
  }

  function closeCanvas() {
    setIsOpen(false);
  }

  function handleBaseChange(event) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleSkinfoldsChange(event) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function clearForm() {
    setForm(INITIAL_FORM);
  }

  const result = useMemo(() => {
    return calculateBodyFat({
      sex: form.sex,
      age: form.age,
      protocol: form.protocol,
      measurements: form,
    });
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
                  <h1 className={styles.bmiTitle}>Dobras Cutâneas</h1>
                  <p className={styles.bmiSubtitle}>
                    Informe idade, sexo e as medidas do protocolo para estimar o
                    percentual de gordura corporal.
                  </p>
                </div>
              </div>

              <div className={styles.calculatorSection}>
                <div className={styles.calculatorSectionHeader}>
                  <h2 className={styles.calculatorSectionTitle}>
                    Dados iniciais
                  </h2>
                  <p className={styles.calculatorSectionText}>
                    Preencha idade e sexo antes de informar as dobras.
                  </p>
                </div>

                <div className={styles.bmiGrid}>
                  <label className={styles.bmiField}>
                    <span>Idade</span>
                    <input
                      type="number"
                      name="age"
                      placeholder="Ex: 34"
                      value={form.age}
                      onChange={handleBaseChange}
                      min="0"
                    />
                  </label>

                  <label className={styles.bmiField}>
                    <span>Sexo</span>
                    <select
                      name="sex"
                      value={form.sex}
                      onChange={handleBaseChange}
                    >
                      <option value="male">Homem</option>
                      <option value="female">Mulher</option>
                    </select>
                  </label>
                </div>
              </div>

              <SkinfoldsForm
                age={form.age}
                sex={form.sex}
                form={form}
                onChange={handleSkinfoldsChange}
                onClear={clearForm}
              />
            </div>

            <div className={styles.bmiResultsColumn}>
              <SkinfoldsResultCard result={result} />
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