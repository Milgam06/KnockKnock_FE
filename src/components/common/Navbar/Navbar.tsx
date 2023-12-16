import React, { useEffect } from "react";
import * as S from "./styled";
import { useNavigate } from "react-router-dom";
import { LogoJpg, KnockJpg } from "../../../assets/Image";
import { useRecoilState } from "recoil";
import { authState } from "../../../atoms";
import { onSignOut } from "../../../service";

export const Navbar: React.FC = () => {
  const [authStateValue, setAuthStateValue] = useRecoilState(authState);
  const navigate = useNavigate();
  const toMain = () => {
    navigate("./");
  };
  const toRegister = () => {
    navigate("/register");
  };
  const toLogin = () => {
    navigate("/login");
  };

  const toLogout = () => {
    setAuthStateValue(false);
    onSignOut();
    console.log(authStateValue);
  };
  const toProfile = () => {
    navigate("/profile");
  };

  useEffect(() => {
    console.log(authStateValue);
  }, [authStateValue]);
  return (
    <>
      <S.NavbarWrapper>
        <S.NavbarContentContainer>
          <S.RogoWrapper onClick={toMain}>
            <S.LogoImage src={LogoJpg} />
            <S.TextImage src={KnockJpg} />
          </S.RogoWrapper>
          <S.FuncTextWrapper>
            {authStateValue ? (
              <>
                <S.FunctionText sizes={3} weight={100} onClick={toLogout}>
                  Log out
                </S.FunctionText>
                <S.FunctionText sizes={3} weight={100} onClick={toProfile}>
                  profiles
                </S.FunctionText>
              </>
            ) : (
              <>
                <S.FunctionText sizes={3} weight={100} onClick={toRegister}>
                  Register
                </S.FunctionText>
                <S.FunctionText sizes={3} weight={100} onClick={toLogin}>
                  Login
                </S.FunctionText>
              </>
            )}
          </S.FuncTextWrapper>
        </S.NavbarContentContainer>
      </S.NavbarWrapper>
    </>
  );
};
