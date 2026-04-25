"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import AppLayout from "@/components/layout/AppLayout";
import LoginCard from "@/components/auth/LoginCard";
import { users } from "@data/users";

export default function LoginPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    identifier: "",
    password: "",
  });

  const [error, setError] = useState("");

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

  function handleSubmit(event) {
    event?.preventDefault();

    const identifier = form.identifier.trim().toLowerCase();
    const password = form.password.trim();

    const matchedUser = users.find(
      (user) =>
        user.email.toLowerCase() === identifier && user.password === password,
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
    <AppLayout>
      <section className="cardCenterWrap">
        <div className="cardCenterSmall">
          <LoginCard
            form={form}
            error={error}
            onChange={handleChange}
            onSubmit={handleSubmit}
            onForgotPassword={handleForgotPassword}
            onSignUp={handleSignUp}
            onSocialLogin={handleSocialLogin}
          />
        </div>
      </section>
    </AppLayout>
  );
}