import styled from "@emotion/styled";
import { colors } from "../../../styles";

export const AuthFormBox = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  height: auto;
  margin-top: 5rem;
  /* border: 1px solid red; */
`;

export const AuthInput = styled.input`
  margin-top: 2rem;
  width: 100rem;
  height: 10rem;
  font-size: 3rem;
  padding-left: 2rem;
  color: ${colors.primary};
  background-color: transparent;
  border: none;
  border-bottom: 1px solid black;

  @media screen and (max-width: 1350px) {
    width: 80rem;
    height: 8rem;
    font-size: 2.5rem;
  }
  @media screen and (max-width: 1050px) {
    width: 60rem;
    height: 6rem;
    font-size: 2rem;
  }
`;

export const AuthPwInput = styled.input`
  margin-top: 2rem;
  width: 100rem;
  height: 10rem;
  font-size: 3rem;
  padding-left: 2rem;
  color: ${colors.primary};
  background-color: transparent;
  border: none;
  border-bottom: 1px solid black;
  letter-spacing: 1rem;
  text-overflow: ellipsis;
  ::placeholder {
    letter-spacing: normal;
  }
  @media screen and (max-width: 1350px) {
    width: 80rem;
    height: 8rem;
    font-size: 2.5rem;
  }
  @media screen and (max-width: 1050px) {
    width: 60rem;
    height: 6rem;
    font-size: 2rem;
  }
`;

export const AuthErrorMsg = styled.span`
  font-size: 1rem;
  color: red;
`;

export const AuthFormTitleBox = styled.div`
  margin-top: 7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
`;

export const AuthFormTitle = styled.span`
  font-size: 7rem;
  @media screen and (max-width: 1350px) {
    font-size: 6rem;
  }
  @media screen and (max-width: 1050px) {
    font-size: 5rem;
  }
`;

export const AuthSubmitButtonBox = styled.div`
  margin-top: 8rem;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid red; */
`;

export const AuthSubmitButton = styled.button`
  width: 90rem;
  height: 5rem;
  font-size: 3rem;
  border-radius: 1rem;
  letter-spacing: 0.3rem;
  color: ${colors.primary};
  border-color: ${colors.primary};
  transition: all 0.3s;
  &:hover {
    scale: 1.1;
    color: #000;
    border-color: #000;
    box-shadow: 0 10px 10px 0 ${colors.primary};
  }
  &:active {
    background-color: ${colors.tertiary};
    color: #fff;
    border: 0;
    scale: 1;
    box-shadow: none;
  }
  @media screen and (max-width: 1350px) {
    width: 70rem;
    height: 4.5rem;
    font-size: 2.5rem;
  }
  @media screen and (max-width: 1050px) {
    width: 50rem;
    height: 4rem;
    font-size: 2rem;
  }
`;

export const BottomTextBoxWrapper = styled.div`
  margin-top: 5rem;
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid red; */
`;

export const BottomTextBox = styled.div`
  width: 35rem;
  height: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AskAccount = styled.span`
  font-size: 2rem;
  color: ${colors.primary};
`;

export const SwitchAuthForm = styled.span`
  font-size: 2rem;
  color: ${colors.secondary};
  border-bottom: 1px solid ${colors.secondary};
  cursor: pointer;
  padding-bottom: 0.5rem;
`;
