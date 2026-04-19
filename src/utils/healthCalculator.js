export function calculateBmi(weight, heightCm) {
  const heightM = heightCm / 100;

  if (!weight || !heightM || heightM <= 0) return null;

  return weight / (heightM * heightM);
}

export function getAdultClassification(bmi) {
  if (bmi < 18.5) {
    return {
      label: "Abaixo do peso",
      range: "< 18,5",
      tone: "under",
      color: "#70c6ef",
      shortText: "Seu IMC ficou abaixo da faixa considerada saudável.",
    };
  }

  if (bmi < 25) {
    return {
      label: "Peso normal",
      range: "18,5 – 24,9",
      tone: "normal",
      color: "#98d11a",
      shortText: "Seu IMC está dentro da faixa considerada saudável.",
    };
  }

  if (bmi < 30) {
    return {
      label: "Sobrepeso",
      range: "25 – 29,9",
      tone: "over",
      color: "#f2b300",
      shortText: "Seu IMC ficou acima da faixa normal.",
    };
  }

  if (bmi < 35) {
    return {
      label: "Obesidade grau I",
      range: "30 – 34,9",
      tone: "obesity1",
      color: "#f39a12",
      shortText: "Seu IMC está na faixa de obesidade grau I.",
    };
  }

  if (bmi < 40) {
    return {
      label: "Obesidade grau II",
      range: "35 – 39,9",
      tone: "obesity2",
      color: "#f0623c",
      shortText: "Seu IMC está na faixa de obesidade grau II.",
    };
  }

  return {
    label: "Obesidade grau III",
    range: "≥ 40",
    tone: "obesity3",
    color: "#e3362c",
    shortText: "Seu IMC está na faixa de obesidade grau III.",
  };
}

export function getOlderAdultClassification(bmi) {
  if (bmi < 22) {
    return {
      label: "Baixo peso",
      range: "< 22",
      tone: "under",
      color: "#70c6ef",
      shortText: "Para idosos, o valor ficou abaixo da faixa adequada.",
    };
  }

  if (bmi <= 27) {
    return {
      label: "Peso adequado",
      range: "22 – 27",
      tone: "normal",
      color: "#98d11a",
      shortText: "Para idosos, o valor está dentro da faixa adequada.",
    };
  }

  return {
    label: "Sobrepeso",
    range: "> 27",
    tone: "over",
    color: "#f39a12",
    shortText: "Para idosos, o valor ficou acima da faixa adequada.",
  };
}

export function buildBmiResult(form) {
  const weight = Number(form.weight);
  const height = Number(form.height);
  const age = Number(form.age);

  if (!weight || !height) return null;

  const bmi = calculateBmi(weight, height);

  if (!bmi || Number.isNaN(bmi)) return null;

  const roundedBmi = bmi.toFixed(1);

  if (age > 0 && age < 18) {
    return {
      group: "child",
      bmi: roundedBmi,
      numericBmi: bmi,
      label: "Avaliação por idade e sexo",
      range: "Percentis",
      tone: "normal",
      color: "#7e8a97",
      shortText:
        "Para crianças e adolescentes, o IMC precisa ser interpretado com curvas por idade e sexo.",
      helperText:
        "O cálculo do IMC é o mesmo, mas a classificação infantil não usa tabela fixa como a de adultos.",
    };
  }

  if (age >= 60) {
    const classification = getOlderAdultClassification(bmi);

    return {
      group: "older",
      bmi: roundedBmi,
      numericBmi: bmi,
      ...classification,
      helperText:
        "Nesta calculadora, idosos usam a faixa < 22, 22–27 e > 27.",
    };
  }

  const classification = getAdultClassification(bmi);

  return {
    group: "adult",
    bmi: roundedBmi,
    numericBmi: bmi,
    ...classification,
    helperText:
      "Nesta calculadora, adultos usam a classificação padrão por faixas de IMC.",
  };
}