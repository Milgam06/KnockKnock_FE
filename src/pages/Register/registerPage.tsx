import { useForm } from "react-hook-form";
import * as S from "./styled";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  AuthFormElements,
  AuthFormTitle,
  AuthForm,
  UnderAuthForm,
} from "../../components";

export const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState<AuthFormElements>();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<AuthFormElements>();
  const onGoLogin = () => {
    navigate("/login");
  };

  const onSubmit = () => {
    let uid = watch("userid");
    let pwd = watch("password");
    let eml = watch("email");
    setUserData({
      userid: uid,
      password: pwd,
      email: eml,
    });
    console.log(userData?.email, userData?.password, userData?.userid);
  };
  useEffect(() => {
    console.log(userData?.email, userData?.password, userData?.userid);
  }, [userData]);
  return (
    <>
      <AuthFormTitle>
        <AuthFormTitle.Title>회원가입</AuthFormTitle.Title>
      </AuthFormTitle>
      <AuthForm onSubmit={handleSubmit(onSubmit)}>
        <AuthForm.Input
          placeholder="이메일"
          {...register("email", {
            required: "이메일은 필수입니다",
          })}
        />
        <AuthForm.ErrorMsg>{errors.email?.message}</AuthForm.ErrorMsg>
        <AuthForm.Input
          placeholder="닉네임"
          {...register("userid", {
            required: "닉네임은 필수입니다",
            minLength: 2,
            maxLength: 12,
          })}
        />
        <AuthForm.ErrorMsg>{errors.userid?.message}</AuthForm.ErrorMsg>
        <AuthForm.PwInput
          type="password"
          placeholder="비밀번호"
          {...register("password", {
            required: "비밀번호는 필수입니다",
            minLength: {
              value: 4,
              message: "비밀번호는 최소 4자리여야 합니다.",
            },
            maxLength: {
              value: 16,
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
        <AuthForm.ErrorMsg>{errors.password?.message}</AuthForm.ErrorMsg>
      </AuthForm>
      <AuthForm.SubmitBtnBox>
        <AuthForm.SubmitBtn>회원 가입</AuthForm.SubmitBtn>
      </AuthForm.SubmitBtnBox>
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
