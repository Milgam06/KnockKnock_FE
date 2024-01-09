import { useParams } from "react-router-dom";

import { SearchIcon } from "../../assets/Image";
import { NotFoundPage } from "../";
import * as S from "./styled";

export const GenreArray: readonly string[] = [
  "ART",
  "COOK",
  "GAME",
  "HEALTH",
  "MUSIC",
  "SPORTS",
];

export const CommunityPage: React.FC = () => {
  const { comm } = useParams();
  return (
    <>
      {Number(comm) >= 0 && Number(comm) <= 5 ? (
        <>
          <S.CommunityWrapper>
            <S.CommunitySearchBox>
              <img src={SearchIcon} alt="" />
              <S.CommunitySearchInput placeholder="검색어를 입력하세요." />
            </S.CommunitySearchBox>
            <S.CommunityBox>
              <S.CommunityTitleBox>
                <S.PathBox>{GenreArray[Number(comm)]} ▶︎ 글 목록</S.PathBox>
                <S.CommunityTitle>{GenreArray[Number(comm)]}</S.CommunityTitle>
              </S.CommunityTitleBox>
            </S.CommunityBox>
          </S.CommunityWrapper>
        </>
      ) : (
        <NotFoundPage />
      )}
    </>
  );
};
