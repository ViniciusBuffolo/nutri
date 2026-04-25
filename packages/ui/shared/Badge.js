"use client";

import { colors, radius, spacing, typography } from "../../theme/tokens";

export default function Badge({
  children,
  className = "",
  style,
  variant = "default",
  ...props
}) {
  const variants = {
    default: {
      background: colors.primarySoft,
      color: colors.primaryText,
    },
    success: {
      background: colors.primarySoft,
      color: colors.primaryStrong,
    },
    danger: {
      background: "rgba(217, 92, 92, 0.1)",
      color: colors.danger,
    },
    neutral: {
      background: colors.cardMuted,
      color: colors.muted,
    },
  };

  const baseStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",

    padding: `${spacing[2]}px ${spacing[4]}px`,
    borderRadius: radius.pill,

    fontSize: typography.fontSm,
    fontWeight: 700,

    lineHeight: 1,
    whiteSpace: "nowrap",
  };

  return (
    <div
      className={className}
      style={{
        ...baseStyle,
        ...variants[variant],
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}