"use client";

import styles from "@/app/page.module.css";

function getProtocolConfig(age, sex, protocol) {
  const ageNumber = Number(age);

  if (!age || Number.isNaN(ageNumber)) {
    return {
      title: "Dobras Cutâneas",
      description: "Informe idade e sexo para liberar o protocolo correto.",
      fields: [],
      allowProtocolChoice: false,
      isChild: false,
    };
  }

  if (ageNumber < 18) {
    return {
      title: "Dobras Cutâneas - Criança / Adolescente",
      description:
        "Para menores de 18 anos, este exemplo usa protocolo simplificado de 2 dobras.",
      fields: [
        { name: "triceps", label: "Tríceps (mm)", placeholder: "Ex: 12" },
        {
          name: "subscapular",
          label: "Subescapular (mm)",
          placeholder: "Ex: 10",
        },
      ],
      allowProtocolChoice: false,
      isChild: true,
    };
  }

  if (protocol === "7") {
    return {
      title:
        sex === "male"
          ? "Dobras Cutâneas - Homem Adulto (7 dobras)"
          : "Dobras Cutâneas - Mulher Adulta (7 dobras)",
      description:
        "Protocolo com 7 dobras: peitoral, axilar média, tríceps, subescapular, abdominal, supra-ilíaca e coxa.",
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
      isChild: false,
    };
  }

  if (sex === "male") {
    return {
      title: "Dobras Cutâneas - Homem Adulto (3 dobras)",
      description: "Protocolo com 3 dobras: peitoral, abdominal e coxa.",
      fields: [
        { name: "chest", label: "Peitoral (mm)", placeholder: "Ex: 8" },
        { name: "abdomen", label: "Abdominal (mm)", placeholder: "Ex: 18" },
        { name: "thigh", label: "Coxa (mm)", placeholder: "Ex: 14" },
      ],
      allowProtocolChoice: true,
      isChild: false,
    };
  }

  return {
    title: "Dobras Cutâneas - Mulher Adulta (3 dobras)",
    description: "Protocolo com 3 dobras: tríceps, supra-ilíaca e coxa.",
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
    isChild: false,
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
        <>
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

          <div className={styles.bmiActions}>
            <button
              type="button"
              className={styles.bmiSecondaryButton}
              onClick={onClear}
            >
              Limpar Dobras
            </button>
          </div>
        </>
      ) : (
        <p className={styles.bmiHelperText}>
          Primeiro preencha idade e sexo na calculadora principal.
        </p>
      )}
    </div>
  );
}