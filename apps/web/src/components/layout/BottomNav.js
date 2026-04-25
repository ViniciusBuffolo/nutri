"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ClipboardList, Sprout, Leaf, Bookmark, Utensils } from "lucide-react";
import styles from "@/app/styles/nav.module.css";

const items = [
  { href: "/evaluations", label: "Evaluations", icon: ClipboardList },
  { href: "/me", label: "Me", icon: Sprout },
  { href: "/", label: "Home", icon: Leaf, center: true },
  { href: "/plans", label: "Plans", icon: Bookmark },
  { href: "/recipes", label: "Recipes", icon: Utensils },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className={styles.bottomNav}>
      <svg
        className={`${styles.navShape} ${styles.navShapeDesktop}`}
        viewBox="0 0 1440 86"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0 0 H650 C675 0 676 55 720 55 C764 55 765 0 790 0 H1440 V86 H0 Z" />
      </svg>

      <svg
        className={`${styles.navShape} ${styles.navShapeMobile}`}
        viewBox="0 0 390 78"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0 0 H130 C152 0 153 50 195 50 C237 50 238 0 260 0 H390 V78 H0 Z" />
      </svg>

      {items.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.href;

        if (item.center) {
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-label={item.label}
              className={`${styles.navCenter} ${
                isActive ? styles.centerActive : ""
              }`}
            >
              <Icon size={28} strokeWidth={1.8} />
            </Link>
          );
        }

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-label={item.label}
            className={`${styles.navItem} ${isActive ? styles.active : ""}`}
          >
            <Icon size={27} strokeWidth={1.8} />
            {isActive && <span className={styles.activeDot} />}
          </Link>
        );
      })}
    </nav>
  );
}
