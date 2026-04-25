"use client";

import Card from "@ui/shared/Card";
import Badge from "@ui/shared/Badge";
import BmiGauge from "@/components/bmi/BmiGauge";

function getToneClass(tone) {
  switch (tone) {
    case "under":
      return "metricToneInfo";
    case "normal":
      return "metricToneSuccess";
    case "over":
      return "metricToneWarning";
    case "obesity1":
      return "metricToneOrange";
    case "obesity2":
      return "metricToneDanger";
    case "obesity3":
      return "metricToneCritical";
    default:
      return "";
  }
}

function getGroupLabel(group) {
  switch (group) {
    case "child":
      return "Criança / Adolescente";
    case "adult":
      return "Adulto";
    case "older":
      return "Idoso";
    default:
      return "";
  }
}

function getBadgeVariant(tone) {
  switch (tone) {
    case "normal":
      return "success";
    case "under":
    case "over":
    case "obesity1":
    case "obesity2":
    case "obesity3":
      return "neutral";
    default:
      return "default";
  }
}

export default function BmiResultCard({ result }) {
  const resultToneClass = result ? getToneClass(result.tone) : "";
  const groupLabel = result ? getGroupLabel(result.group) : "";

  return (
    <Card className={`contentCard ${resultToneClass}`}>
      <p className="sectionEyebrow">Resultado de IMC</p>

      {result ? (
        <>
          <div className="metricHeader">
            <div>
              <div className="metricValue">{result.bmi}</div>
              <div className="metricRangeText">Faixa atual: {result.range}</div>
            </div>

            <div className="metricStatusBlock">
              {groupLabel ? (
                <Badge
                  className="metricBadge"
                  variant={getBadgeVariant(result.tone)}
                >
                  {groupLabel}
                </Badge>
              ) : null}

              <h2 className="sectionTitle">{result.label}</h2>
            </div>
          </div>

          <BmiGauge result={result} />

          <p className="sectionText">{result.shortText}</p>
          <p className="sectionTextMuted">{result.helperText}</p>
        </>
      ) : (
        <>
          <div className="metricEmptyValue">--</div>
          <h2 className="sectionTitle">Preencha os dados</h2>
          <p className="sectionTextMuted">
            Informe peso e altura para visualizar o cálculo do IMC.
          </p>
        </>
      )}
    </Card>
  );
}