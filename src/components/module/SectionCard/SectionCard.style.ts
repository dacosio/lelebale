import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";

export const Container = styled.div`
  padding: 3.5rem 4rem;
`;

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 35% 1fr;
  order: 0;
  gap: 3rem;
`;

export const Left = styled.div``;

export const Right = styled.div`
  height: 100%;
`;

export const StoryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
