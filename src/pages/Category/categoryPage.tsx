import { ContentsButton } from "../../components";
import * as S from "./styled";
import * as I from "../../assets/Image";
import { useNavigate } from "react-router-dom";

export const CategoryPage: React.FC = () => {
  const navigate = useNavigate();
  const onClick = (num: Number) => {
    navigate(`/community/${num}`);
  };
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
            onFunc={() => onClick(0)}
          ></ContentsButton>
          <ContentsButton
            width={35}
            height={15}
            sizes={2}
            weight={0}
            message={<img src={I.CookingIcon} />}
            onFunc={() => onClick(1)}
          ></ContentsButton>
          <ContentsButton
            width={35}
            height={15}
            sizes={2}
            weight={0}
            message={<img src={I.GameIcon} />}
            onFunc={() => onClick(2)}
          ></ContentsButton>
          <ContentsButton
            width={35}
            height={15}
            sizes={2}
            weight={0}
            message={<img src={I.GymIcon} />}
            onFunc={() => onClick(3)}
          ></ContentsButton>
          <ContentsButton
            width={35}
            height={15}
            sizes={2}
            weight={0}
            message={<img src={I.MusicIcon} />}
            onFunc={() => onClick(4)}
          ></ContentsButton>
          <ContentsButton
            width={35}
            height={15}
            sizes={2}
            weight={0}
            message={<img src={I.SportsIcon} />}
            onFunc={() => onClick(5)}
          ></ContentsButton>
        </S.ButtonContent>
      </S.ButtonContentWrapper>
    </>
  );
};
