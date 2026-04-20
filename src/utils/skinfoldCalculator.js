function getAgeNumber(age) {
  const ageNumber = Number(age);
  return Number.isNaN(ageNumber) ? null : ageNumber;
}

function getMeasurementValue(value) {
  const parsed = Number(value);
  if (value === "" || value === null || value === undefined) return null;
  return Number.isNaN(parsed) ? null : parsed;
}

function sumMeasurements(measurements, keys) {
  const values = [];

  for (const key of keys) {
    const value = getMeasurementValue(measurements[key]);
    if (value === null) return null;
    values.push(value);
  }

  return values.reduce((total, current) => total + current, 0);
}

function getAdultDensity(sex, protocol, sum, age) {
  if (protocol === "7") {
    if (sex === "male") {
      return (
        1.112 -
        0.00043499 * sum +
        0.00000055 * sum * sum -
        0.00028826 * age
      );
    }

    return (
      1.097 -
      0.00046971 * sum +
      0.00000056 * sum * sum -
      0.00012828 * age
    );
  }

  if (sex === "male") {
    return (
      1.10938 -
      0.0008267 * sum +
      0.0000016 * sum * sum -
      0.0002574 * age
    );
  }

  return (
    1.0994921 -
    0.0009929 * sum +
    0.0000023 * sum * sum -
    0.0001392 * age
  );
}

function getCategory(bodyFat, sex, age) {
  if (age < 18) {
    if (sex === "male") {
      if (bodyFat < 10) return "Baixo";
      if (bodyFat < 20) return "Adequado";
      if (bodyFat < 25) return "Elevado";
      return "Alto";
    }

    if (bodyFat < 16) return "Baixo";
    if (bodyFat < 25) return "Adequado";
    if (bodyFat < 30) return "Elevado";
    return "Alto";
  }

  if (sex === "male") {
    if (bodyFat < 10) return "Muito baixo";
    if (bodyFat < 18) return "Saudável";
    if (bodyFat < 25) return "Moderado";
    return "Alto";
  }

  if (bodyFat < 18) return "Muito baixo";
  if (bodyFat < 25) return "Saudável";
  if (bodyFat < 32) return "Moderado";
  return "Alto";
}

export function calculateBodyFat({ sex, age, measurements }) {
  const ageNumber = getAgeNumber(age);
  if (ageNumber === null) return null;

  if (ageNumber < 18) {
    const keys = ["triceps", "subscapular"];
    const sum = sumMeasurements(measurements, keys);
    if (sum === null) return null;

    const bodyFatValue =
      sex === "male"
        ? 1.21 * sum - 0.008 * sum * sum - 1.7
        : 1.33 * sum - 0.013 * sum * sum - 2.5;

    return {
      protocol: "Criança / Adolescente (2 dobras)",
      bodyFat: bodyFatValue.toFixed(1),
      sum: Number(sum.toFixed(1)),
      sites: ["Tríceps", "Subescapular"],
      category: getCategory(bodyFatValue, sex, ageNumber),
    };
  }

  const protocol = measurements.protocol === "7" ? "7" : "3";

  let keys = [];
  let protocolLabel = "";

  if (protocol === "7") {
    keys = [
      "chest",
      "midaxillary",
      "triceps",
      "subscapular",
      "abdomen",
      "suprailiac",
      "thigh",
    ];

    protocolLabel =
      sex === "male"
        ? "Homem Adulto (7 dobras)"
        : "Mulher Adulta (7 dobras)";
  } else if (sex === "male") {
    keys = ["chest", "abdomen", "thigh"];
    protocolLabel = "Homem Adulto (3 dobras)";
  } else {
    keys = ["triceps", "suprailiac", "thigh"];
    protocolLabel = "Mulher Adulta (3 dobras)";
  }

  const sum = sumMeasurements(measurements, keys);
  if (sum === null) return null;

  const density = getAdultDensity(sex, protocol, sum, ageNumber);
  if (!density || density <= 0) return null;

  const bodyFatValue = 495 / density - 450;

  return {
    protocol: protocolLabel,
    bodyFat: bodyFatValue.toFixed(1),
    sum: Number(sum.toFixed(1)),
    sites: buildSitesLabel(keys),
    category: getCategory(bodyFatValue, sex, ageNumber),
  };
}

function buildSitesLabel(keys) {
  const map = {
    chest: "Peitoral",
    midaxillary: "Axilar média",
    triceps: "Tríceps",
    subscapular: "Subescapular",
    abdomen: "Abdominal",
    suprailiac: "Supra-ilíaca",
    thigh: "Coxa",
  };

  return keys.map((key) => map[key]);
}