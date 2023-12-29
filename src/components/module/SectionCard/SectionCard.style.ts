import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";

export const Container = styled.div`
  padding: 3.5rem 4rem;

  @media screen and (max-width: 425px) {
    padding: 2rem 1rem;
  }
`;

export const Wrapper = styled.section<{ order?: boolean }>`
  display: grid;
  grid-template-columns: ${({ order }) => (order ? "1fr 35%" : "35% 1fr")};
  gap: 3rem;
  padding-top: 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: unset;
  }
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
  margin-bottom: 1rem;
`;

export const List = styled.div`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const ListIcon = styled.div``;

export const SeeMore = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-top: 2rem;
  cursor: pointer;
  // transition: text-decoration 0.3s ease-in-out;

  // &:hover {
  //   text-decoration: underline;
  //   text-underline-offset: 0.2rem;
  // }
`;
