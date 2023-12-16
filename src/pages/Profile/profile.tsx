import { onGetUser } from "../../service";

export const ProfilePage: React.FC = () => {
  const nowUser = onGetUser();
  console.log(nowUser.email, nowUser.nickname, nowUser.isValid);
  return (
    <>{nowUser.isValid ? <h1>hello{nowUser.nickname}</h1> : <h1>NoUser</h1>}</>
  );
};
