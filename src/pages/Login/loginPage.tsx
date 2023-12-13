import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { signIn } from "../../service/firebase";
import {
  AuthFormElements,
  AuthFormTitle,
  AuthForm,
  UnderAuthForm,
} from "../../components";
import { authState } from "../../atoms";

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState<AuthFormElements>();
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthFormElements>();
  const onGoRegister = () => {
    navigate("/register");
  };

  const onSubmit = async () => {
    console.log("asdf");
    const oldUser = {
      email: watch("email"),
      password: watch("password"),
    };
    setUserData(oldUser);
    if (userData?.email && userData?.password !== undefined) {
      try {
        await signIn(userData.email, userData.password);
      } catch (error) {
        console.error("로그인 실패 : ", error);
      }
    } else {
      alert("로그인 asdf");
    }
  };

  return (
    <>
      <AuthFormTitle>
        <AuthFormTitle.Title>로그인</AuthFormTitle.Title>
      </AuthFormTitle>
      <AuthForm onSubmit={handleSubmit(onSubmit)}>
        <AuthForm.Input
          placeholder={
            !Boolean(errors.email) ? "이메일" : errors.email?.message
          }
          {...register("email", {
            required: "이메일은 필수입니다",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
              message: "올바른 이메일 형식이 아닙니다.",
            },
          })}
        />
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
        <AuthForm.SubmitBtnBox>
          <AuthForm.SubmitBtn>로그인</AuthForm.SubmitBtn>
        </AuthForm.SubmitBtnBox>
      </AuthForm>
      {console.log(errors.email?.message, errors.password?.message)}
      <UnderAuthForm>
        <UnderAuthForm.TextBox>
          <UnderAuthForm.AskAccountText>
            회원이 아니신가요?
          </UnderAuthForm.AskAccountText>
          <UnderAuthForm.SwitchFormFunc onClick={onGoRegister}>
            회원가입
          </UnderAuthForm.SwitchFormFunc>
        </UnderAuthForm.TextBox>
      </UnderAuthForm>
    </>
  );
};
