"use client";

import { useMemo, useState } from "react";

export default function Home() {
  const [idade, setIdade] = useState("");
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [mensagemErro, setMensagemErro] = useState("");

  const resultado = useMemo(() => {
    const idadeNumero = parseInt(idade, 10);
    const pesoNumero = parseFloat(String(peso).replace(",", "."));
    const alturaNumero = parseHeightDigitsToMeters(altura);

    if (!idade && !peso && !altura) return null;

    if (
      !idadeNumero ||
      !pesoNumero ||
      !alturaNumero ||
      idadeNumero <= 0 ||
      pesoNumero <= 0 ||
      alturaNumero <= 0
    ) {
      return null;
    }

    const imc = pesoNumero / (alturaNumero * alturaNumero);
    const imcFormatado = imc.toFixed(2);

    if (idadeNumero >= 20) {
      return {
        imc: imcFormatado,
        tipo: "adulto",
        classificacao: getAdultClassification(imc),
        observacao:
          "Para adultos, a classificação do IMC segue as faixas padrão.",
      };
    }

    return {
      imc: imcFormatado,
      tipo: "infantil",
      classificacao: "Avaliação por idade e sexo",
      observacao:
        "Para crianças e adolescentes, o IMC deve ser interpretado com curvas de crescimento específicas por idade e sexo.",
    };
  }, [idade, peso, altura]);

  function handleSubmit(e) {
    e.preventDefault();

    const idadeNumero = parseInt(idade, 10);
    const pesoNumero = parseFloat(String(peso).replace(",", "."));
    const alturaNumero = parseHeightDigitsToMeters(altura);

    if (!idadeNumero || idadeNumero <= 0) {
      setMensagemErro("Informe uma idade válida.");
      return;
    }

    if (!pesoNumero || pesoNumero <= 0) {
      setMensagemErro("Informe um peso válido.");
      return;
    }

    if (!alturaNumero || alturaNumero <= 0) {
      setMensagemErro("Informe uma altura válida.");
      return;
    }

    setMensagemErro("");
  }

  function limparCampos() {
    setIdade("");
    setPeso("");
    setAltura("");
    setMensagemErro("");
  }

  function handleAlturaChange(e) {
    const apenasNumeros = e.target.value.replace(/\D/g, "").slice(0, 3);
    setAltura(apenasNumeros);
  }

  return (
    <>
      <main className="page">
        <section className="card">
          <div className="header">
            <span className="badge">App simples de nutrição</span>

            <h1>Calculadora de IMC</h1>

            <p>
              Informe idade, peso e altura. O sistema calcula o IMC e mostra o
              resultado. Para menores de 20 anos, a interpretação precisa levar
              em conta idade e sexo.
            </p>
          </div>

          <div className="contentGrid">
            <div className="panel">
              <h2>1. Dados que você deve fornecer</h2>

              <form onSubmit={handleSubmit} className="form">
                <div className="field">
                  <label htmlFor="idade">Idade</label>
                  <input
                    id="idade"
                    type="number"
                    placeholder="Ex: 34"
                    value={idade}
                    onChange={(e) => setIdade(e.target.value)}
                  />
                </div>

                <div className="field">
                  <label htmlFor="peso">Peso (kg)</label>
                  <input
                    id="peso"
                    type="number"
                    step="0.1"
                    placeholder="Ex: 80"
                    value={peso}
                    onChange={(e) => setPeso(e.target.value)}
                  />
                </div>

                <div className="field">
                  <label htmlFor="altura">Altura (m)</label>
                  <input
                    id="altura"
                    type="text"
                    inputMode="numeric"
                    placeholder="Ex: 175"
                    value={altura}
                    onChange={handleAlturaChange}
                  />
                  <p className="helper">
                    Digite apenas números. Exemplo: 175 = 1,75 m
                  </p>
                </div>

                {mensagemErro && <p className="error">{mensagemErro}</p>}

                <div className="buttonRow">
                  <button type="submit" className="primaryButton">
                    Calcular IMC
                  </button>

                  <button
                    type="button"
                    onClick={limparCampos}
                    className="secondaryButton"
                  >
                    Limpar
                  </button>
                </div>
              </form>
            </div>

            <div className="rightColumn">
              <div className="panel">
                <h2>2. Cálculo</h2>

                <p className="textMuted">Fórmula usada:</p>

                <div className="formulaBox">
                  IMC = peso / (altura × altura)
                </div>

                <p className="textMuted exampleText">
                  Exemplo: 80 / (1,75 × 1,75)
                </p>
              </div>

              <div className="panel">
                <h2>3. Resultado</h2>

                {resultado ? (
                  <div className="resultGrid">
                    <div className="resultBox">
                      <p className="resultLabel">Seu IMC</p>
                      <strong className="resultNumber">{resultado.imc}</strong>
                    </div>

                    <div className="classBox">
                      <p className="resultLabel">Classificação</p>
                      <strong className="resultText">
                        {resultado.classificacao}
                      </strong>
                    </div>

                    <div className="obsBox">
                      <p>{resultado.observacao}</p>
                    </div>
                  </div>
                ) : (
                  <p className="textMuted">
                    Preencha idade, peso e altura para visualizar seu resultado.
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="panel footerPanel">
            <h2>Faixas de referência para adultos</h2>

            <div className="rangeGrid">
              <div className="rangeCard">
                <strong>Abaixo de 18.5</strong>
                <span>Abaixo do peso</span>
              </div>

              <div className="rangeCard">
                <strong>18.5 a 24.9</strong>
                <span>Peso normal</span>
              </div>

              <div className="rangeCard">
                <strong>25 a 29.9</strong>
                <span>Sobrepeso</span>
              </div>

              <div className="rangeCard">
                <strong>30 a 34.9</strong>
                <span>Obesidade grau I</span>
              </div>

              <div className="rangeCard">
                <strong>35 a 39.9</strong>
                <span>Obesidade grau II</span>
              </div>

              <div className="rangeCard">
                <strong>40 ou mais</strong>
                <span>Obesidade grau III</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        .page {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 16px;
          background: linear-gradient(
            135deg,
            rgba(34, 197, 94, 0.1),
            rgba(59, 130, 246, 0.1)
          );
        }

        .card {
          width: 100%;
          max-width: 980px;
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 24px;
          padding: 28px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
        }

        .header {
          margin-bottom: 24px;
        }

        .badge {
          display: inline-block;
          padding: 8px 12px;
          border-radius: 999px;
          background: var(--badge-bg);
          color: var(--badge-text);
          font-size: 0.9rem;
          font-weight: 700;
          margin-bottom: 14px;
        }

        .header h1 {
          font-size: 2rem;
          line-height: 1.2;
          margin-bottom: 10px;
          color: var(--foreground);
        }

        .header p {
          font-size: 1rem;
          color: var(--muted);
          line-height: 1.6;
        }

        .contentGrid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 20px;
        }

        .rightColumn {
          display: grid;
          gap: 20px;
        }

        .panel {
          background: var(--panel);
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 22px;
        }

        .panel h2 {
          font-size: 1.15rem;
          margin-bottom: 16px;
          color: var(--foreground);
        }

        .form {
          display: grid;
          gap: 16px;
        }

        .field {
          display: grid;
          gap: 8px;
        }

        .field label {
          display: block;
          font-weight: 600;
          color: var(--foreground);
        }

        .field input {
          width: 100%;
          padding: 14px 16px;
          border-radius: 14px;
          border: 1px solid var(--border);
          background: var(--input-bg);
          color: var(--foreground);
          outline: none;
          font-size: 1rem;
        }

        .helper {
          font-size: 0.9rem;
          color: var(--muted);
          line-height: 1.5;
        }

        .error {
          color: #dc2626;
          font-size: 0.95rem;
          font-weight: 600;
        }

        .buttonRow {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .primaryButton,
        .secondaryButton {
          min-height: 48px;
          padding: 14px 18px;
          border-radius: 14px;
          font-weight: 700;
          font-size: 0.98rem;
          cursor: pointer;
          transition: 0.2s ease;
        }

        .primaryButton {
          border: none;
          background: #2563eb;
          color: #ffffff;
          flex: 1;
        }

        .secondaryButton {
          border: 1px solid var(--border);
          background: transparent;
          color: var(--foreground);
          flex: 1;
        }

        .formulaBox {
          padding: 16px;
          border-radius: 16px;
          background: var(--formula-bg);
          color: var(--foreground);
          font-weight: 700;
          text-align: center;
          font-size: 1.05rem;
        }

        .textMuted {
          color: var(--muted);
          line-height: 1.7;
        }

        .exampleText {
          margin-top: 14px;
        }

        .resultGrid {
          display: grid;
          gap: 12px;
        }

        .resultBox {
          padding: 18px;
          border-radius: 16px;
          background: var(--result-bg);
          border: 1px solid var(--border);
        }

        .classBox {
          padding: 16px;
          border-radius: 16px;
          background: var(--class-bg);
          border: 1px solid var(--border);
        }

        .obsBox {
          padding: 16px;
          border-radius: 16px;
          background: var(--card);
          border: 1px solid var(--border);
        }

        .obsBox p {
          color: var(--muted);
          line-height: 1.6;
        }

        .resultLabel {
          font-size: 0.95rem;
          color: var(--muted);
          margin-bottom: 6px;
        }

        .resultNumber {
          font-size: 2rem;
          color: var(--foreground);
        }

        .resultText {
          font-size: 1.1rem;
          color: var(--foreground);
        }

        .footerPanel {
          margin-top: 22px;
        }

        .rangeGrid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 12px;
        }

        .rangeCard {
          display: flex;
          flex-direction: column;
          gap: 6px;
          padding: 14px;
          border-radius: 16px;
          border: 1px solid var(--border);
          background: var(--card);
        }

        .rangeCard strong {
          color: var(--foreground);
        }

        .rangeCard span {
          color: var(--muted);
        }

        @media (max-width: 900px) {
          .contentGrid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .page {
            padding: 12px;
            align-items: stretch;
          }

          .card {
            padding: 18px;
            border-radius: 18px;
          }

          .header h1 {
            font-size: 1.65rem;
          }

          .header p {
            font-size: 0.95rem;
          }

          .panel {
            padding: 16px;
            border-radius: 16px;
          }

          .panel h2 {
            font-size: 1.02rem;
          }

          .field input {
            padding: 13px 14px;
            font-size: 0.98rem;
          }

          .buttonRow {
            flex-direction: column;
          }

          .primaryButton,
          .secondaryButton {
            width: 100%;
          }

          .formulaBox {
            font-size: 0.98rem;
          }

          .resultNumber {
            font-size: 1.75rem;
          }

          .rangeGrid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}

function getAdultClassification(imc) {
  if (imc < 18.5) return "Abaixo do peso";
  if (imc < 25) return "Peso normal";
  if (imc < 30) return "Sobrepeso";
  if (imc < 35) return "Obesidade grau I";
  if (imc < 40) return "Obesidade grau II";
  return "Obesidade grau III";
}

function parseHeightDigitsToMeters(value) {
  if (!value) return 0;

  const digits = String(value).replace(/\D/g, "");
  if (!digits) return 0;

  return Number(digits) / 100;
}