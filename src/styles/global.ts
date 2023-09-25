import { css } from "@emotion/react";
import { createGlobalStyle } from "styled-components";
import { reset } from "./reset";

export interface FontValue {
  sizes: number;
  weight: number;
  colors?: string;
}

export const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
    ::-webkit-scrollbar {
      display: none;
    }
    &:focus {
      outline: none;
    }
  }

  html {
    font-size: 10px;
    font-family: "NanumSquareNeo-Variable";
  }

  :root{
    --color-backgroud: #edeaea;
    --color-text-primary: #000000;
    
  }
  body {
    height: 100vh;
    display:flex;
    justify-content:center;
    align-items:flex-start;
    font-size: 3rem;
    background-color: var(--color-backgroud);
    color: var(--color-text-primary);
    border: none;
    letter-spacing: 0.2rem;
  }
`;

export const AuthInput = `
  margin-top: 5rem;
  width: 100rem;
  height: 10rem;
  font-size: 3rem;
  padding-left: 2rem;
  color: #757575;
  background-color: #edeaea;
  border: none;
  border-bottom: 1px solid black;
`;
