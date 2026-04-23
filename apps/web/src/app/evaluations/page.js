"use client";

import { useState } from "react";
import styles from "@/app/page.module.css";
import TopCanvas from "@/components/layout/TopCanvas";
import TopBar from "@/components/layout/TopBar";
import BottomNav from "@/components/layout/BottomNav";
import EvaluationSummaryCard from "@/components/evaluations/EvaluationSummaryCard";
import EvaluationTabs from "@/components/evaluations/EvaluationTabs";
import { nutritionSummary } from "@data/homeData";

export default function EvaluationsPage() {
  const [isOpen, setIsOpen] = useState(false);

  function openCanvas() {
    setIsOpen(true);
  }

  function closeCanvas() {
    setIsOpen(false);
  }

  return (
    <main className={styles.page}>
      <TopCanvas
        isOpen={isOpen}
        closeCanvas={closeCanvas}
        nutritionSummary={nutritionSummary}
      />

      <section
        className={`${styles.mainContent} ${isOpen ? styles.mainShifted : ""}`}
      >
        {!isOpen && <TopBar onOpen={openCanvas} />}

        <section className={styles.content}>
          <EvaluationTabs activeTab="overview" />

          <div className={styles.bmiWrapper}>
            <EvaluationSummaryCard
              eyebrow="Avaliações"
              title="Módulo de Avaliações"
              description="Escolha uma avaliação para iniciar. Nesta etapa, você pode acessar o cálculo de IMC e a estimativa de gordura corporal por dobras cutâneas."
              primaryHref="/evaluations/bmi"
              primaryLabel="Abrir IMC"
              secondaryHref="/evaluations/skinfolds"
              secondaryLabel="Abrir Dobras Cutâneas"
            />

            <div className={styles.bmiResultsColumn}>
              <EvaluationSummaryCard
                eyebrow="Resumo"
                title="Avaliação Nutricional"
                description="Este módulo será a base para evoluções como histórico por paciente, comparativo entre consultas, gráficos de progresso e integração com planos alimentares."
              />
            </div>
          </div>
        </section>
      </section>

      <BottomNav />
    </main>
  );
}