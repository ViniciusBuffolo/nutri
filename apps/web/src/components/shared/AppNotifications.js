"use client";

import { Toaster } from "sonner";

export default function AppNotifications() {
  return (
    <Toaster
      richColors
      position="top-center"
      closeButton
    />
  );
}