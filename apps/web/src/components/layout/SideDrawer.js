"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import {
  Home,
  User,
  Info,
  ClipboardList,
  Mail,
  Wallet,
  Newspaper,
  BarChart3,
  Sun,
  Moon,
} from "lucide-react";
import styles from "@/app/styles/header.module.css";

const menuItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/profile", label: "Profile", icon: User },
  { href: "/about", label: "About us", icon: Info },
  { href: "/plans", label: "Plans", icon: ClipboardList },
  { href: "/messages", label: "Message", icon: Mail, badge: "1" },
  { href: "/payment", label: "Payment", icon: Wallet },
  { href: "/reports", label: "Reports", icon: Newspaper },
  { href: "/statistics", label: "Statistic", icon: BarChart3 },
];

function getInitialThemeMode() {
  if (typeof window === "undefined") return "light";

  return localStorage.getItem("themeMode") || "light";
}

function subscribeToStorage(callback) {
  window.addEventListener("storage", callback);
  window.addEventListener("local-storage-change", callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("local-storage-change", callback);
  };
}

function getLoggedUserSnapshot() {
  return localStorage.getItem("loggedUser");
}

function getLoggedUserServerSnapshot() {
  return null;
}

function parseLoggedUser(storedUser) {
  if (!storedUser) return null;

  try {
    return JSON.parse(storedUser);
  } catch {
    return null;
  }
}

export default function SideDrawer({ isOpen, onClose }) {
  const touchStartRef = useRef({ x: 0, y: 0 });
  const [themeMode, setThemeMode] = useState(getInitialThemeMode);

  const storedUser = useSyncExternalStore(
    subscribeToStorage,
    getLoggedUserSnapshot,
    getLoggedUserServerSnapshot,
  );

  const user = parseLoggedUser(storedUser);

  const isDark = themeMode === "dark";
  const isLogged = Boolean(user);

  useEffect(() => {
    document.documentElement.dataset.theme = themeMode;
  }, [themeMode]);

  function toggleThemeMode() {
    const nextTheme = isDark ? "light" : "dark";

    setThemeMode(nextTheme);
    localStorage.setItem("themeMode", nextTheme);
  }

  function handleTouchStart(event) {
    const touch = event.touches[0];

    touchStartRef.current = {
      x: touch.clientX,
      y: touch.clientY,
    };
  }

  function handleTouchEnd(event) {
    const touch = event.changedTouches[0];

    const deltaX = touch.clientX - touchStartRef.current.x;
    const deltaY = touch.clientY - touchStartRef.current.y;

    const isHorizontalSwipe = Math.abs(deltaX) > Math.abs(deltaY);
    const isSwipeRight = deltaX > 60;

    if (isOpen && isHorizontalSwipe && isSwipeRight) {
      onClose?.();
    }
  }

  return (
    <>
      <button
        type="button"
        className={`${styles.drawerOverlay} ${
          isOpen ? styles.drawerOverlayOpen : ""
        }`}
        onClick={onClose}
        aria-label="Fechar menu lateral"
      />

      <aside
        className={`${styles.sideDrawer} ${
          isOpen ? styles.sideDrawerOpen : ""
        }`}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {isLogged ? (
          <div className={styles.drawerProfile}>
            <div>
              <strong>{user.name}</strong>
              <span>{user.role || user.email || "Usuário logado"}</span>
            </div>

            <Image
              src={user.avatar || "/portrait-3d-female-doctor.jpg"}
              alt={user.name || "Usuário"}
              width={42}
              height={42}
              className={styles.drawerAvatar}
            />
          </div>
        ) : (
          <Link
            href="/login"
            className={styles.drawerLoginButton}
            onClick={onClose}
          >
            Fazer login
          </Link>
        )}

        <button
          type="button"
          className={`${styles.drawerThemeToggle} ${
            isDark ? styles.drawerThemeToggleDark : ""
          }`}
          onClick={toggleThemeMode}
          aria-label={isDark ? "Ativar tema claro" : "Ativar tema escuro"}
          aria-pressed={isDark}
        >
          <span className={styles.drawerThemeTrack}>
            <span className={styles.drawerThemeSun}>
              <Sun size={13} />
            </span>

            <span className={styles.drawerThemeMoon}>
              <Moon size={13} />
            </span>

            <span className={styles.drawerThemeThumb} />
          </span>
        </button>

        <nav className={styles.drawerNav}>
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <Link key={item.href} href={item.href} onClick={onClose}>
                <Icon size={18} />
                <span>{item.label}</span>

                {item.badge ? (
                  <small className={styles.drawerBadge}>{item.badge}</small>
                ) : null}
              </Link>
            );
          })}
        </nav>

        <p className={styles.drawerVersion}>App Version - V2.10</p>
      </aside>
    </>
  );
}