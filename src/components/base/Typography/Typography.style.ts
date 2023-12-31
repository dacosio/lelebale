import styled from "@emotion/styled";

import { pxToRem } from "../../../utils/Theme";

import { Variants, TypographyProps } from "./Typography.props";

const styles: Record<Variants, string> = {
  title1: `
      font-family: Buckin;
      font-style: normal;
      font-size: ${pxToRem(48)};
      line-height: 100%;
      text-transform: uppercase;
    `,
  subtitle1: `
    font-style: normal;
    font-size: ${pxToRem(16)};
    line-height: 160%;
  `,
  title2: `
      font-family: Buckin;
      font-style: normal;
      font-size: ${pxToRem(42)};
      line-height: 120%;
      text-transform: capitalize;
    `,
  body: `
    font-style: normal;
    font-size: ${pxToRem(18)};
    line-height: 160%;
  `,
  list: `
    font-style: normal;
    font-size: ${pxToRem(16)};
    line-height: 100%;
    letter-spacing: 1px;
    text-transform: uppercase;`,
  btn: `
    font-style: normal;
    font-size: ${pxToRem(14)};;
    line-height: 14px;
    letter-spacing: 2px;
    text-transform: uppercase`,
  small: `
    font-style: normal;
    font-size: ${pxToRem(13)};
    line-height: 140%;
}`,
};

const weights: Record<string, string> = {
  Regular: "400",
  Bold: "700",
};

const font: Record<Variants, string> = {
  title1: weights.Bold,
  subtitle1: weights.Regular,
  title2: weights.Bold,
  body: weights.Regular,
  list: weights.Regular,
  small: weights.Regular,
  btn: weights.Regular,
};

export const P = styled.p<TypographyProps>`
  ${({ variant }) => styles[variant || "body"]};
  font-weight: ${({ variant, weight }) => weight || font[variant || "body"]};
  color: ${({ theme, textColor = "dark" }) => {
    const selectedColor = {
      ...theme,
    }[textColor];
    return selectedColor;
  }};
  text-align: ${({ align }) => align || "left"};
  margin: 0;
`;
