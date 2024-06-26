import React from "react";
import * as S from "./styled";
import { ContentsButton } from "../../components";
import { useNavigate } from "react-router-dom";

export const MainPage: React.FC = () => {
  const navigate = useNavigate();
  const onGoCategory = () => {
    navigate("/category");
  };

  return (
    <S.ContentWrapper>
      <S.TitleContainer>
        <S.MainTitle sizes={6} weight={800}>
          함께 해서 더 즐거운, 취미로 하나 될 우리
        </S.MainTitle>
        <S.SubTitle sizes={3} weight={100}>
          취미 공유부터 나만의 팁 전수까지
        </S.SubTitle>
        <S.SubTitle sizes={3} weight={100}>
          나와 같은 취미를 가진 사람들을
          <S.SubTitle colors="red" sizes={3.5} weight={600}>
            낙낙
          </S.SubTitle>
          에서 지금 만나보세요!
        </S.SubTitle>
      </S.TitleContainer>
      <S.ButtonContainer>
        <ContentsButton
          width={35}
          height={13}
          sizes={4}
          weight={600}
          onFunc={onGoCategory}
          message={"문 두드리기"}
        ></ContentsButton>
      </S.ButtonContainer>
    </S.ContentWrapper>
  );
};
