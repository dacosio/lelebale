import { CSSProperties } from "react";
import { Variants } from "../Typography/Typography.props";

export interface TitleProps {
  title: string;
  styles?: CSSProperties;
  variant?: Variants;
  price?: string;
}
