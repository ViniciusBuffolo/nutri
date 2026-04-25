"use client";

import Link from "next/link";
import Button from "@ui/shared/Button";

export default function EvaluationSummaryCard({
  icon = "📋",
  eyebrow = "Avaliação",
  title = "Resumo do módulo",
  description = "Escolha uma das avaliações disponíveis para iniciar.",
  href,
  label = "Abrir",
}) {
  return (
    <article className="contentCard">
      <div className="contentCardHeader">
        <div className="actionCardIcon">{icon}</div>

        <p className="sectionEyebrow">{eyebrow}</p>
        <h2 className="sectionTitle">{title}</h2>
      </div>

      <div className="contentCardBody">
        <p className="sectionText sectionTextMuted">{description}</p>
      </div>

      {href ? (
        <div className="contentCardFooter">
          <Button as={Link} href={href} variant="secondary">
            {label}
          </Button>
        </div>
      ) : null}
    </article>
  );
}