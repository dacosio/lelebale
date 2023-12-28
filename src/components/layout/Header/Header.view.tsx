import React from "react";
import { HeaderProps } from "./Header.props";
import { Container } from "./Header.style";
import Typography from "components/base/Typography";

const Header = (props: HeaderProps): JSX.Element => {
  return (
    <Typography
      variant="small"
      style={{
        margin: 0,
        textAlign: "center",
        padding: "0.5rem",
        fontWeight: "bold",
      }}
      weight="bold">
      For General Inquiries: Call +1 (778) 883-9874
    </Typography>
  );
};

export default React.memo(Header);
