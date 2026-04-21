"use client";

import styles from "@/app/page.module.css";
import Card from "@/components/shared/Card";
import Button from "@/components/shared/Button";
import SectionTitle from "@/components/shared/SectionTitle";

function getProtocolConfig(age, sex, protocol) {
  const ageNumber = Number(age);

  if (!age || Number.isNaN(ageNumber)) {
    return {
      title: "Dobras Cutâneas",
      description: "Preencha idade e sexo para liberar o protocolo.",
      fields: [],
      allowProtocolChoice: false,
    };
  }

  if (ageNumber < 18) {
    return {
      title: "Dobras Cutâneas - Criança / Adolescente",
      description: "Protocolo simplificado de 2 dobras.",
      fields: [
        { name: "triceps", label: "Tríceps (mm)", placeholder: "Ex: 12" },
        {
          name: "subscapular",
          label: "Subescapular (mm)",
          placeholder: "Ex: 10",
        },
      ],
      allowProtocolChoice: false,
    };
  }

  if (protocol === "7") {
    return {
      title:
        sex === "male"
          ? "Dobras Cutâneas - Homem Adulto (7 dobras)"
          : "Dobras Cutâneas - Mulher Adulta (7 dobras)",
      description:
        "Peitoral, axilar média, tríceps, subescapular, abdominal, supra-ilíaca e coxa.",
      fields: [
        { name: "chest", label: "Peitoral (mm)", placeholder: "Ex: 8" },
        {
          name: "midaxillary",
          label: "Axilar média (mm)",
          placeholder: "Ex: 10",
        },
        { name: "triceps", label: "Tríceps (mm)", placeholder: "Ex: 12" },
        {
          name: "subscapular",
          label: "Subescapular (mm)",
          placeholder: "Ex: 11",
        },
        { name: "abdomen", label: "Abdominal (mm)", placeholder: "Ex: 18" },
        {
          name: "suprailiac",
          label: "Supra-ilíaca (mm)",
          placeholder: "Ex: 14",
        },
        { name: "thigh", label: "Coxa (mm)", placeholder: "Ex: 20" },
      ],
      allowProtocolChoice: true,
    };
  }

  if (sex === "male") {
    return {
      title: "Dobras Cutâneas - Homem Adulto (3 dobras)",
      description: "Peitoral, abdominal e coxa.",
      fields: [
        { name: "chest", label: "Peitoral (mm)", placeholder: "Ex: 8" },
        { name: "abdomen", label: "Abdominal (mm)", placeholder: "Ex: 18" },
        { name: "thigh", label: "Coxa (mm)", placeholder: "Ex: 14" },
      ],
      allowProtocolChoice: true,
    };
  }

  return {
    title: "Dobras Cutâneas - Mulher Adulta (3 dobras)",
    description: "Tríceps, supra-ilíaca e coxa.",
    fields: [
      { name: "triceps", label: "Tríceps (mm)", placeholder: "Ex: 16" },
      {
        name: "suprailiac",
        label: "Supra-ilíaca (mm)",
        placeholder: "Ex: 14",
      },
      { name: "thigh", label: "Coxa (mm)", placeholder: "Ex: 20" },
    ],
    allowProtocolChoice: true,
  };
}

export default function SkinfoldsForm({
  age,
  sex,
  form,
  onChange,
  onClear,
}) {
  const config = getProtocolConfig(age, sex, form.protocol);

  return (
    <Card className={styles.bmiCard}>
      <div className={styles.bmiHeader}>
        <SectionTitle
          eyebrow="Health"
          title="Dobras Cutâneas"
          description="Preencha os dados iniciais e as medidas do protocolo."
          eyebrowClassName={styles.bmiEyebrow}
          titleClassName={styles.bmiTitle}
          descriptionClassName={styles.bmiSubtitle}
        />
      </div>

      <div className={styles.calculatorSection}>
        <div className={styles.calculatorSectionHeader}>
          <h2 className={styles.calculatorSectionTitle}>Dados Iniciais</h2>
        </div>

        <div className={styles.bmiGrid}>
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

        {onClear ? (
          <div className={styles.bmiActions}>
            <Button className={styles.bmiSecondaryButton} onClick={onClear}>
              Limpar dados
            </Button>
          </div>
        ) : null}
      </div>

      <div className={styles.calculatorSection}>
        <div className={styles.calculatorSectionHeader}>
          <h2 className={styles.calculatorSectionTitle}>{config.title}</h2>
          <p className={styles.calculatorSectionText}>{config.description}</p>
        </div>

        {config.allowProtocolChoice && (
          <div className={styles.bmiGrid}>
            <label className={styles.bmiField}>
              <span>Protocolo</span>
              <select name="protocol" value={form.protocol} onChange={onChange}>
                <option value="3">3 dobras</option>
                <option value="7">7 dobras</option>
              </select>
            </label>
          </div>
        )}

        {config.fields.length > 0 ? (
          <div className={styles.bmiGrid}>
            {config.fields.map((field) => (
              <label key={field.name} className={styles.bmiField}>
                <span>{field.label}</span>
                <input
                  type="number"
                  name={field.name}
                  placeholder={field.placeholder}
                  value={form[field.name] || ""}
                  onChange={onChange}
                  min="0"
                  step="0.1"
                />
              </label>
            ))}
          </div>
        ) : (
          <p className={styles.bmiHelperText}>
            Preencha idade e sexo para continuar.
          </p>
        )}
      </div>
    </Card>
  );
}