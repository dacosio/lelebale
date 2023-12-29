import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";
import StickyNav, { styles as stickyNavStyles } from "react-sticky-nav";

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 1rem 4rem;
  ${stickyNavStyles};

  @media screen and (max-width: 768px) {
    padding: 1rem 3rem;
  }
  @media screen and (max-width: 425px) {
    padding: 1rem 1rem;
  }
`;
export const Logo = styled.div``;
export const Right = styled.div`
  display: flex;
  gap: 1rem;

  .header-btn {
    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  // position: relative;
`;

export const Concierge = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  cursor: pointer;

  position: relative;
`;

export const Sticky = styled.nav`
  z-index: 100;
`;
