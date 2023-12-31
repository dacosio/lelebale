import React, { useState } from "react";
import { NavbarProps } from "./Navbar.props";
import { Container, Right, Logo, Concierge } from "./Navbar.style";
import Button from "components/base/Button";
import Typography from "../../base/Typography";
import { BiMessageDetail } from "react-icons/bi";
import LelebaleLogo from "../../../images/lelebaleLogo.png";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = (props: NavbarProps): JSX.Element => {
  const { hideBook } = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <Link to="/">
        <img
          src={LelebaleLogo}
          alt="logo"
          style={{ height: "auto", width: "100px" }}
        />
      </Link>
      <Right>
        <Concierge onClick={() => setIsOpen(!isOpen)}>
          <Typography variant="list">concierge</Typography>
          <BiMessageDetail size={23} />
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                style={{
                  position: "absolute",
                  bottom: -180,
                  right: 0,
                  textAlign: "right",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  width: "100%",
                  whiteSpace: "nowrap",
                }}>
                <Button
                  text="Message us"
                  variant="light"
                  size="sm"
                  style={{ marginBottom: 10 }}
                />
                <Button
                  text="Packages"
                  variant="light"
                  size="sm"
                  style={{ marginBottom: 10 }}
                />
                <Button
                  text="FAQ"
                  variant="light"
                  size="sm"
                  style={{ marginBottom: 10 }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </Concierge>

        {!hideBook && (
          <Button variant="dark" text="Book Now" className="header-btn" hover={false}/>
        )}
      </Right>
    </Container>
  );
};

export default React.memo(Navbar);
