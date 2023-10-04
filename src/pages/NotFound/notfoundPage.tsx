import * as S from "./styled";

export const NotFoundPage = () => {
  return (
    <>
      <S.NotFoundContainer>
        <S.NotFoundTitle>404</S.NotFoundTitle>
        <S.NotFoundMessage>{"Error{404_N0T_fouND}"}</S.NotFoundMessage>
      </S.NotFoundContainer>
    </>
  );
};
