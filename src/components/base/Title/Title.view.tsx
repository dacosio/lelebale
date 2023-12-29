import React from "react";
import { TitleProps } from "./Title.props";
import { Container, Hr } from "./Title.style";
import Typography from "../Typography";

const Title = (props: TitleProps): JSX.Element => {
  const { title, ...styles } = props;
  return (
    <Container {...styles}>
      <Typography variant="title2" weight="500">
        {title}
      </Typography>
      <Hr />
    </Container>
  );
};

export default React.memo(Title);
