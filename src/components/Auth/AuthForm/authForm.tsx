import * as S from "./styled";

export interface AuthFormElements {
  email: string;
  userid: string;
  password: string;
}

export const AuthForm = Object.assign(S.AuthFormBox, {
  Input: S.AuthInput,
  PwInput: S.AuthPwInput,
  ErrorMsg: S.AuthErrorMsg,
  SubmitBtnBox: S.AuthSubmitButtonBox,
  SubmitBtn: S.AuthSubmitButton,
});

export const UnderAuthForm = Object.assign(S.BottomTextBoxWrapper, {
  TextBox: S.BottomTextBox,
  AskAccountText: S.AskAccount,
  SwitchFormFunc: S.SwitchAuthForm,
});

export const AuthFormTitle = Object.assign(S.AuthFormTitleBox, {
  Title: S.AuthFormTitle,
});
