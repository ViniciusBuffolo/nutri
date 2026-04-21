"use client";

import Link from "next/link";
import styles from "@/app/page.module.css";

export default function Button({
  children,
  href,
  type = "button",
  onClick,
  className = "",
  ariaCurrent,
}) {
  const finalClassName =
    className || styles.bmiSecondaryButton;

  if (href) {
    return (
      <Link href={href} className={finalClassName} aria-current={ariaCurrent}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={finalClassName} onClick={onClick}>
      {children}
    </button>
  );
}