import { useState } from "react";

export function useLogin(initialForm = {}) {
  const [form, setForm] = useState({
    identifier: "",
    password: "",
    ...initialForm,
  });

  const [showPassword, setShowPassword] = useState(false);

  function onChange(eventOrValue) {
    if (eventOrValue?.target) {
      const { name, value } = eventOrValue.target;
      setForm((prev) => ({ ...prev, [name]: value }));
    } else {
      const { name, value } = eventOrValue;
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  }

  function togglePassword() {
    setShowPassword((current) => !current);
  }

  return {
    form,
    showPassword,
    onChange,
    togglePassword,
  };
}