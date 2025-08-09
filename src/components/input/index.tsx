"use client";

import * as React from "react";

export type InputSize = "sm" | "md" | "lg";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  helpText?: string;
  errorText?: string;
  size?: InputSize;
}

const sizeStyles: Record<InputSize, React.CSSProperties> = {
  sm: { height: 32, fontSize: 12, padding: "0 10px", borderRadius: 6 },
  md: { height: 38, fontSize: 14, padding: "0 12px", borderRadius: 8 },
  lg: { height: 44, fontSize: 16, padding: "0 14px", borderRadius: 10 },
};

export function Input({
  id,
  label,
  helpText,
  errorText,
  size = "md",
  style,
  ...rest
}: InputProps) {
  const describedBy = errorText
    ? `${id}-error`
    : helpText
    ? `${id}-help`
    : undefined;

  return (
    <div style={{ display: "grid", gap: 6 }}>
      {label ? (
        <label htmlFor={id} style={{ fontWeight: 600 }}>
          {label}
        </label>
      ) : null}
      <input
        id={id}
        aria-invalid={!!errorText}
        aria-describedby={describedBy}
        style={{
          width: "100%",
          border: `1px solid ${errorText ? "#E5484D" : "rgba(0,0,0,0.2)"}`,
          outline: "none",
          ...sizeStyles[size],
          ...style,
        }}
        {...rest}
      />
      {errorText ? (
        <div id={`${id}-error`} style={{ color: "#E5484D", fontSize: 12 }}>
          {errorText}
        </div>
      ) : helpText ? (
        <div
          id={`${id}-help`}
          style={{ color: "rgba(0,0,0,0.6)", fontSize: 12 }}
        >
          {helpText}
        </div>
      ) : null}
    </div>
  );
}
