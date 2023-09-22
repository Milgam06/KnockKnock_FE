import styled from "@emotion/styled";
import React from "react";

export interface ButtonValue {
  width: number;
  height: number;
  sizes: number;
  weight: number;
  colors?: string;
  message?: string | number | React.ReactNode;
  onFunc?: React.MouseEventHandler;
}

export const ButtonContainer = styled.button<ButtonValue>`
  width: ${(props) => props.width}rem;
  height: ${(props) => props.height}rem;
  font-size: ${(props) => props.sizes}rem;
  font-weight: ${(props) => props.weight};
  color: ${(props) => props.colors};
  text-align: center;
  background-color: #f86e51;
  border: none;
  border-radius: 8rem;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    /* border-radius: 5rem; */
    font-size: ${(props) => props.sizes + 1}rem;
    background-color: #000;
    color: #f86e51;
    scale: 1.1;
  }
`;
