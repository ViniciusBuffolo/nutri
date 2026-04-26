"use client";

import { useRouter } from "next/navigation";
import { toast } from "sonner";
import AppLayout from "@/components/layout/AppLayout";
import AuthCard from "@/components/auth/AuthCard";
import { useLogin } from "@core/auth/useLogin";
import { loginWithMockData } from "@core/auth/loginService";

export default function LoginPage() {
  const router = useRouter();

  const {
    form,
    error,
    setError,
    showPassword,
    isLoading,
    setIsLoading,
    onChange,
    togglePassword,
  } = useLogin();

  async function handleSubmit() {
    try {
      setIsLoading(true);
      setError("");

      const user = await loginWithMockData(form);

      localStorage.setItem("loggedUser", JSON.stringify(user));

      toast.success(`Bem-vindo, ${user.name}!`);
      router.push("/");
    } catch (error) {
      const message = error.message || "Não foi possível fazer login.";

      setError(message);
      toast.error(message);
    } finally {
      setIsLoading(false);
    }
  }

  function handleSocialLogin(provider) {
    console.log("Social login:", provider);
  }

  return (
    <AppLayout canvasInitiallyOpen={false} canvasVariant="auth">
      <section className="cardCenterWrap">
        <div className="cardCenterSmall">
          <AuthCard
            title="Login"
            description="Entre com seu e-mail e sua senha para continuar."
            error={error}
            submitLabel="Entrar"
            isLoading={isLoading}
            onSubmit={handleSubmit}
            secondaryActionLabel="Esqueceu sua senha?"
            onSecondaryAction={() => router.push("/forgot-password")}
            footerText="Não tem uma conta?"
            footerActionLabel="Criar conta"
            onFooterAction={() => router.push("/register")}
          >
            <div className="inputGroup">
              <label htmlFor="identifier">E-mail</label>
              <input
                id="identifier"
                className="inputLine"
                type="email"
                name="identifier"
                placeholder="Email Address"
                value={form.identifier}
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
                  value={form.password}
                  onChange={onChange}
                />

                <button
                  type="button"
                  className="inputLinePasswordToggle"
                  onClick={togglePassword}
                >
                  {showPassword ? "🙈" : "👁"}
                </button>
              </div>
            </div>

            <div className="formDivider">
              <span className="formDividerText">Ou entre com</span>
            </div>

            <div className="formSocialRow">
              <button
                type="button"
                className="formSocialButton"
                onClick={() => handleSocialLogin("facebook")}
              >
                f
              </button>

              <button
                type="button"
                className="formSocialButton"
                onClick={() => handleSocialLogin("twitter")}
              >
                t
              </button>

              <button
                type="button"
                className="formSocialButton"
                onClick={() => handleSocialLogin("instagram")}
              >
                ◎
              </button>
            </div>
          </AuthCard>
        </div>
      </section>
    </AppLayout>
  );
}