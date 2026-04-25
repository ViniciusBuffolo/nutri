"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import AppLayout from "@/components/layout/AppLayout";
import AuthCard from "@/components/auth/AuthCard";

export default function RegisterPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
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

      toast.success("Conta criada com sucesso!");
      router.push("/verify-email");
    } catch (error) {
      const message = error.message || "Não foi possível criar a conta.";
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
            title="Criar conta"
            description="Preencha seus dados para começar."
            error={error}
            submitLabel="Criar conta"
            isLoading={isLoading}
            onSubmit={handleSubmit}
            footerText="Já tem uma conta?"
            footerActionLabel="Entrar"
            onFooterAction={() => router.push("/login")}
          >
            <div className="inputGroup">
              <label htmlFor="name">Nome</label>
              <input
                id="name"
                className="inputLine"
                type="text"
                name="name"
                placeholder="Seu nome"
                value={form.name}
                onChange={handleChange}
              />
            </div>

            <div className="inputGroup">
              <label htmlFor="email">E-mail</label>
              <input
                id="email"
                className="inputLine"
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <div className="inputGroup">
              <label htmlFor="password">Senha</label>
              <input
                id="password"
                className="inputLine"
                type="password"
                name="password"
                placeholder="Password"
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