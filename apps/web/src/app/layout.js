import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import AppNotifications from "@/components/shared/AppNotifications";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "App de Nutrição",
  description: "Sistema simples de nutrição e cálculo de IMC",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>
        {children}
        <AppNotifications />
      </body>
    </html>
  );
}