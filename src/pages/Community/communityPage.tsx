import { useParams } from "react-router-dom";
import * as S from "./styled";
import { NotFoundPage } from "../";

export const GenreArray: readonly string[] = [
  "GAME",
  "SPORTS",
  "ART",
  "HEALTH",
  "COOK",
  "MUSIC",
];

export const CommunityPage: React.FC = () => {
  const { comm } = useParams();
  return (
    <>
      {Number(comm) >= 0 && Number(comm) <= 5 ? (
        <S.CommunityWrapper>
          <S.CommunityBox>
            <S.CommunityTitleBox>
              <S.PathBox>{GenreArray[Number(comm)]} ▶︎ 글 목록</S.PathBox>
              <S.CommunityTitle>{GenreArray[Number(comm)]}</S.CommunityTitle>
            </S.CommunityTitleBox>
          </S.CommunityBox>
        </S.CommunityWrapper>
      ) : (
        <NotFoundPage />
      )}
    </>
  );
};
