"use client";

import { useMemo, useState } from "react";
import AppLayout from "@/components/layout/AppLayout";
import BmiForm from "@/components/bmi/BmiForm";
import BmiResultCard from "@/components/bmi/BmiResultCard";
import { buildBmiResult } from "@utils/healthCalculator";

const INITIAL_BMI_FORM = {
  weight: "",
  height: "",
  age: "",
  sex: "male",
};

export default function BmiPage() {
  const [form, setForm] = useState(INITIAL_BMI_FORM);

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

  const result = useMemo(() => buildBmiResult(form), [form]);

  return (
    <AppLayout>
      <section className="content">
        <div className="cardGrid cardGridWideLeft">
          <div className="cardGridItem">
            <BmiForm form={form} onChange={handleChange} onClear={clearForm} />
          </div>

          <div className="cardGridItem">
            <BmiResultCard result={result} />
          </div>
        </div>
      </section>
    </AppLayout>
  );
}