import styled from "@emotion/styled";
import { FontValue } from "../../styles";

export const ContentWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* border: 1px solid red; */
`;

export const TitleContainer = styled.div`
  margin-top: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* border: 1px solid blue; */
`;

export const MainTitle = styled.span<FontValue>`
  font-size: ${(props) => props.sizes}rem;
  font-weight: ${(props) => props.weight};
  padding: 8rem;
  /* border: 1px solid black; */
`;

export const SubTitle = styled.span<FontValue>`
  font-size: ${(props) => props.sizes}rem;
  font-weight: ${(props) => props.weight};
  color: ${(props) => props.colors};
  padding: 0.5rem;
  /* border: 1px solid green; */
`;

export const ButtonContainer = styled.div`
  margin-top: 5rem;
  width: 10rem;
  height: 10rem;
  border: 1px solid red;
`;