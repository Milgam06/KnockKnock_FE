import React from "react";
import * as S from "./styled";
import { useNavigate } from "react-router-dom";
import { LogoJpg, KnockJpg } from "../../assets/Image";

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const toMain = () => {
    navigate("./");
  };
  const toRegister = () => {
    navigate("./register");
  };
  const toLogin = () => {
    navigate("./login");
  };
  return (
    <>
      <S.NavbarWrapper>
        <S.NavbarContentContainer>
          <S.RogoWrapper onClick={toMain}>
            <S.LogoImage src={LogoJpg} />
            <S.TextImage src={KnockJpg} />
          </S.RogoWrapper>
          <S.FuncBtnWrapper>
            <S.FunctionButton sizes={3} weight={100} onClick={toRegister}>
              Register
            </S.FunctionButton>
            <S.FunctionButton sizes={3} weight={100} onClick={toLogin}>
              Login
            </S.FunctionButton>
          </S.FuncBtnWrapper>
        </S.NavbarContentContainer>
      </S.NavbarWrapper>
    </>
  );
};
