import { ReactNode } from "react";
export type ButtonVariant = "primary" | "secondary" | "outlined" | "ghost" | "white";

export interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
  as?: React.ElementType;
  href?: string;
}