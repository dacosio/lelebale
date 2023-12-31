import { useTheme as useThemeBase } from "@emotion/react";
import { Theme } from "@emotion/react";
export const useTheme = (): Theme => useThemeBase();

const rootFontSizePx = 14;
export const pxToRem = (n: number): string => `${n / rootFontSizePx}rem`;

export const theme: Theme = {
  light: "#FFFFFF",
  dark: "#000000",
  bg: "#eae4dc",
  gray: "#61605f"
};

export default theme;
