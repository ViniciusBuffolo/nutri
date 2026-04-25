"use client";

import { toast } from "sonner";
import AppLayout from "@/components/layout/AppLayout";
import Button from "@ui/shared/Button";

export default function DevNotificationsPage() {
  function showSuccess() {
    toast.success("A operação foi concluída com sucesso.", {
      description: "Sucesso",
    });
  }

  function showError() {
    toast.error("Algo deu errado. Tente novamente.", {
      description: "Erro",
    });
  }

  function showWarning() {
    toast.warning("Verifique as informações antes de continuar.", {
      description: "Atenção",
    });
  }

  function showInfo() {
    toast.info("Essa é uma mensagem informativa.", {
      description: "Informação",
    });
  }

  function showLongMessage() {
    toast.info(
      "Essa notificação tem uma mensagem maior para testar como o layout se comporta quando o texto ocupa mais espaço.",
      {
        description: "Mensagem longa",
        duration: 7000,
      },
    );
  }

  function showNoTitle() {
    toast.success("Notificação sem título.");
  }

  function showFastClose() {
    toast.success("Essa notificação fecha mais rápido.", {
      description: "Fechamento rápido",
      duration: 1500,
    });
  }

  function showPersistent() {
    toast.warning("Essa notificação fica na tela até o usuário fechar.", {
      description: "Persistente",
      duration: Infinity,
    });
  }

  return (
    <AppLayout>
      <section className="contentSection">
        <div className="contentCard">
          <div className="contentCardHeader">
            <p className="sectionEyebrow">Dev</p>
            <h1 className="sectionTitle">Notifications</h1>
            <p className="sectionTextMuted">
              Página para testar os tipos de notificações do sistema.
            </p>
          </div>

          <div className="contentCardBody">
            <div className="buttonGrid">
              <Button onClick={showSuccess}>Success</Button>
              <Button onClick={showError}>Error</Button>
              <Button onClick={showWarning}>Warning</Button>
              <Button onClick={showInfo}>Info</Button>
              <Button onClick={showLongMessage}>Long message</Button>
              <Button onClick={showNoTitle}>No title</Button>
              <Button onClick={showFastClose}>Fast close</Button>
              <Button onClick={showPersistent}>Persistent</Button>
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}