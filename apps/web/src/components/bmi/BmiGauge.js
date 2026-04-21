"use client";

import GaugeComponent from "react-gauge-component";

function getDynamicMax(value, group) {
  if (group === "older") {
    if (value <= 27) return 30;
    if (value <= 35) return 35;
    if (value <= 40) return 40;
    if (value <= 50) return 50;
    return Math.ceil(value / 10) * 10;
  }

  if (group === "child") {
    if (value <= 25) return 30;
    if (value <= 40) return 40;
    if (value <= 50) return 50;
    return Math.ceil(value / 10) * 10;
  }

  if (value <= 50) return 50;
  return Math.ceil(value / 10) * 10;
}

function getAdultArcs(maxValue) {
  return [
    {
      limit: Math.min(18.5, maxValue),
      color: "#70c6ef",
      showTick: true,
      tooltip: { text: "Abaixo do peso" },
    },
    {
      limit: Math.min(24.9, maxValue),
      color: "#98d11a",
      showTick: true,
      tooltip: { text: "Peso normal" },
    },
    {
      limit: Math.min(29.9, maxValue),
      color: "#f2b300",
      showTick: true,
      tooltip: { text: "Sobrepeso" },
    },
    {
      limit: Math.min(34.9, maxValue),
      color: "#f39a12",
      showTick: true,
      tooltip: { text: "Obesidade grau I" },
    },
    {
      limit: Math.min(39.9, maxValue),
      color: "#f0623c",
      showTick: true,
      tooltip: { text: "Obesidade grau II" },
    },
    {
      color: "#e3362c",
      tooltip: { text: "Obesidade grau III" },
    },
  ];
}

function getAdultTicks(maxValue) {
  return [
    { value: 10 },
    ...(maxValue >= 18.5 ? [{ value: 18.5 }] : []),
    ...(maxValue >= 24.9 ? [{ value: 24.9 }] : []),
    ...(maxValue >= 29.9 ? [{ value: 29.9 }] : []),
    ...(maxValue >= 34.9 ? [{ value: 34.9 }] : []),
    ...(maxValue >= 39.9 ? [{ value: 39.9 }] : []),
    { value: maxValue },
  ];
}

function getOlderArcs() {
  return [
    {
      limit: 22,
      color: "#70c6ef",
      showTick: true,
      tooltip: { text: "Baixo peso" },
    },
    {
      limit: 27,
      color: "#98d11a",
      showTick: true,
      tooltip: { text: "Peso adequado" },
    },
    {
      color: "#f39a12",
      tooltip: { text: "Sobrepeso" },
    },
  ];
}

function getOlderTicks(maxValue) {
  return [{ value: 10 }, { value: 22 }, { value: 27 }, { value: maxValue }];
}

function getChildArcs(maxValue) {
  return [
    {
      limit: Math.min(18.5, maxValue),
      color: "#70c6ef",
      showTick: true,
      tooltip: { text: "Avaliação infantil" },
    },
    {
      limit: Math.min(25, maxValue),
      color: "#98d11a",
      showTick: true,
      tooltip: { text: "Interpretação por idade e sexo" },
    },
    {
      color: "#f2b300",
      tooltip: { text: "Usar curvas pediátricas" },
    },
  ];
}

function getChildTicks(maxValue) {
  return [
    { value: 10 },
    ...(maxValue >= 18.5 ? [{ value: 18.5 }] : []),
    ...(maxValue >= 25 ? [{ value: 25 }] : []),
    { value: maxValue },
  ];
}

function getPointerColor(tone, group, fallbackColor) {
  if (group === "child") return fallbackColor || "#98d11a";
  if (tone === "under") return "#70c6ef";
  if (tone === "normal") return "#98d11a";
  if (tone === "over") return "#f2b300";
  if (tone === "obesity1") return "#f39a12";
  if (tone === "obesity2") return "#f0623c";
  if (tone === "obesity3") return "#e3362c";
  return fallbackColor || "#98d11a";
}

function getGaugeConfig(result) {
  const rawValue = Number(
    result?.numericBmi || result?.value || result?.bmi || 0
  );

  const value = Number.isFinite(rawValue) && rawValue > 0 ? rawValue : 0;
  const group = result?.group || "adult";
  const tone = result?.tone || "normal";
  const badgeColor = result?.color || "#98d11a";

  const minValue = 10;
  const maxValue = getDynamicMax(value || 40, group);
  const pointerColor = getPointerColor(tone, group, badgeColor);

  let subArcs = [];
  let ticks = [];

  if (group === "older") {
    subArcs = getOlderArcs();
    ticks = getOlderTicks(maxValue);
  } else if (group === "child") {
    subArcs = getChildArcs(maxValue);
    ticks = getChildTicks(maxValue);
  } else {
    subArcs = getAdultArcs(maxValue);
    ticks = getAdultTicks(maxValue);
  }

  return {
    value,
    minValue,
    maxValue,
    pointerColor,
    subArcs,
    ticks,
  };
}

export default function BmiGauge({ result }) {
  const { value, minValue, maxValue, pointerColor, subArcs, ticks } =
    getGaugeConfig(result);

  const gaugeKey = JSON.stringify({
    group: result?.group || "adult",
    minValue,
    maxValue,
    value,
    tone: result?.tone || "",
    label: result?.label || "",
    color: result?.color || "",
    ticks: ticks.map((item) => item.value),
    arcs: subArcs.map((item) => item.limit ?? "end"),
  });

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "420px",
        margin: "0 auto",
      }}
    >
      <GaugeComponent
        key={gaugeKey}
        type="semicircle"
        value={value}
        minValue={minValue}
        maxValue={maxValue}
        arc={{
          width: 0.35,
          padding: 0,
          cornerRadius: 0,
          subArcs,
        }}
        pointer={{
          type: "needle",
          color: pointerColor,
          length: 0.62,
          width: 7,
          elastic: false,
        }}
        labels={{
          valueLabel: {
            formatTextValue: (currentValue) =>
              `${Number(currentValue).toFixed(1)}`,
            style: {
              fontSize: "26px",
              fill: "#2f3133",
              fontWeight: "700",
            },
          },
          tickLabels: {
            type: "outer",
            ticks,
            defaultTickValueConfig: {
              formatTextValue: (tickValue) => `${tickValue}`,
              style: {
                fontSize: "11px",
                fill: "#7a7d81",
              },
            },
            defaultTickLineConfig: {
              color: "#b8bec6",
              length: 6,
              width: 1,
              distanceFromArc: 3,
            },
          },
        }}
      />
    </div>
  );
}