import React from "react";
import { ButtonProps } from "./Button.props";
import { ButtonContainer } from "./Button.style";
import { Theme } from "types/Theme";
import { TypographyProps } from "../Typography/Typography.props";
import Typography from "../Typography";
import { useTheme } from "@emotion/react";

const Button = (props: ButtonProps): JSX.Element => {
  const theme = useTheme();
  const {
    text,
    color,
    variant = "dark",
    takeFullWidth = false,
    size = "md",
    ...buttonProps
  } = props;

  let textColor: keyof Theme;

  // this is design specific, amend base on the design
  if (variant === "light") {
    textColor = "dark";
  } else if (variant === "dark") {
    textColor = "bg";
  } else {
    textColor = "light";
  }

  // this is design specific, amend base on the design
  let textVariant: TypographyProps["variant"];
  let textWeight = "400";

  if (size === "sm") {
    textVariant = "btn";
    textWeight = "400";
  } else if (size === "md") {
    textVariant = "btn";
    textWeight = "700";
  } else {
    textWeight = "400";
  }

  const hasText = text && text?.length > 0 ? true : false;

  return (
    <ButtonContainer
      size={size}
      color={color}
      variant={variant}
      hasText={hasText}
      takeFullWidth={takeFullWidth}
      {...buttonProps}>
      {text && (
        <Typography
          variant={textVariant}
          textColor={textColor}
          weight={textWeight}>
          {text}
        </Typography>
      )}
    </ButtonContainer>
  );
};

export default React.memo(Button);
