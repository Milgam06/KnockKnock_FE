import styled from "@emotion/styled";
import { MouseEventHandler } from "react";
import * as S from "./styled";
import { ButtonValue } from "./styled";

export const ContentsButton: React.FC<ButtonValue> = ({
  width,
  height,
  sizes,
  weight,
  message,
  onFunc,
  colors,
}) => {
  return (
    <>
      <S.ButtonContainer
        width={width}
        height={height}
        sizes={sizes}
        weight={weight}
        onClick={onFunc}
        colors={colors}
      >
        {message}
      </S.ButtonContainer>
    </>
  );
};
