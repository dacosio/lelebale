import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";

export const Container = styled.span`
  display: flex;
  gap: 8px;
  justify-content: center;
  padding: 0.5rem;

  @media screen and (max-width: 375px) {
    p {
      font-size: 0.85rem;
    }
  }
`;
