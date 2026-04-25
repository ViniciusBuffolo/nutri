"use client";

import Card from "@ui/shared/Card";
import Badge from "@ui/shared/Badge";
import EmptyState from "@ui/shared/EmptyState";

export default function SkinfoldsResultCard({ result }) {
  return (
    <Card className="contentCard">
      <p className="sectionEyebrow">Gordura Corporal</p>

      {result ? (
        <>
          <div className="metricHeader">
            <div>
              <div className="metricValue">{result.bodyFat}%</div>
              <div className="metricRangeText">
                Soma das dobras: {result.sum} mm
              </div>
            </div>

            <div className="metricStatusBlock">
              <Badge className="metricBadge" variant="neutral">
                {result.protocol}
              </Badge>

              <h2 className="sectionTitle">{result.category}</h2>
            </div>
          </div>

          <p className="sectionText">
            Dobras usadas: {result.sites.join(", ")}.
          </p>

          <p className="sectionTextMuted">
            O protocolo é definido por idade, sexo e escolha entre 3 ou 7
            dobras quando adulto.
          </p>
        </>
      ) : (
        <EmptyState
          title="Preencha os dados"
          description="Informe idade, sexo e todas as dobras do protocolo selecionado."
          valueClassName="metricEmptyValue"
          titleClassName="sectionTitle"
          descriptionClassName="sectionTextMuted"
        />
      )}
    </Card>
  );
}