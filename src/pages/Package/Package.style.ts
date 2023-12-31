import styled from "@emotion/styled";
import { theme } from "utils/Theme";
import PackageHero from "../../images/packages/packageHero.jpg";
import Typography from "components/base/Typography";

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
  padding-top: 0.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-auto-flow: dense;
`;

export const FilterLabel = styled.div`
  padding: 1rem 4rem 0rem 4rem;

  @media screen and (max-width: 768px) {
    padding: 1rem 0.5rem;
  }

  @media screen and (max-width: 425px) {
    .segment-btn p {
      font-size: 0.825em;
    }
  }
`;

export const DetailsWrapper = styled.div`
  padding: 1rem 4rem 0rem 4rem;
  padding-top: 2rem;

  display: grid;
  grid-template-columns: 62.5% 1fr;
  gap: 3rem;

  @media screen and (max-width: 768px) {
    padding: 1rem 0.5rem;
  }

  @media screen and (max-width: 425px) {
    .segment-btn p {
      font-size: 0.825em;
    }
  }
`;
