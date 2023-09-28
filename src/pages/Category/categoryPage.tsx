import { ContentsButton } from "../../components";
import * as S from "./styled";
import * as I from "../../assets/Image";

export const CategoryPage: React.FC = () => {
  return (
    <>
      <S.TitleWrapper>
        <S.InnerTitleBox>
          <S.MainTitle>반가워요 user님!</S.MainTitle>
          <S.SubTitle>
            이제 회원님의 취미를 선택하고, 많은 유저들과 함께 해 봐요!
          </S.SubTitle>
        </S.InnerTitleBox>
      </S.TitleWrapper>
      <S.ButtonContentWrapper>
        <S.ButtonContent>
          <ContentsButton
            width={35}
            height={15}
            sizes={2}
            weight={0}
            message={<img src={I.ArtIcon} />}
          ></ContentsButton>
          <ContentsButton
            width={35}
            height={15}
            sizes={2}
            weight={0}
            message={<img src={I.CookingIcon} />}
          ></ContentsButton>
          <ContentsButton
            width={35}
            height={15}
            sizes={2}
            weight={0}
            message={<img src={I.GameIcon} />}
          ></ContentsButton>
          <ContentsButton
            width={35}
            height={15}
            sizes={2}
            weight={0}
            message={<img src={I.GymIcon} />}
          ></ContentsButton>
          <ContentsButton
            width={35}
            height={15}
            sizes={2}
            weight={0}
            message={<img src={I.MusicIcon} />}
          ></ContentsButton>
          <ContentsButton
            width={35}
            height={15}
            sizes={2}
            weight={0}
            message={<img src={I.SportsIcon} />}
          ></ContentsButton>
        </S.ButtonContent>
      </S.ButtonContentWrapper>
    </>
  );
};
