import React from "react";
import { NavbarProps } from "./Navbar.props";
import { Container, Right, Logo, Concierge } from "./Navbar.style";
import Button from "components/base/Button";
import Typography from "components/base/Typography";
import { BiMessageDetail } from "react-icons/bi";
import LelebaleLogo from "../../../images/lelebaleLogo.png";

const Navbar = (props: NavbarProps): JSX.Element => {
  return (
    <Container>
      <img
        src={LelebaleLogo}
        alt="logo"
        style={{ height: "auto", width: "100px" }}
      />
      <Right>
        <Concierge>
          <Typography variant="list">concierge</Typography>
          <BiMessageDetail size={23} />
        </Concierge>
        <Button variant="dark" text="Book Now" className="header-btn"/>
      </Right>
    </Container>
  );
};

export default React.memo(Navbar);
