"use client";

import { colors, radius, shadows, spacing } from "../../theme/tokens";

export default function Card({ className = "", children, style, ...props }) {
  const baseStyle = {
    background: colors.card,
    borderRadius: radius.lg,
    boxShadow: shadows.webCard,
    padding: spacing[7],
  };

  return (
    <div className={className} style={{ ...baseStyle, ...style }} {...props}>
      {children}
    </div>
  );
}