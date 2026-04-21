"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "@/app/page.module.css";
import TopCanvas from "@/components/layout/TopCanvas";
import TopBar from "@/components/layout/TopBar";
import BottomNav from "@/components/layout/BottomNav";
import { nutritionSummary } from "@/data/homeData";

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
          <div className={styles.bmiWrapper}>
            <div className={styles.bmiCard}>
              <div className={styles.bmiHeader}>
                <div>
                  <p className={styles.bmiEyebrow}>Avaliações</p>
                  <h1 className={styles.bmiTitle}>Módulo de Avaliações</h1>
                  <p className={styles.bmiSubtitle}>
                    Escolha uma calculadora para iniciar a avaliação do paciente.
                    Nesta etapa, você poderá acessar o cálculo de IMC e a
                    estimativa de percentual de gordura por dobras cutâneas.
                  </p>
                </div>
              </div>

              <div className={styles.calculatorSection}>
                <div className={styles.calculatorSectionHeader}>
                  <h2 className={styles.calculatorSectionTitle}>
                    Calculadora de IMC
                  </h2>
                  <p className={styles.calculatorSectionText}>
                    Avalie peso, altura, idade e sexo para obter o índice de
                    massa corporal com interpretação por faixa.
                  </p>
                </div>

                <div className={styles.bmiActions}>
                  <Link
                    href="/evaluations/bmi"
                    className={styles.bmiSecondaryButton}
                  >
                    Abrir IMC
                  </Link>
                </div>
              </div>

              <div className={styles.calculatorSection}>
                <div className={styles.calculatorSectionHeader}>
                  <h2 className={styles.calculatorSectionTitle}>
                    Dobras Cutâneas
                  </h2>
                  <p className={styles.calculatorSectionText}>
                    Informe as medidas das dobras para estimar o percentual de
                    gordura corporal com base no protocolo selecionado.
                  </p>
                </div>

                <div className={styles.bmiActions}>
                  <Link
                    href="/evaluations/skinfolds"
                    className={styles.bmiSecondaryButton}
                  >
                    Abrir Dobras Cutâneas
                  </Link>
                </div>
              </div>
            </div>

            <div className={styles.bmiResultsColumn}>
              <div className={styles.bmiResultCard}>
                <p className={styles.bmiEyebrow}>Resumo</p>
                <h2 className={styles.bmiResultTitle}>Avaliação Nutricional</h2>
                <p className={styles.bmiResultText}>
                  Este módulo será a base para futuras evoluções do sistema,
                  como histórico por paciente, comparativo entre consultas,
                  gráficos de evolução e integração com planos alimentares.
                </p>
                <p className={styles.bmiHelperText}>
                  Por enquanto, use os atalhos ao lado para navegar entre as
                  avaliações disponíveis.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>

      <BottomNav />
    </main>
  );
}