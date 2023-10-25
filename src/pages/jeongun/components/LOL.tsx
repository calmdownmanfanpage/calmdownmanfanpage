import YoutubeComponent from "./YoutubeComponent";
import ExplainGames from "../ExplainGames.json";
import {
  StyledMain,
  StyledTitle,
  StyledExplain,
  StyledVideo,
} from "./StyledBox";

export default function LOL() {
  return (
    <>
      <StyledMain>
        <StyledTitle>브론즈의 왕, 이병건의 실버 북벌기</StyledTitle>
        <StyledExplain>{ExplainGames.lol}</StyledExplain>
        <StyledVideo>
          <YoutubeComponent id="VuRcfL4Sz08" />
          <YoutubeComponent id="-_gEyfPYhGQ" />
          <YoutubeComponent id="x0UzwSjWeeg" />
        </StyledVideo>
      </StyledMain>
    </>
  );
}
