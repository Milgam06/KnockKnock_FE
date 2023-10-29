import * as S from "./styled";

export interface AuthFormLayouts {
  Input: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  PwInput: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
}

export interface AuthFormElements {
  email?: string;
  userid?: string;
  password: string;
}

export const AuthForm = Object.assign(S.AuthFormBox, {
  Input: S.AuthInput,
  PwInput: S.AuthPwInput,
  ErrorMsg: S.AuthErrorMsg,
});
