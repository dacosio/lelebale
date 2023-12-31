import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";

export const Container = styled.div``;

export const Hr = styled.hr`
  border: 0;
  height: 1px;
  background: black;
`;

export const TitleWrap = styled.div`
  display: flex;
  gap: 1rem;
  align-items: flex-end;

  p {
    color: #171717;
  }
  @media screen and (max-width: 542px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
    gap: 0;

    p {
      line-height: 50%;
    }
  }
`;
