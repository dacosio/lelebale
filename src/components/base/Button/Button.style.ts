import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";
import { ButtonStyleProps, Variants, ButtonSizes } from "./Button.props";

//default state
const backgroundColor: Record<Variants, string> = {
  light: theme.light,
  dark: theme.dark,
  bg: theme.bg,
};

const hoverBgColor: Record<Variants, string> = {
  light: theme.dark,
  dark: theme.light,
  bg: theme.bg,
};

const padding: Record<ButtonSizes, string> = {
  sm: "12px 27px",
  md: "12px 27px",
  lg: "",
};

const border: Record<Variants, string> = {
  light: "",
  // dark: `1.5px solid ${theme.dark}`,
  dark: "",
  bg: "",
};

export const ButtonContainer = styled.button<
  ButtonStyleProps & { hasText: boolean; hover?: boolean }
>`
  padding: ${({ size }) => padding[size]};
  background-color: ${({ variant }) => backgroundColor[variant]};
  width: ${(props) => (props.takeFullWidth ? "100%" : "auto")};
  font-family: "Sanchez", sans-serif;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 0;
  transition: all 0.35s;
  position: relative;

  p {
    position: relative;
    z-index: 2;
  }

  :after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: black;
    transition: all 0.35s;
  }

  :focus {
    outline: none;
  }

  :hover {
    background-color: ${({ variant, hover }) =>
      !hover ? "none" : hoverBgColor[variant]};
    border: ${({ variant, theme, hover }) =>
      hover ? (variant == "dark" ? "1px solid black" : "none") : "none"};

    p {
      color: ${({ variant, theme, hover }) =>
        hover ? (variant === "dark" ? theme.dark : theme.light) : "white"};
    }
  }
  :hover:after {
    width: 100%;
  }

  cursor: pointer;

  :active {
    scale: 0.9;
  }
`;
