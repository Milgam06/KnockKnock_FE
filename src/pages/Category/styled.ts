import styled from "@emotion/styled";

export const TitleWrapper = styled.div`
  height: 15rem;
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InnerTitleBox = styled.div`
  /* border: 1px solid red; */
  width: 120rem;
  height: 13rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const MainTitle = styled.span`
  font-size: 7rem;
  font-weight: 800;
`;

export const SubTitle = styled.span`
  font-size: 3rem;
  font-weight: 300;
`;

export const ButtonContentWrapper = styled.div`
  margin-top: 5rem;
  height: auto;
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ButtonContent = styled.div`
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  width: 130rem;
  height: 40rem;
`;
