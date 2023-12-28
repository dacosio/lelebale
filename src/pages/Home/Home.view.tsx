import React from "react";
import { HomeGeneratedProps } from "./Home.props";
import { Container, HeaderWrapper, Hero } from "./Home.style";
import Header from "components/layout/Header";
import StickyNav from "react-sticky-nav";
import Navbar from "components/layout/Navbar";

const HomeView = (props: HomeGeneratedProps) => {
  return (
    <Container>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <StickyNav>
        {(position) => (
          <>
            <Navbar />
            {/* <div>{position}</div> */}
          </>
        )}
      </StickyNav>
      <Hero />
    </Container>
  );
};

export default HomeView;
