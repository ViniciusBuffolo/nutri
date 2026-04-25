import styles from "@/app/styles/devForms.module.css";

export default function DevFormsPage() {
  return (
    <main className="page">
      <section className="content">
        <header className={styles.header}>
          <span className="sectionEyebrow">Dev / UI</span>
          <h1 className="sectionTitle">Form Elements</h1>
          <p className="sectionTextMuted">
            Principais elementos de formulário usando as classes globais.
          </p>
        </header>

        <section className="contentCard">
          <div className="contentCardHeader">
            <h2 className="sectionTitle">Inputs</h2>
          </div>

          <div className="cardGrid cardGridThree">
            <div className="inputGroup">
              <label htmlFor="basic">Basic input</label>
              <input id="basic" className="inputLine" placeholder="Digite algo" />
            </div>

            <div className="inputGroup">
              <label htmlFor="value">Input with value</label>
              <input id="value" className="inputLine" defaultValue="Valor exemplo" />
            </div>

            <div className="inputGroup">
              <label htmlFor="disabled">Disabled input</label>
              <input id="disabled" className="inputLine" placeholder="Disabled" disabled />
            </div>

            <div className="inputGroup">
              <label htmlFor="email">E-mail</label>
              <input id="email" className="inputLine" type="email" placeholder="email@exemplo.com" />
            </div>

            <div className="inputGroup">
              <label htmlFor="password">Password</label>
              <input id="password" className="inputLine" type="password" defaultValue="12345678" />
            </div>

            <div className="inputGroup">
              <label htmlFor="number">Number</label>
              <input id="number" className="inputLine" type="number" placeholder="0" />
            </div>

            <div className="inputGroup">
              <label htmlFor="date">Date</label>
              <input id="date" className="inputLine" type="date" />
            </div>

            <div className="inputGroup">
              <label htmlFor="time">Time</label>
              <input id="time" className="inputLine" type="time" />
            </div>

            <div className="inputGroup">
              <label htmlFor="color">Color</label>
              <input id="color" className="inputLine" type="color" defaultValue="#69d3a5" />
            </div>
          </div>
        </section>

        <section className="contentCard">
          <div className="contentCardHeader">
            <h2 className="sectionTitle">Selects</h2>
          </div>

          <div className="cardGrid cardGridThree">
            <div className="inputGroup">
              <label htmlFor="select">Default select</label>
              <select id="select" className="inputLine" defaultValue="">
                <option value="" disabled>
                  Selecione uma opção
                </option>
                <option>Paciente</option>
                <option>Nutricionista</option>
                <option>Administrador</option>
              </select>
            </div>

            <div className="inputGroup">
              <label htmlFor="selectValue">Select with value</label>
              <select id="selectValue" className="inputLine" defaultValue="active">
                <option value="active">Ativo</option>
                <option value="inactive">Inativo</option>
                <option value="pending">Pendente</option>
              </select>
            </div>

            <div className="inputGroup">
              <label htmlFor="selectDisabled">Disabled select</label>
              <select id="selectDisabled" className="inputLine" disabled>
                <option>Desabilitado</option>
              </select>
            </div>

            <div className="inputGroup">
              <label htmlFor="multi">Multiple select</label>
              <select id="multi" className="inputLine" multiple>
                <option>IMC</option>
                <option>Dobras</option>
                <option>Plano alimentar</option>
              </select>
            </div>
          </div>
        </section>

        <section className="contentCard">
          <div className="contentCardHeader">
            <h2 className="sectionTitle">Textarea, File e Range</h2>
          </div>

          <div className="cardGrid cardGridThree">
            <div className="inputGroup">
              <label htmlFor="textarea">Textarea</label>
              <textarea id="textarea" className="inputLine" placeholder="Observações" rows={5} />
            </div>

            <div className="inputGroup">
              <label htmlFor="file">File input</label>
              <input id="file" className="inputLine" type="file" />
            </div>

            <div className="inputGroup">
              <label htmlFor="range">Range</label>
              <input id="range" type="range" min="0" max="100" defaultValue="50" />
            </div>
          </div>
        </section>

        <section className="contentCard">
          <div className="contentCardHeader">
            <h2 className="sectionTitle">Checkbox, Radio e Switch</h2>
          </div>

          <div className="cardGrid cardGridThree">
            <div className={styles.optionGroup}>
              <h3>Checkbox</h3>

              <label className={styles.checkItem}>
                <input type="checkbox" />
                Default checkbox
              </label>

              <label className={styles.checkItem}>
                <input type="checkbox" defaultChecked />
                Checked checkbox
              </label>

              <label className={styles.checkItem}>
                <input type="checkbox" disabled />
                Disabled checkbox
              </label>
            </div>

            <div className={styles.optionGroup}>
              <h3>Radio</h3>

              <label className={styles.checkItem}>
                <input type="radio" name="radioExample" />
                Default radio
              </label>

              <label className={styles.checkItem}>
                <input type="radio" name="radioExample" defaultChecked />
                Checked radio
              </label>

              <label className={styles.checkItem}>
                <input type="radio" name="radioDisabled" disabled />
                Disabled radio
              </label>
            </div>

            <div className={styles.optionGroup}>
              <h3>Switch</h3>

              <label className={styles.switchItem}>
                <input type="checkbox" />
                <span />
                Default switch
              </label>

              <label className={styles.switchItem}>
                <input type="checkbox" defaultChecked />
                <span />
                Checked switch
              </label>

              <label className={styles.switchItem}>
                <input type="checkbox" disabled />
                <span />
                Disabled switch
              </label>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}