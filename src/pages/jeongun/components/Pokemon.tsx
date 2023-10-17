import YoutubeComponent from "./YoutubeComponent";
import ExplainGames from "../ExplainGames.json";
import {
  StyledMain,
  StyledTitle,
  StyledExplain,
  StyledVideo,
} from "./StyledBox";

export default function Pokemon() {
  return (
    <>
      <StyledMain>
        <StyledTitle>딸천재 침착맨의 포켓몬 정복기</StyledTitle>
        <StyledExplain>{ExplainGames.pokemon}</StyledExplain>
        <StyledVideo>
          <YoutubeComponent id="lSt2UnEmGxc" />
          <YoutubeComponent id="aCwk7SgIJ2U" />
          <YoutubeComponent id="DoefZF5J0vY" />
        </StyledVideo>
      </StyledMain>
    </>
  );
}
