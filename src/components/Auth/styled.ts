import styled from "@emotion/styled";

export const AuthFormBox = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: auto;
`;

export const AuthInput = styled.input`
  margin-top: 5rem;
  width: 100rem;
  height: 10rem;
  font-size: 3rem;
  padding-left: 2rem;
  color: #757575;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid black;
`;

export const AuthPwInput = styled.input`
  margin-top: 5rem;
  width: 100rem;
  height: 10rem;
  font-size: 3rem;
  padding-left: 2rem;
  color: #757575;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid black;
  letter-spacing: 1rem;
  text-overflow: ellipsis;
  ::placeholder {
    letter-spacing: normal;
  }
`;

export const AuthErrorMsg = styled.span`
  font-size: 1rem;
  color: red;
`;

export const AuthFormTitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 7rem;
  height: auto;
`;

export const AuthFormTitle = styled.span`
  font-size: 7rem;
`;
