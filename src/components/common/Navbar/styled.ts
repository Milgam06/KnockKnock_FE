import styled from "@emotion/styled";
import { FontValue } from "../../../styles";

export const NavbarWrapper = styled.div`
  top: 0;
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 10rem;
  background-color: #ffffff;
  @media screen and (max-width: 1050px) {
    height: 8rem;
  }
`;

export const NavbarContentContainer = styled.div`
  width: 96vw;
  height: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border: 1px solid red; */
  @media screen and (max-width: 1050px) {
    height: 8rem;
  }
`;

export const RogoWrapper = styled.div`
  width: 30rem;
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  /* border: 1px solid red; */
  @media screen and (max-width: 1050px) {
    width: 23rem;
    height: 8rem;
    display: flex;
    justify-content: space-around;
  }
`;

export const TextImage = styled.img`
  /* border: 1px solid red; */
  width: 22rem;
  height: 3rem;
  @media screen and (max-width: 1050px) {
    scale: 0.8;
  }
`;

export const LogoImage = styled.img`
  /* border: 1px solid red; */
  width: 5rem;
  height: 6rem;
  @media screen and (max-width: 1050px) {
    scale: 0.8;
  }
`;

export const FuncTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  column-gap: 1rem;
  @media screen and (max-width: 1350px) {
    width: 25rem;
  }
  @media screen and (max-width: 1050px) {
    width: 20rem;
  }
`;

export const FunctionText = styled.span<FontValue>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  font-size: ${(props) => props.sizes}rem;
  font-weight: ${(props) => props.weight};
  font-family: "NanumSquareNeo-Variable";
  letter-spacing: 0.1rem;
  letter-spacing: 0.1rem;
  text-align: center;
  border: none;
  padding: 1rem 2rem;
  transition: all 0.2s;
  cursor: pointer;
  @media screen and (max-width: 1050px) {
    width: 10rem;
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
