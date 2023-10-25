import YoutubeComponent from "./YoutubeComponent";
import ExplainGames from "../ExplainGames.json";
import {
  StyledMain,
  StyledTitle,
  StyledExplain,
  StyledVideo,
} from "./StyledBox";

export default function HOS() {
  return (
    <>
      <StyledMain>
        <StyledTitle>
          ??: 이 게임 트레쉬 게임이다옹~
          <br />
          길고양이도 추천하는 게임, 히오스
        </StyledTitle>
        <StyledExplain>{ExplainGames.hos}</StyledExplain>
        <StyledVideo>
          <YoutubeComponent id="ucfIh1ANiHk" />
          <YoutubeComponent id="-ICtmDyLX_k" />
          <YoutubeComponent id="I-oesBZ1B5Y" />
        </StyledVideo>
      </StyledMain>
    </>
  );
}
