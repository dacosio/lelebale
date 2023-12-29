import React from "react";
import { HeaderProps } from "./Header.props";
import { Container } from "./Header.style";
import Typography from "../../base/Typography";

const Header = (props: HeaderProps): JSX.Element => {
  return (
    <Container>
      <Typography
        variant="small"
        style={{
          margin: 0,
          // textAlign: "center",
          // padding: "0.5rem",
          fontWeight: "bold",
        }}
        weight="bold">
        For General Inquiries:
      </Typography>
      <Typography
        variant="small"
        style={{
          margin: 0,
          // textAlign: "center",
          // padding: "0.5rem",
          fontWeight: "bold",
        }}
        weight="bold">
        Call +1 (778) 883-9874
      </Typography>
    </Container>
  );
};

export default React.memo(Header);
