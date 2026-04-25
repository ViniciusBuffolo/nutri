"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import AppLayout from "@/components/layout/AppLayout";
import AuthCard from "@/components/auth/AuthCard";

export default function ResetPasswordPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));

    if (error) setError("");
  }

  async function handleSubmit() {
    if (form.password !== form.confirmPassword) {
      const message = "As senhas não conferem.";
      setError(message);
      toast.error(message);
      return;
    }

    try {
      setIsLoading(true);
      setError("");

      toast.success("Senha atualizada com sucesso!");
      router.push("/login");
    } catch (error) {
      const message = error.message || "Não foi possível atualizar a senha.";
      setError(message);
      toast.error(message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <AppLayout>
      <section className="cardCenterWrap">
        <div className="cardCenterSmall">
          <AuthCard
            title="Nova senha"
            description="Crie uma nova senha para acessar sua conta."
            error={error}
            submitLabel="Atualizar senha"
            isLoading={isLoading}
            onSubmit={handleSubmit}
            footerText="Voltar para"
            footerActionLabel="Login"
            onFooterAction={() => router.push("/login")}
          >
            <div className="inputGroup">
              <label htmlFor="password">Nova senha</label>
              <input
                id="password"
                className="inputLine"
                type="password"
                name="password"
                placeholder="New Password"
                value={form.password}
                onChange={handleChange}
              />
            </div>

            <div className="inputGroup">
              <label htmlFor="confirmPassword">Confirmar senha</label>
              <input
                id="confirmPassword"
                className="inputLine"
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={form.confirmPassword}
                onChange={handleChange}
              />
            </div>
          </AuthCard>
        </div>
      </section>
    </AppLayout>
  );
}