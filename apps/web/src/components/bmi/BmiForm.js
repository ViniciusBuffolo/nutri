"use client";

import Card from "@ui/shared/Card";
import Button from "@ui/shared/Button";
import SectionTitle from "@ui/shared/SectionTitle";

export default function BmiForm({ form, onChange, onClear }) {
  return (
    <Card className="contentCard">
      <div className="contentCardHeader">
        <SectionTitle
          eyebrow="Health"
          title="Calculadora de IMC"
          description="Informe os dados para calcular o IMC e visualizar a classificação correspondente."
          eyebrowClassName="sectionEyebrow"
          titleClassName="sectionTitle"
          descriptionClassName="sectionTextMuted"
        />
      </div>

      <form className="form">
        <div className="contentCardBody">
          <div className="formSection">
            <div className="formSectionHeader">
              <h2 className="sectionTitle">Dados para o cálculo</h2>
              <p className="sectionTextMuted">
                Preencha peso, altura, idade e sexo.
              </p>
            </div>

            <div className="cardGrid cardGridTwo">
              <label className="inputGroup cardGridItem">
                <span>Peso (kg)</span>
                <input
                  className="inputLine"
                  type="number"
                  name="weight"
                  placeholder="Ex: 80"
                  value={form.weight}
                  onChange={onChange}
                  min="0"
                  step="0.1"
                />
              </label>

              <label className="inputGroup cardGridItem">
                <span>Altura (cm)</span>
                <input
                  className="inputLine"
                  type="number"
                  name="height"
                  placeholder="Ex: 173"
                  value={form.height}
                  onChange={onChange}
                  min="0"
                  step="0.1"
                />
              </label>

              <label className="inputGroup cardGridItem">
                <span>Idade</span>
                <input
                  className="inputLine"
                  type="number"
                  name="age"
                  placeholder="Ex: 34"
                  value={form.age}
                  onChange={onChange}
                  min="0"
                />
              </label>

              <label className="inputGroup cardGridItem">
                <span>Sexo</span>
                <select
                  className="inputLine"
                  name="sex"
                  value={form.sex}
                  onChange={onChange}
                >
                  <option value="male">Homem</option>
                  <option value="female">Mulher</option>
                </select>
              </label>
            </div>
          </div>
        </div>

        {onClear ? (
          <div className="contentCardFooter">
            <Button
              className="formSecondaryButton"
              variant="secondary"
              onClick={onClear}
              type="button"
            >
              Limpar IMC
            </Button>
          </div>
        ) : null}
      </form>
    </Card>
  );
}