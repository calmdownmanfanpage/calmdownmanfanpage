import YoutubeComponent from "./YoutubeComponent";
import ExplainGames from "../ExplainGames.json";
import {
  StyledMain,
  StyledTitle,
  StyledExplain,
  StyledVideo,
} from "./StyledBox";

export default function GTA5() {
  return (
    <>
      <StyledMain>
        <StyledTitle>
          안산은 이게 일상이야! <br />
          안산 1타 강사 침착맨의 GTA5:안산드레아스 가이드
        </StyledTitle>
        <StyledExplain>{ExplainGames.gta5}</StyledExplain>
        <StyledVideo>
          <YoutubeComponent id="JD-TLZvNE9Q" />
          <YoutubeComponent id="FMN-tz6QhTY" />
          <YoutubeComponent id="a7DXVJfaDXQ" />
        </StyledVideo>
      </StyledMain>
    </>
  );
}
