import { CSSProperties, HTMLAttributes } from "react";

import { Theme } from "types/Theme";

export type Variants =
  | "title1"
  | "subtitle1"
  | "title2"
  | "title3"
  | "body"
  | "list"
  | "small"
  | "btn";

export interface TypographyProps extends HTMLAttributes<HTMLParagraphElement> {
  children: any;
  variant?: Variants;
  textColor?: string;
  weight?: string;
  align?: "center" | "left" | "right";
  component?: string;
  style?: CSSProperties;
  className?: string;
  bgColor?: string;
}
