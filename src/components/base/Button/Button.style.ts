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
  sm: "",
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
  ButtonStyleProps & { hasText: boolean }
>`
  padding: ${({ size }) => padding[size]};
  background-color: ${({ variant }) => backgroundColor[variant]};
  border: ${({ variant }) => border[variant]};
  width: ${(props) => (props.takeFullWidth ? "100%" : "auto")};
  font-family: "Sanchez", sans-serif;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  :focus {
    outline: none;
  }

  :hover {
    background-color: ${({ variant }) => hoverBgColor[variant]};
    p {
      color: ${({ variant, theme }) =>
        variant === "dark" ? theme.dark : theme.light};
    }
  }
  cursor: pointer;
`;
