"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import AppLayout from "@/components/layout/AppLayout";
import AuthCard from "@/components/auth/AuthCard";
import Button from "@ui/shared/Button";

export default function VerifyEmailPage() {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  async function handleResendEmail() {
    try {
      setIsLoading(true);
      toast.success("E-mail de verificação reenviado.");
    } catch (error) {
      toast.error(error.message || "Não foi possível reenviar o e-mail.");
    } finally {
      setIsLoading(false);
    }
  }

  function handleContinue() {
    router.push("/onboarding");
  }

  return (
    <AppLayout>
      <section className="cardCenterWrap">
        <div className="cardCenterSmall">
          <AuthCard
            title="Verifique seu e-mail"
            description="Enviamos um link de verificação para o seu e-mail. Confirme sua conta para continuar."
            submitLabel="Continuar"
            isLoading={isLoading}
            onSubmit={handleContinue}
            footerText="Já verificou?"
            footerActionLabel="Entrar"
            onFooterAction={() => router.push("/login")}
          >
            <Button
              className="formFullButton"
              variant="secondary"
              type="button"
              disabled={isLoading}
              onClick={handleResendEmail}
            >
              {isLoading ? "Reenviando..." : "Reenviar e-mail"}
            </Button>
          </AuthCard>
        </div>
      </section>
    </AppLayout>
  );
}