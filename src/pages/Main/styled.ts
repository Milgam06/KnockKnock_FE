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
  text-align: center;
  /* border: 1px solid black; */
`;

export const SubTitle = styled.span<FontValue>`
  font-size: ${(props) => props.sizes}rem;
  font-weight: ${(props) => props.weight};
  color: ${(props) => props.colors};
  padding: 0.5rem;
  text-align: center;
  /* border: 1px solid green; */
`;

export const ButtonContainer = styled.div`
  margin-top: 10rem;
  width: 100% auto;
  height: 100% auto;
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
`;
