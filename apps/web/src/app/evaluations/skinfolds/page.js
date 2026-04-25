"use client";

import { useMemo, useState } from "react";
import AppLayout from "@/components/layout/AppLayout";
import SkinfoldsForm from "@/components/skinfolds/SkinfoldsForm";
import SkinfoldsResultCard from "@/components/skinfolds/SkinfoldsResultCard";
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
  const [form, setForm] = useState(INITIAL_FORM);

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
    <AppLayout>
      <section className="content">
        <div className="cardGrid cardGridWideLeft">
          <div className="cardGridItem">
            <SkinfoldsForm
              age={form.age}
              sex={form.sex}
              form={form}
              onChange={handleChange}
              onClear={clearForm}
            />
          </div>

          <div className="cardGridItem">
            <SkinfoldsResultCard result={result} />
          </div>
        </div>
      </section>
    </AppLayout>
  );
}