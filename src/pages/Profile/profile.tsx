import { onGetUser } from "../../api";
import * as S from "./styled";

export const ProfilePage: React.FC = () => {
  const nowUser = onGetUser();
  console.log(nowUser.email, nowUser.nickname, nowUser.isValid);
  return (
    <>
      {nowUser.isValid ? (
        <S.NameTitleBox>
          <S.NameTitle>{nowUser.nickname}</S.NameTitle>
        </S.NameTitleBox>
      ) : (
        <h1>NoUser</h1>
      )}
    </>
  );
};
