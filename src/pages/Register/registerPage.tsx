import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  AuthFormElements,
  AuthFormTitle,
  AuthForm,
  UnderAuthForm,
} from "../../components";
import { signUp } from "../../service";

export const RegisterPage: React.FC = () => {
  console.log(process.env.REACT_APP_FIREBASE_API_KEY, "asdfgh");
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

  const onSubmit = async () => {
    setUserData({
      userid: watch("userid"),
      password: watch("password"),
      email: watch("email"),
    });
    if (userData?.email && userData?.userid && userData?.password) {
      try {
        await signUp(userData.email, userData.userid, userData.password);
      } catch (error) {
        console.error("회원가입 실패 : ", error);
      }
    } else {
      alert("회원가입 실패");
    }
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
          placeholder={
            !Boolean(errors.email) ? "이메일" : errors.email?.message
          }
          {...register("email", {
            required: "이메일은 필수입니다",
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
