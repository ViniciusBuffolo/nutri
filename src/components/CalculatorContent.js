"use client";

import { useMemo, useState } from "react";
import styles from "@/app/page.module.css";
import BmiResultCard from "./bmi/BmiResultCard";
import SkinfoldsResultCard from "./skinfolds/SkinfoldsResultCard";
import { buildBmiResult } from "@/utils/healthCalculator";
import { calculateBodyFat } from "@/utils/skinfoldCalculator";
import CalculatorFormCard from "./CalculatorFormCard";

export default function CalculatorContent() {
  const [bmiForm, setBmiForm] = useState({
    weight: "",
    height: "",
    age: "",
    sex: "male",
  });

  const [skinfoldsForm, setSkinfoldsForm] = useState({
    protocol: "3",
    chest: "",
    midaxillary: "",
    triceps: "",
    subscapular: "",
    abdomen: "",
    suprailiac: "",
    thigh: "",
  });

  function handleBmiChange(event) {
    const { name, value } = event.target;

    setBmiForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function clearBmiForm() {
    setBmiForm({
      weight: "",
      height: "",
      age: "",
      sex: "male",
    });
  }

  function handleSkinfoldsChange(event) {
    const { name, value } = event.target;

    setSkinfoldsForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function clearSkinfoldsForm() {
    setSkinfoldsForm({
      protocol: "3",
      chest: "",
      midaxillary: "",
      triceps: "",
      subscapular: "",
      abdomen: "",
      suprailiac: "",
      thigh: "",
    });
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
          onClearBmi={clearBmiForm}
          skinfoldsForm={skinfoldsForm}
          onSkinfoldsChange={handleSkinfoldsChange}
          onClearSkinfolds={clearSkinfoldsForm}
        />

        <div className={styles.bmiResultsColumn}>
          <BmiResultCard result={bmiResult} />
          <SkinfoldsResultCard result={skinfoldsResult} />
        </div>
      </div>
    </section>
  );
}