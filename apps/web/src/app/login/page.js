"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "@/app/page.module.css";
import TopCanvas from "@/components/layout/TopCanvas";
import BottomNav from "@/components/layout/BottomNav";
import LoginCard from "@/components/auth/LoginCard";
import TopBar from "@/components/layout/TopBar";
import { nutritionSummary } from "@/data/homeData";
import { users } from "@/data/users";

export default function LoginPage() {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({
    identifier: "",
    password: "",
  });
  const [error, setError] = useState("");

  function openCanvas() {
    setIsOpen(true);
  }

  function closeCanvas() {
    setIsOpen(false);
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));

    if (error) {
      setError("");
    }
  }

  function handleSubmit() {
    const identifier = form.identifier.trim().toLowerCase();
    const password = form.password.trim();

    const matchedUser = users.find(
      (user) =>
        user.email.toLowerCase() === identifier && user.password === password
    );

    if (!matchedUser) {
      setError("E-mail ou senha inválidos.");
      return;
    }

    localStorage.setItem("loggedUser", JSON.stringify(matchedUser));
    router.push("/");
  }

  function handleForgotPassword() {
    console.log("Forgot password");
  }

  function handleSignUp() {
    console.log("Sign up");
  }

  function handleSocialLogin(provider) {
    console.log("Social login:", provider);
  }

  return (
    <main className={styles.page}>
      <div className={styles.backgroundOverlay} />

      <TopCanvas
        isOpen={isOpen}
        closeCanvas={closeCanvas}
        nutritionSummary={nutritionSummary}
      />

      <section
        className={`${styles.mainContent} ${isOpen ? styles.mainShifted : ""}`}
      >
        {!isOpen && <TopBar onOpen={openCanvas} />}

        <section className={styles.loginPageContent}>
          <LoginCard
            form={form}
            error={error}
            onChange={handleChange}
            onSubmit={handleSubmit}
            onForgotPassword={handleForgotPassword}
            onSignUp={handleSignUp}
            onSocialLogin={handleSocialLogin}
          />
        </section>
      </section>

      <BottomNav />
    </main>
  );
}