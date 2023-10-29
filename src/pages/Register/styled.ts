import styled from "@emotion/styled";
import {
  AuthFormBox,
  AuthInput,
  AuthPwInput,
  AuthErrorMsg,
} from "../../components/Auth/styled";

export const RegisterTitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 7rem;
  height: auto;
  /* border: 1px solid red; */
`;

export const ResiterTitle = styled.span`
  font-size: 7rem;
`;

export const RegisterForm = styled.form`
  ${AuthFormBox}
  margin-top: 1rem;
  /* border: 1px solid red; */
`;

export const RegisterInput = styled.input`
  ${AuthInput}
`;
export const RegisterPwInput = styled.input`
  ${AuthPwInput}
`;

export const ErrorMsg = styled.span`
  ${AuthErrorMsg};
`;

export const BottomTextWrapper = styled.div`
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid red; */
  margin-top: 5rem;
`;

export const BottomTextBox = styled.div`
  width: 35rem;
  height: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border: 1px solid blue; */
`;

export const AskAccount = styled.span`
  font-size: 2rem;
  color: #757575;
`;

export const GoLogin = styled.span`
  font-size: 2rem;
  color: #d1193e;
  border-bottom: 1px solid #d1193e;
  cursor: pointer;
  padding-bottom: 0.5rem;
`;
