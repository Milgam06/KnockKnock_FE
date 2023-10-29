import styled from "@emotion/styled";
import {
  AuthFormBox,
  AuthInput,
  AuthPwInput,
} from "../../components/Auth/styled";

export const LoginTitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 7rem;
  height: auto;
  /* border: 1px solid red; */
`;

export const LoginTitle = styled.span`
  font-size: 7rem;
`;

export const LoginForm = styled.form`
  ${AuthFormBox}
  margin-top: 5rem;
  /* border: 1px solid red; */
`;

export const LoginInput = styled.input`
  ${AuthInput}
`;
export const LoginPwInput = styled.input`
  ${AuthPwInput}
`;

export const BottomTextWrapper = styled.div`
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid red; */
  margin-top: 16rem;
`;

export const BottomTextBox = styled.div`
  width: 35rem;
  height: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border: 1px solid blue; */
`;

export const AskRegister = styled.span`
  font-size: 2rem;
  color: #757575;
`;

export const GoRegister = styled.span`
  font-size: 2rem;
  color: #d1193e;
  border-bottom: 1px solid #d1193e;
  cursor: pointer;
  padding-bottom: 0.5rem;
`;
