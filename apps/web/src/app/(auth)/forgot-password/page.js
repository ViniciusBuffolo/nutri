"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import AppLayout from "@/components/layout/AppLayout";
import AuthCard from "@/components/auth/AuthCard";

export default function ForgotPasswordPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
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
    try {
      setIsLoading(true);
      setError("");

      toast.success("Enviamos as instruções para seu e-mail.");
      router.push("/login");
    } catch (error) {
      const message = error.message || "Não foi possível enviar o e-mail.";
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
            title="Recuperar senha"
            description="Informe seu e-mail para receber as instruções."
            error={error}
            submitLabel="Enviar instruções"
            isLoading={isLoading}
            onSubmit={handleSubmit}
            footerText="Lembrou sua senha?"
            footerActionLabel="Entrar"
            onFooterAction={() => router.push("/login")}
          >
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
          </AuthCard>
        </div>
      </section>
    </AppLayout>
  );
}