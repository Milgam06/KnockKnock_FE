import styled from "@emotion/styled";
import { AuthInput } from "../../styles";

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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: auto;
  margin-top: 5rem;
  /* border: 1px solid red; */
`;

export const LoginInput = styled.input`
  ${AuthInput}
`;
export const LoginPwInput = styled.input`
  ${AuthInput};
  letter-spacing: 1rem;
  text-overflow: ellipsis;
  ::placeholder {
    letter-spacing: normal;
  }
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
