import styled from "@emotion/styled";
import { theme } from "utils/Theme";
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
