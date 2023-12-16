import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";

import {
  AuthFormElements,
  AuthFormTitle,
  AuthForm,
  UnderAuthForm,
} from "../../components";
import { onSignUp } from "../../service";
import { authState } from "../../atoms";

export const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState<AuthFormElements>();
  // const [authStateValue, setAuthStateValue] = useRecoilState(authState);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<AuthFormElements>();
  const onGoLogin = () => {
    navigate("/login");
  };

  const onSubmit = async () => {
    const newUser: AuthFormElements = {
      email: watch("email"),
      userid: watch("userid") || "",
      password: watch("password"),
    };
    try {
      await onSignUp(newUser.email, newUser.userid, newUser.password);
      alert("회원가입 성공");
      // setAuthStateValue(true);
      // console.log(authStateValue, "asdf");
    } catch (error) {
      console.error("회원가입 실패 : ", error);
      console.log(typeof error);
    }
  };
  return (
    <>
      <AuthFormTitle>
        <AuthFormTitle.Title>회원가입</AuthFormTitle.Title>
      </AuthFormTitle>
      <AuthForm onSubmit={handleSubmit(onSubmit)}>
        <AuthForm.Input
          placeholder={
            !Boolean(errors.email) ? "이메일" : errors.email?.message
          }
          {...register("email", {
            required: "이메일은 필수입니다",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "이메일 형식이 올바르지 않습니다",
            },
          })}
        />
        {/* <AuthForm.ErrorMsg>{errors.email?.message}</AuthForm.ErrorMsg> */}
        <AuthForm.Input
          placeholder={
            !Boolean(errors.userid) ? "닉네임" : errors.userid?.message
          }
          {...register("userid", {
            required: "닉네임은 필수입니다",
            minLength: 2,
            maxLength: 12,
          })}
        />
        {/* <AuthForm.ErrorMsg>{errors.userid?.message}</AuthForm.ErrorMsg> */}
        <AuthForm.PwInput
          type="password"
          placeholder={
            !Boolean(errors.password) ? "비밀번호" : errors.password?.message
          }
          {...register("password", {
            required: "비밀번호는 필수입니다",
            minLength: {
              value: 4,
              message: "비밀번호는 최소 4자리여야 합니다.",
            },
            maxLength: {
              value: 16,
              message: "비밀번호는 최대 16자리를 넘을 수 없습니다.",
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
        {/* <AuthForm.ErrorMsg>{errors.password?.message}</AuthForm.ErrorMsg> */}
        <AuthForm.SubmitBtnBox>
          <AuthForm.SubmitBtn>회원 가입</AuthForm.SubmitBtn>
        </AuthForm.SubmitBtnBox>
      </AuthForm>
      <UnderAuthForm>
        <UnderAuthForm.TextBox>
          <UnderAuthForm.AskAccountText>
            이미 회원이신가요?
          </UnderAuthForm.AskAccountText>
          <UnderAuthForm.SwitchFormFunc onClick={onGoLogin}>
            로그인
          </UnderAuthForm.SwitchFormFunc>
        </UnderAuthForm.TextBox>
      </UnderAuthForm>
    </>
  );
};
