"use client";

import { useMemo, useState } from "react";
import styles from "@/app/page.module.css";
import BmiResultCard from "./bmi/BmiResultCard";
import SkinfoldsResultCard from "./skinfolds/SkinfoldsResultCard";
import { buildBmiResult } from "@/utils/healthCalculator";
import { calculateBodyFat } from "@/utils/skinfoldCalculator";
import CalculatorFormCard from "./CalculatorFormCard";

const INITIAL_BMI_FORM = {
  weight: "",
  height: "",
  age: "",
  sex: "male",
};

const INITIAL_SKINFOLDS_FORM = {
  protocol: "3",
  chest: "",
  midaxillary: "",
  triceps: "",
  subscapular: "",
  abdomen: "",
  suprailiac: "",
  thigh: "",
};

export default function CalculatorContent() {
  const [bmiForm, setBmiForm] = useState(INITIAL_BMI_FORM);

  const [skinfoldsForm, setSkinfoldsForm] = useState(INITIAL_SKINFOLDS_FORM);

  function handleBmiChange(event) {
    const { name, value } = event.target;

    setBmiForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleSkinfoldsChange(event) {
    const { name, value } = event.target;

    setSkinfoldsForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function clearAllForms() {
    setBmiForm(INITIAL_BMI_FORM);
    setSkinfoldsForm(INITIAL_SKINFOLDS_FORM);
  }

  const bmiResult = useMemo(() => {
    return buildBmiResult(bmiForm);
  }, [bmiForm]);

  const skinfoldsResult = useMemo(() => {
    return calculateBodyFat({
      sex: bmiForm.sex,
      age: bmiForm.age,
      protocol: skinfoldsForm.protocol,
      measurements: skinfoldsForm,
    });
  }, [bmiForm.sex, bmiForm.age, skinfoldsForm]);

  return (
    <section className={styles.content}>
      <div className={styles.bmiWrapper}>
        <CalculatorFormCard
          bmiForm={bmiForm}
          onBmiChange={handleBmiChange}
          skinfoldsForm={skinfoldsForm}
          onSkinfoldsChange={handleSkinfoldsChange}
        />

        <div className={styles.bmiResultsColumn}>
          <BmiResultCard result={bmiResult} />
          <SkinfoldsResultCard result={skinfoldsResult} />
        </div>
      </div>

      <div className={styles.bmiActions}>
        <button
          type="button"
          className={styles.bmiSecondaryButton}
          onClick={clearAllForms}
        >
          Limpar tudo
        </button>
      </div>
    </section>
  );
}