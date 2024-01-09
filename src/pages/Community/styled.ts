import styled from "@emotion/styled";

import { colors } from "../../styles";

export const CommunitySearchBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${colors.secondary};
  border-radius: 5rem;
  column-gap: 1rem;
  padding: 0rem 2rem;
  background-color: #fefefe;
`;
export const CommunitySearchInput = styled.input`
  width: 110rem;
  height: 4rem;
  background-color: transparent;
  font-size: 1.6rem;
  border: none;
`;

export const CommunityWrapper = styled.div`
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const CommunityBox = styled.div`
  margin-top: 2rem;
  background-color: #ffffff;
  width: 130rem;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 1350px) {
    width: 100rem;
  }
  @media screen and (max-width: 1050px) {
    width: 70rem;
    font-size: 1.5rem;
  }
`;

export const CommunityTitleBox = styled.div`
  /* border: 1px solid red; */
  position: relative;
  border-bottom: 1px solid #000;
  width: 125rem;
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1350px) {
    width: 95rem;
  }
  @media screen and (max-width: 1050px) {
    width: 65rem;
    font-size: 1.5rem;
  }
`;

export const CommunityTitle = styled.span`
  font-size: 4rem;
  font-weight: 500;
`;

export const PathBox = styled.div`
  position: absolute;
  font-size: 2rem;
  font-weight: 100;
  /* border: 1px solid red; */
  width: 120rem;
  @media screen and (max-width: 1350px) {
    width: 90rem;
  }
  @media screen and (max-width: 1050px) {
    width: 60rem;
    font-size: 1.5rem;
  }
`;
