"use client";

import { useState } from "react";
import styles from "@/app/page.module.css";
import Card from "@/components/shared/Card";
import Button from "@/components/shared/Button";
import SectionTitle from "@/components/shared/SectionTitle";

export default function LoginCard({
  form,
  error,
  onChange,
  onSubmit,
  onForgotPassword,
  onSignUp,
  onSocialLogin,
}) {
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    if (onSubmit) {
      onSubmit(event);
    }
  }

  return (
    <Card className={styles.loginCard}>
      <div className={styles.loginHeader}>
        <SectionTitle
          eyebrow="Access"
          title="Login"
          description="Entre com seu e-mail e sua senha para continuar."
          eyebrowClassName={styles.loginEyebrow}
          titleClassName={styles.loginTitle}
          descriptionClassName={styles.loginSubtitle}
        />
      </div>

      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <div className={styles.loginFields}>
          <label className={styles.loginField}>
            <span>E-mail</span>
            <input
              type="email"
              name="identifier"
              placeholder="Ex: camila@email.com"
              value={form?.identifier ?? ""}
              onChange={onChange}
            />
          </label>

          <label className={styles.loginField}>
            <span>Senha</span>

            <div className={styles.loginPasswordWrap}>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Digite sua senha"
                value={form?.password ?? ""}
                onChange={onChange}
              />

              <button
                type="button"
                className={styles.loginPasswordToggle}
                onClick={() => setShowPassword((current) => !current)}
                aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
              >
                {showPassword ? "🙈" : "👁"}
              </button>
            </div>
          </label>
        </div>

        {error ? <p className={styles.loginError}>{error}</p> : null}

        <div className={styles.loginRow}>
          <button
            type="button"
            className={styles.loginLinkButton}
            onClick={onForgotPassword}
          >
            Esqueceu sua senha?
          </button>
        </div>

        <div className={styles.loginActions}>
          <Button className={styles.loginPrimaryButton} type="submit">
            Entrar
          </Button>
        </div>

        <div className={styles.loginDivider}>
          <span className={styles.loginDividerText}>Ou entre com</span>
        </div>

        <div className={styles.loginSocialRow}>
          <button
            type="button"
            className={styles.loginSocialButton}
            onClick={() => onSocialLogin?.("facebook")}
            aria-label="Entrar com Facebook"
          >
            f
          </button>

          <button
            type="button"
            className={styles.loginSocialButton}
            onClick={() => onSocialLogin?.("twitter")}
            aria-label="Entrar com Twitter"
          >
            t
          </button>

          <button
            type="button"
            className={styles.loginSocialButton}
            onClick={() => onSocialLogin?.("instagram")}
            aria-label="Entrar com Instagram"
          >
            ◎
          </button>
        </div>

        <p className={styles.loginFooterText}>
          Não tem uma conta?{" "}
          <button
            type="button"
            className={styles.loginFooterLink}
            onClick={onSignUp}
          >
            Criar conta
          </button>
        </p>
      </form>
    </Card>
  );
}