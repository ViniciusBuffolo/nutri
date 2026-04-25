"use client";

import AppLayout from "@/components/layout/AppLayout";
import EvaluationSummaryCard from "@/components/evaluations/EvaluationSummaryCard";

export default function EvaluationsPage() {
  return (
    <AppLayout>
      <section className="content">
        <div className="cardGrid cardGridTwo">
          <EvaluationSummaryCard
            icon="⚖️"
            eyebrow="Avaliação"
            title="IMC"
            description="Calcule o índice de massa corporal do paciente a partir de peso, altura, idade e sexo."
            href="/evaluations/bmi"
            label="Abrir IMC"
          />

          <EvaluationSummaryCard
            icon="📏"
            eyebrow="Avaliação"
            title="Dobras Cutâneas"
            description="Estime o percentual de gordura corporal usando protocolos de dobras cutâneas."
            href="/evaluations/skinfolds"
            label="Abrir Dobras"
          />
        </div>
      </section>
    </AppLayout>
  );
}