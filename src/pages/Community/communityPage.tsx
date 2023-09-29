import { useParams } from "react-router-dom";

export const GenreArray: readonly string[] = [
  "MAIN",
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
      <h1>hello</h1>
      <span>{GenreArray[Number(comm)]}</span>
    </>
  );
};
