import React, { useState, useEffect } from "react";
import { PackageGeneratedProps, Option } from "./Package.props";
import {
  Container,
  Hero,
  Calendar,
  SegmentWrapper,
  FilterLabel,
} from "./Package.style";
import Header from "components/layout/Header";
import Navbar from "components/layout/Navbar";
import StickyNav from "react-sticky-nav";
import Typography from "components/base/Typography";
import SegmentedControl from "components/base/SegmentedControl";
import MobileDrawer from "components/base/MobileDrawer";

const PackageView = (props: PackageGeneratedProps) => {
  const {
    packageOptions,
    selectedOption,
    setSelectedOption,
    isOpenDrawer,
    setIsOpenDrawer,
    isModalVisible,
    bundle,
  } = props;

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

      <FilterLabel>
        <Typography variant="small" style={{ color: "#61605f" }}>
          Choose a package:
        </Typography>
        <SegmentWrapper>
          <SegmentedControl
            options={packageOptions}
            selectedOption={selectedOption}
            onClickControl={(value) => {
              setSelectedOption(value);
            }}
          />
        </SegmentWrapper>
      </FilterLabel>

      <MobileDrawer
        direction="bottom"
        isOpenDrawer={isOpenDrawer}
        handleDrawerClose={() => setIsOpenDrawer(false)}
        drawerSize="100%"
        isModalVisible={isModalVisible}>
        <SegmentWrapper>
          <SegmentedControl
            options={packageOptions}
            selectedOption={selectedOption}
            onClickControl={(value) => {
              setSelectedOption(value);
            }}
          />
        </SegmentWrapper>
      </MobileDrawer>
      <div style={{ display: "block" }}>{bundle}</div>
    </Container>
  );
};

export default PackageView;
