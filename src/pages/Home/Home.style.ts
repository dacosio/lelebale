import styled from "@emotion/styled";
import HeroImg from "../../images/hero.jpg";

export const Container = styled.div``;

export const HeaderWrapper = styled.div`
  background-color: ${({ theme }) => theme.dark};
  color: ${({ theme }) => theme.light};
  margin: 0;
  padding: 0;
`;

export const Hero = styled.div`
  background-image: url(${HeroImg});
  background-size: cover;
  background-position: center;
  max-height: 100%;
  height: calc(100vh - 122px);
`;

export const HeroHeader = styled.h1`
  padding: 1rem 4rem 0 4rem;
  margin-bottom: 0;

  @media screen and (max-width: 425px) {
    padding: 1rem 1rem 0 1rem;
    p {
      text-align: center;
    }
  }
`;

export const HeroSubtitle = styled.h2`
  padding: 0 4rem 1rem 4rem;
  margin-top: 0;

  @media screen and (max-width: 425px) {
    padding: 0rem 1rem 1rem 1rem;
    p {
      text-align: center;
    }
  }
`;

export const HeroWrapper = styled.div`
  position: absolute;
  bottom: 0;
  background-color: ${({ theme }) => theme.dark};
  width: 100%;
`;
