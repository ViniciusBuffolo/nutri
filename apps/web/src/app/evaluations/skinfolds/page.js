"use client";

import { useMemo, useState } from "react";
import styles from "@/app/page.module.css";
import TopCanvas from "@/components/layout/TopCanvas";
import TopBar from "@/components/layout/TopBar";
import BottomNav from "@/components/layout/BottomNav";
import EvaluationTabs from "@/components/evaluations/EvaluationTabs";
import SkinfoldsForm from "@/components/skinfolds/SkinfoldsForm";
import SkinfoldsResultCard from "@/components/skinfolds/SkinfoldsResultCard";
import Card from "@/components/shared/Card";
import Button from "@/components/shared/Button";
import SectionTitle from "@/components/shared/SectionTitle";
import { nutritionSummary } from "@data/homeData";
import { calculateBodyFat } from "@utils/skinfoldCalculator";

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

  function handleChange(event) {
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
          <EvaluationTabs activeTab="skinfolds" />

          <div className={styles.bmiWrapper}>
            <div className={styles.bmiResultsColumn} style={{ gap: "16px" }}>
              
              <SkinfoldsForm
                age={form.age}
                sex={form.sex}
                form={form}
                onChange={handleChange}
              />

                  <div className={styles.bmiActions}>
                    <Button onClick={clearForm}>Limpar dados</Button>
                  </div>
            </div>

            <div className={styles.bmiResultsColumn}>
              <SkinfoldsResultCard result={result} />
            </div>
          </div>
        </section>
      </section>

      <BottomNav />
    </main>
  );
}