"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import AppLayout from "@/components/layout/AppLayout";
import AuthCard from "@/components/auth/AuthCard";

export default function OnboardingPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    role: "",
    companyName: "",
    phone: "",
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

      toast.success("Perfil configurado com sucesso!");
      router.push("/");
    } catch (error) {
      const message = error.message || "Não foi possível concluir o cadastro.";

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
            title="Complete seu perfil"
            description="Adicione algumas informações para personalizar sua experiência."
            error={error}
            submitLabel="Concluir cadastro"
            isLoading={isLoading}
            onSubmit={handleSubmit}
            footerText="Quer fazer isso depois?"
            footerActionLabel="Pular"
            onFooterAction={() => router.push("/")}
          >
            <div className="inputGroup">
              <label htmlFor="role">Perfil</label>
              <select
                id="role"
                className="inputLine"
                name="role"
                value={form.role}
                onChange={handleChange}
              >
                <option value="">Selecione seu perfil</option>
                <option value="nutritionist">Nutricionista</option>
                <option value="patient">Paciente</option>
              </select>
            </div>

            <div className="inputGroup">
              <label htmlFor="companyName">Clínica ou empresa</label>
              <input
                id="companyName"
                className="inputLine"
                type="text"
                name="companyName"
                placeholder="Nome da clínica"
                value={form.companyName}
                onChange={handleChange}
              />
            </div>

            <div className="inputGroup">
              <label htmlFor="phone">Telefone</label>
              <input
                id="phone"
                className="inputLine"
                type="tel"
                name="phone"
                placeholder="(00) 00000-0000"
                value={form.phone}
                onChange={handleChange}
              />
            </div>
          </AuthCard>
        </div>
      </section>
    </AppLayout>
  );
}