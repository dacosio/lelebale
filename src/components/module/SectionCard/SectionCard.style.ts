import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";
import Typography from "components/base/Typography";

export const Container = styled.div`
  padding: 3.5rem 4rem;
`;

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 35% 1fr;
  order: 0;
  gap: 3rem;
  padding-top: 2rem;
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

export const Hr = styled.hr`
  border: 0;
  height: 1px;
  background: #333;
  background-image: linear-gradient(to right, #ccc, #333, #ccc);
  margin-top: 1rem;
`;

export const List = styled.div`
  margin-bottom: 1rem;
`;
