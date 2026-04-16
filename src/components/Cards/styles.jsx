import styled from "styled-components";

export const Cardsdiv = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 254px);
  gap: 20px;
  margin: 0 auto;
  width: fit-content;
`;

export const CardsImage = styled.img`
  width: 254px;
  height: 338px;
  object-fit: cover;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;