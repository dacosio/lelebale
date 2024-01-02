import React, { useState, useEffect } from "react";
import { PackageGeneratedProps, Option } from "./Package.props";
import {
  Container,
  Hero,
  Calendar,
  SegmentWrapper,
  FilterLabel,
  DetailsWrapper,
  AmenitiesWrapper,
  Head,
  Left,
  Description,
  Right,
} from "./Package.style";
import Header from "components/layout/Header";
import Navbar from "components/layout/Navbar";
import StickyNav from "react-sticky-nav";
import Typography from "components/base/Typography";
import SegmentedControl from "components/base/SegmentedControl";
import MobileDrawer from "components/base/MobileDrawer";
import Button from "components/base/Button";
import Title from "components/base/Title";
import Amenities from "components/module/Amenities";
import HouseRules from "components/base/HouseRules";

const PackageView = (props: PackageGeneratedProps) => {
  const {
    packageOptions,
    selectedOption,
    setSelectedOption,
    isOpenDrawer,
    setIsOpenDrawer,
    isModalVisible,
    bundle,
    matches,
    houseRules,
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
      {/* <Calendar>
        <Typography variant="subtitle1" style={{ color: "white" }}>
          The calendar will go here *WIP*
        </Typography>
      </Calendar> */}

      <FilterLabel>
        <div>
          <Typography variant="small" style={{ color: "#61605f" }}>
            Choose a package:
          </Typography>
          {matches && (
            <Button
              text={bundle}
              variant="dark"
              size="sm"
              hover={false}
              className="segment-btn"
              takeFullWidth
              onClick={() => setIsOpenDrawer(true)}
            />
          )}
        </div>
        {!matches && (
          <SegmentWrapper>
            <SegmentedControl
              options={packageOptions}
              selectedOption={selectedOption}
              onClickControl={(value) => {
                setSelectedOption(value);
              }}
            />
          </SegmentWrapper>
        )}
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
              setIsOpenDrawer(false);
            }}
          />
        </SegmentWrapper>
      </MobileDrawer>

      <DetailsWrapper>
        <Left>
          <Title
            title={bundle.toUpperCase()}
            variant="subtitle1"
            price="5000/day"
          />
          <Head>
            <Typography variant="title3" style={{ color: "#171717" }}>
              About
            </Typography>
          </Head>
          <Description>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem,
            neque unde. Veritatis rem deleniti excepturi ipsa accusantium
            dolores repellendus praesentium. In laborum cum aliquid corporis
            deserunt natus tenetur quasi? Cumque ducimus possimus debitis
            molestias deleniti ea corrupti provident porro cum! Similique nisi,
            explicabo laboriosam accusamus fuga magni alias iure facere.
          </Description>
          <AmenitiesWrapper>
            <Amenities label="Free Wifi" caption="High Speed Internet" />
            <Amenities label="Free Wifi" caption="High Speed Internet" />
            <Amenities label="Free Wifi" caption="High Speed Internet" />
            <Amenities label="Free Wifi" caption="High Speed Internet" />
            <Amenities label="Free Wifi" caption="High Speed Internet" />
            <Amenities label="Free Wifi" caption="High Speed Internet" />
            <Amenities label="Free Wifi" caption="High Speed Internet" />
            <Amenities label="Free Wifi" caption="High Speed Internet" />
          </AmenitiesWrapper>
          <Head>
            <HouseRules title="house rules and policies" items={houseRules} />
          </Head>
          {/* <Head>
            <Typography variant="title3" style={{ color: "#171717" }}>
              About
            </Typography>
          </Head> */}
        </Left>
        <Right>insert calendar here! TODO</Right>
      </DetailsWrapper>
    </Container>
  );
};

export default PackageView;
