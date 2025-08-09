"use client";

import * as React from "react";

export type ButtonVariant = "primary" | "secondary" | "text";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const variantStyles: Record<ButtonVariant, React.CSSProperties> = {
  primary: {
    background: "var(--color-primary, #FF6F0F)",
    color: "#fff",
    border: "1px solid transparent",
  },
  secondary: {
    background: "transparent",
    color: "var(--color-primary, #FF6F0F)",
    border: "1px solid var(--color-primary, #FF6F0F)",
  },
  text: {
    background: "transparent",
    color: "var(--color-primary, #FF6F0F)",
    border: "1px solid transparent",
  },
};

const sizeStyles: Record<ButtonSize, React.CSSProperties> = {
  sm: { padding: "6px 10px", fontSize: 12, borderRadius: 6 },
  md: { padding: "8px 14px", fontSize: 14, borderRadius: 8 },
  lg: { padding: "10px 16px", fontSize: 16, borderRadius: 10 },
};

export function Button({
  variant = "primary",
  size = "md",
  style,
  disabled,
  children,
  ...rest
}: ButtonProps) {
  const base: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.6 : 1,
    transition: "background 0.2s, color 0.2s, border-color 0.2s",
  };

  return (
    <button
      {...rest}
      disabled={disabled}
      style={{
        ...base,
        ...variantStyles[variant],
        ...sizeStyles[size],
        ...style,
      }}
    >
      {children}
    </button>
  );
}
