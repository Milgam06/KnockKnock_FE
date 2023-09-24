import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { InputValue } from "../Register/registerPage";
import * as S from "./styled";

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<InputValue>();
  return (
    <>
      <S.LoginTitleBox>
        <S.LoginTitle>로그인</S.LoginTitle>
      </S.LoginTitleBox>
      <S.LoginForm>
        <S.LoginInput
          placeholder="이메일"
          {...register("email", {
            required: "이메일은 필수입니다",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
              message: "올바른 이메일 형식이 아닙니다.",
            },
          })}
        />
        <S.LoginInput type="password" placeholder="비밀번호" />
      </S.LoginForm>
      <S.BottomTextWrapper>
        <S.BottomTextBox>
          <S.AskRegister>회원이 아니신가요?</S.AskRegister>
          <S.GoRegister>회원가입</S.GoRegister>
        </S.BottomTextBox>
      </S.BottomTextWrapper>
    </>
  );
};
