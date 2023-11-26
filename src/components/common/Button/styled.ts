import styled from "@emotion/styled";
import React from "react";
import { colors } from "../../../styles";

export interface ButtonValue {
  width: number;
  height: number;
  sizes: number;
  weight: number;
  message?: string | number | React.ReactNode;
  onFunc?: React.MouseEventHandler;
}

export const ButtonContainer = styled.button<ButtonValue>`
  width: ${(props) => props.width}rem;
  height: ${(props) => props.height}rem;
  font-size: ${(props) => props.sizes}rem;
  font-weight: ${(props) => props.weight};
  color: #000;
  text-align: center;
  background-color: ${colors.tertiary};
  border: none;
  border-radius: 8rem;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    scale: 1.1;
    font-size: ${(props) => props.sizes + 0.5}rem;
    color: #fff;
    background-color: #ffa18d;
    box-shadow: 0 5px 10px 0 ${colors.primary};
  }
  &:active {
    color: ${colors.primary};
    scale: 1;
    box-shadow: none;
  }
`;
