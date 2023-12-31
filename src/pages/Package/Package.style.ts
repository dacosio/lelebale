import styled from "@emotion/styled";
import { theme } from "utils/Theme";
import PackageHero from "../../images/packages/packageHero.jpg";

export const Container = styled.div``;

export const Hero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${PackageHero});
  background-size: cover;
  background-position: bottom;
  max-height: 100%;
  height: calc(60vh - 122px);
`;

export const Calendar = styled.div`
  height: 15vh;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SegmentWrapper = styled.div`
  padding: 1rem 4rem;

  @media screen and (max-width: 768px) {
    padding: 1rem 0.5rem;
  }

  @media screen and (max-width: 425px) {
    .segment-btn p {
      font-size: 0.825em;
    }
  }
`;
