"use client";
import Styles from "@/components/Button/Button.module.css";

interface ButtonState extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary"| "error";
}

export const Button = ({
  children,
  variant = "primary",
  ...props
}: ButtonState) => {
  return (
    <button type="button" className={Styles[`btn--${variant}`]} {...props}>
      {children}
    </button>
  );
};
