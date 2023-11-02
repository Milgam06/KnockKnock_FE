import styled from "@emotion/styled";
import { FontValue } from "../../../styles";

export const NavbarWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 10rem;
  background-color: #ffffff;
`;

export const NavbarContentContainer = styled.div`
  width: 97vw;
  height: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border: 1px solid red; */
  @media screen and (max-width: 1350px) {
  }
`;

export const RogoWrapper = styled.div`
  width: 30rem;
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
`;

export const FuncBtnWrapper = styled.div`
  width: 30rem;
  height: 10rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* border: 1px solid red; */
  @media screen and (max-width: 1350px) {
    width: 25rem;
  }
  @media screen and (max-width: 1050px) {
    width: 20rem;
  }
`;

export const TextImage = styled.img`
  max-width: 23rem;
  min-width: 20rem;
  max-height: 2rem;
  min-height: 3rem;
`;

export const LogoImage = styled.img`
  width: 5rem;
  height: 5.5rem;
`;

export const FunctionButton = styled.button<FontValue>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  font-size: ${(props) => props.sizes}rem;
  font-weight: ${(props) => props.weight};
  font-family: "NanumSquareNeo-Variable";
  text-align: center;
  border: none;
  width: 14rem;
  height: 5rem;
  border-radius: 2rem;
  transition: all 0.2s;
  /* border: 1px solid red; */
  @media screen and (max-width: 1350px) {
    width: 10rem;
    height: 4rem;
    font-size: ${(props) => props.sizes - 0.5}rem;
  }
  @media screen and (max-width: 1050px) {
    width: 8rem;
    height: 4rem;
    font-size: ${(props) => props.sizes - 1}rem;
  }
  &:hover {
    color: #ec9988;
    transform: translateY(-0.4rem);
    text-shadow: 0 0.3em 0.5em lightgray;
    scale: 1.1;
  }
`;
