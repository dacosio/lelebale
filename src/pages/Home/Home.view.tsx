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
      <SectionCard
        title="Our Story"
        description=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
            exercitationem neque hic nobis vitae quas earum ducimus laboriosam
            saepe voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Dicta porro placeat voluptatibus doloremque dignissimos
            blanditiis rem, ratione molestias ullam voluptate beatae qui, soluta
            reprehenderit ipsum alias harum ab quis libero?"
        lists={["lorem ipsum", "lorem ipsum", "lorem ipsum"]}
      />
    </Container>
  );
};

export default HomeView;
