import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { InputValue } from "../Register/registerPage";
import * as S from "./styled";

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <S.LoginTitleBox>
      <S.LoginTitle>로그인</S.LoginTitle>
    </S.LoginTitleBox>
  );
};
