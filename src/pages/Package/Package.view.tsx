import React, { useState, useEffect } from "react";
import { PackageGeneratedProps, Option } from "./Package.props";
import { Container, Hero, Calendar } from "./Package.style";
import Header from "components/layout/Header";
import Navbar from "components/layout/Navbar";
import StickyNav from "react-sticky-nav";
import Typography from "components/base/Typography";
import SegmentedControl from "components/base/SegmentedControl";

const PackageView = (props: PackageGeneratedProps) => {
  const MOCK_OPTIONS = ["Package OH", "Package A"];
  const [state, setState] = useState(MOCK_OPTIONS[0]);
  return (
    <Container>
      <Header />
      <StickyNav>
        <Navbar hideBook />
      </StickyNav>
      <Hero>
        <Typography
          variant="btn"
          textColor="white"
          style={{ color: "white", marginBottom: "1.5rem" }}>
          Lele Bale
        </Typography>
        <Typography variant="title1" style={{ color: "white" }}>
          Packages
        </Typography>
      </Hero>

      <Calendar>
        <Typography variant="subtitle1" style={{ color: "white" }}>
          The calendar will go here *WIP*
        </Typography>
      </Calendar>
      <SegmentedControl
        options={MOCK_OPTIONS}
        selectedOption={state}
        onClickControl={(value) => {
          setState(value);
        }}
      />
    </Container>
  );
};

export default PackageView;
