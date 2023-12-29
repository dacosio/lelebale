import React from "react";
import { FooterProps } from "./Footer.props";
import { Container } from "./Footer.style";

const Footer = (props: FooterProps): JSX.Element => {
  return (
    <Container>
      &#169; 2023 Lele Bale Event Place Rentals. All Rights Reserved.
    </Container>
  );
};

export default React.memo(Footer);
