"use client";

import { useMemo, useState } from "react";
import styles from "@/app/page.module.css";
import TopCanvas from "@/components/layout/TopCanvas";
import TopBar from "@/components/layout/TopBar";
import BottomNav from "@/components/layout/BottomNav";
import EvaluationTabs from "@/components/evaluations/EvaluationTabs";
import BmiForm from "@/components/bmi/BmiForm";
import BmiResultCard from "@/components/bmi/BmiResultCard";
import { nutritionSummary } from "@data/homeData";
import { buildBmiResult } from "@utils/healthCalculator";

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
          <EvaluationTabs activeTab="bmi" />

          <div className={styles.bmiWrapper}>
            <BmiForm form={form} onChange={handleChange} onClear={clearForm} />

            <div className={styles.bmiResultsColumn}>
              <BmiResultCard result={result} />
            </div>
          </div>
        </section>
      </section>

      <BottomNav />
    </main>
  );
}