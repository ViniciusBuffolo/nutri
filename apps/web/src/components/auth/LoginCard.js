"use client";

import Card from "@ui/shared/Card";
import Button from "@ui/shared/Button";
import SectionTitle from "@ui/shared/SectionTitle";

export default function LoginCard({
  form,
  error,
  showPassword,
  onTogglePassword,
  onChange,
  onSubmit,
  onForgotPassword,
  onSignUp,
  onSocialLogin,
}) {
  function handleSubmit(event) {
    event.preventDefault();
    onSubmit?.(event);
  }

  return (
    <Card className="contentCard">
      <div className="contentCardHeader">
        <SectionTitle
          title="Login"
          description="Entre com seu e-mail e sua senha para continuar."
          titleClassName="sectionTitle"
          descriptionClassName="sectionTextMuted"
        />
      </div>

      <form className="form" onSubmit={handleSubmit}>
        <div className="contentCardBody">
          <div className="formFields">
            
            <div className="inputGroup">
              <label htmlFor="identifier">E-mail</label>

              <input
                id="identifier"
                className="inputLine"
                type="email"
                name="identifier"
                placeholder="Email Address"
                value={form?.identifier ?? ""}
                onChange={onChange}
              />
            </div>

            <div className="inputGroup">
              <label htmlFor="password">Senha</label>

              <div className="inputLinePasswordWrap">
                <input
                  id="password"
                  className="inputLine"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={form?.password ?? ""}
                  onChange={onChange}
                />

                <button
                  type="button"
                  className="inputLinePasswordToggle"
                  onClick={onTogglePassword}
                >
                  {showPassword ? "🙈" : "👁"}
                </button>
              </div>
            </div>
          </div>

          {error && <p className="formError">{error}</p>}

          <div className="formRowEnd">
            <button
              type="button"
              className="formTextButton"
              onClick={onForgotPassword}
            >
              Esqueceu sua senha?
            </button>
          </div>

          <div className="contentCardFooter">
            <Button className="formFullButton" variant="primary" type="submit">
              Entrar
            </Button>
          </div>

          <div className="formDivider">
            <span className="formDividerText">Ou entre com</span>
          </div>

          <div className="formSocialRow">
            <button
              type="button"
              className="formSocialButton"
              onClick={() => onSocialLogin?.("facebook")}
            >
              f
            </button>

            <button
              type="button"
              className="formSocialButton"
              onClick={() => onSocialLogin?.("twitter")}
            >
              t
            </button>

            <button
              type="button"
              className="formSocialButton"
              onClick={() => onSocialLogin?.("instagram")}
            >
              ◎
            </button>
          </div>
        </div>

        <div className="contentCardFooter">
          <p className="formFooterText">
            Não tem uma conta?{" "}
            <button
              type="button"
              className="formFooterLink"
              onClick={onSignUp}
            >
              Criar conta
            </button>
          </p>
        </div>
      </form>
    </Card>
  );
}