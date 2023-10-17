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
          안산에서는 이게 일상이야! <br />
          안산의 왕 침착맨의 안산 실황기 GTA5
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
