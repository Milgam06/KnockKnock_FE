import React, { useEffect } from "react";
import * as S from "./styled";
import { useNavigate } from "react-router-dom";
import { Logo, Knock } from "../../../assets/Image";
import { onSignOut } from "../../../api";

export const Navbar: React.FC = () => {
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
            <S.LogoImage src={Logo} />
            <S.TextImage src={Knock} />
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
