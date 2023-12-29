import React from "react";
import { HomeGeneratedProps } from "./Home.props";
import {
  Container,
  HeaderWrapper,
  Hero,
  HeroHeader,
  HeroSubtitle,
  HeroWrapper,
} from "./Home.style";
import Header from "components/layout/Header";
import StickyNav from "react-sticky-nav";
import Navbar from "components/layout/Navbar";
import Typography from "components/base/Typography";
import SectionCard from "components/module/SectionCard";

const HomeView = (props: HomeGeneratedProps) => {
  return (
    <Container>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <StickyNav>
        <Navbar />
      </StickyNav>

      <Hero>
        <HeroWrapper>
          <HeroHeader>
            <Typography variant="title1" style={{ color: "white" }}>
              Lele Bale Events Place
            </Typography>
          </HeroHeader>
          <HeroSubtitle>
            <Typography variant="subtitle1" style={{ color: "white" }}>
              Poolside & Patio Party Place
            </Typography>
          </HeroSubtitle>
        </HeroWrapper>
      </Hero>
      <SectionCard title="Our Story" />
    </Container>
  );
};

export default HomeView;
