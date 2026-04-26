"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Home,
  User,
  Info,
  ClipboardList,
  Mail,
  Wallet,
  Newspaper,
  BarChart3,
  X,
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

export default function SideDrawer({ isOpen, onClose }) {
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
      >
        <div className={styles.drawerProfile}>
          <div>
            <strong>Gabrielle Irene</strong>
            <span>5.2M Followers</span>
          </div>

          <Image
            src="/avatar.jpg"
            alt="Gabrielle Irene"
            width={42}
            height={42}
            className={styles.drawerAvatar}
          />

          <button
            type="button"
            className={styles.drawerCloseButton}
            onClick={onClose}
            aria-label="Fechar menu lateral"
          >
            <X size={18} />
          </button>
        </div>

        <div className={styles.drawerThemeToggle} aria-label="Theme mode">
          <Sun size={12} className={styles.drawerThemeIcon} />

          <span className={styles.drawerThemeTrack}>
            <span className={styles.drawerThemeThumb} />
          </span>

          <Moon size={12} className={styles.drawerThemeIcon} />
        </div>

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