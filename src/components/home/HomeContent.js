"use client";

import { useMemo, useState } from "react";
import styles from "@/app/page.module.css";
import BmiFormCard from "./BmiFormCard";
import BmiGauge from "./BmiGauge";
import BmiResultCard from "./BmiResultCard";
import { buildBmiResult } from "@/utils/healthCalculator";

export default function HomeContent() {
  const [form, setForm] = useState({
    weight: "",
    height: "",
    age: "",
    sex: "male",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function clearForm() {
    setForm({
      weight: "",
      height: "",
      age: "",
      sex: "male",
    });
  }

  const result = useMemo(() => {
    return buildBmiResult(form);
  }, [form]);

  return (
    <section className={styles.content}>
      <div className={styles.bmiWrapper}>
        <BmiFormCard form={form} onChange={handleChange} onClear={clearForm} />
        <BmiGauge result={result} />
        <BmiResultCard result={result} />
      </div>
    </section>
  );
}