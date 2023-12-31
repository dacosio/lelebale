import React from "react";
import { TitleProps } from "./Title.props";
import { Container, Hr, TitleWrap } from "./Title.style";
import Typography from "../Typography";

const Title = (props: TitleProps): JSX.Element => {
  const { title, variant = "title2", price, ...styles } = props;
  return (
    <Container {...styles}>
      {variant === "subtitle1" ? (
        <TitleWrap>
          <Typography variant="title3" weight="700">
            {title}
          </Typography>
          <Typography variant="subtitle1" style={{ lineHeight: "220%" }}>
            starting at {price}
          </Typography>
        </TitleWrap>
      ) : (
        <Typography variant={variant} weight="500">
          {title}
        </Typography>
      )}

      <Hr />
    </Container>
  );
};

export default React.memo(Title);
