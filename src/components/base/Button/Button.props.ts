import { ButtonHTMLAttributes } from "react";
import { Theme } from "types/Theme";

export type Variants = "light" | "dark" | "bg";

export type ButtonSizes = "lg" | "md" | "sm";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: keyof Theme;
  text?: string;
  variant?: Variants;
  size?: ButtonSizes;
  takeFullWidth?: boolean;
}

export type ButtonStyleProps = {
  color?: keyof Theme;
  variant: Variants;
  takeFullWidth?: boolean;
  size: ButtonSizes;
};
