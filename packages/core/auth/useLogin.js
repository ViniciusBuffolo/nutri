import { useState } from "react";

export function useLogin(initialForm = {}) {
  const [form, setForm] = useState({
    identifier: "",
    password: "",
    ...initialForm,
  });

  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function onChange(eventOrValue) {
    const { name, value } = eventOrValue?.target
      ? eventOrValue.target
      : eventOrValue;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (error) {
      setError("");
    }
  }

  function togglePassword() {
    setShowPassword((current) => !current);
  }

  return {
    form,
    error,
    setError,
    showPassword,
    isLoading,
    setIsLoading,
    onChange,
    togglePassword,
  };
}