"use client";

import { colors, radius, spacing, typography } from "../../theme/tokens";

export default function Button({
  children,
  as: Component = "button",
  type = "button",
  onClick,
  className = "",
  style,
  variant = "primary",
  ...props
}) {
  const variants = {
    primary: {
      background: colors.primaryStrong,
      color: colors.white,
    },
    secondary: {
      background: colors.primarySoft,
      color: colors.primaryText,
    },
    ghost: {
      background: "transparent",
      color: colors.primaryStrong,
    },
  };

  const baseStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing[3],

    minHeight: 44,
    padding: `0 ${spacing[6]}px`,

    borderRadius: radius.pill,

    fontSize: typography.fontMd,
    fontWeight: 700,

    cursor: "pointer",
    border: "none",
  };

  const finalProps = {
    className,
    style: {
      ...baseStyle,
      ...variants[variant],
      ...style,
    },
    onClick,
    ...props,
  };

  if (Component === "button") {
    finalProps.type = type;
  }

  return <Component {...finalProps}>{children}</Component>;
}