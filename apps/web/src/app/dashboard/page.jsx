"use client";

import { useEffect, useState } from "react";
import AppLayout from "@/components/layout/AppLayout";
import DashboardUser from "@/components/dashboard/DashboardUser";
import DashboardNutritionist from "@/components/dashboard/DashboardNutritionist";

export default function DashboardPage() {
  const [user, setUser] = useState(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const storedUser = localStorage.getItem("loggedUser");

      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }

      setIsReady(true);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  if (!isReady) {
    return (
      <AppLayout canvasVariant="dashboard" canvasInitiallyOpen={false}>
        <section className="content">
          <p className="sectionTextMuted">Carregando dashboard...</p>
        </section>
      </AppLayout>
    );
  }

  if (!user) {
    return (
      <AppLayout canvasVariant="dashboard" canvasInitiallyOpen={false}>
        <section className="content">
          <p className="sectionTextMuted">Usuário não encontrado.</p>
        </section>
      </AppLayout>
    );
  }

  return (
    <AppLayout canvasVariant="dashboard" canvasInitiallyOpen={false} user={user}>
      <section className="content">
        {user.role === "nutritionist" || user.role === "admin" ? (
          <DashboardNutritionist user={user} />
        ) : (
          <DashboardUser user={user} />
        )}
      </section>
    </AppLayout>
  );
}