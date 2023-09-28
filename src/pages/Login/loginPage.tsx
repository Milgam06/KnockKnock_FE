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
  const onGoRegister = () => {
    navigate("/register");
  };
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
        <S.LoginPwInput
          type="password"
          placeholder="비밀번호"
          {...register("password", {
            required: "비밀번호는 필수입니다",
            minLength: {
              value: 4,
              message: "비밀번호는 최소 4자리여야 합니다.",
            },
            maxLength: {
              value: 12,
              message: "비밀번호는 최대 12자리를 넘을 수 없습니다.",
            },
            validate: (password) => {
              const hasUppercase = /[A-Z]/.test(password);
              const hasLowercase = /[a-z]/.test(password);
              const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(
                password
              );
              if (!hasUppercase) {
                return "비밀번호에 대문자를 최소 하나 이상 포함해야 합니다.";
              }

              if (!hasLowercase) {
                return "비밀번호에 소문자를 최소 하나 이상 포함해야 합니다.";
              }

              if (!hasSpecialChar) {
                return "비밀번호에 특수 문자를 최소 하나 이상 포함해야 합니다.";
              }
              return true;
            },
          })}
        />
      </S.LoginForm>
      <S.BottomTextWrapper>
        <S.BottomTextBox>
          <S.AskRegister>회원이 아니신가요?</S.AskRegister>
          <S.GoRegister onClick={onGoRegister}>회원가입</S.GoRegister>
        </S.BottomTextBox>
      </S.BottomTextWrapper>
    </>
  );
};
