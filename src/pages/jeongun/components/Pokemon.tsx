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
        <StyledTitle>
          내가 포켓몬 마스터가 될수 있을리 없잖아! 무리무리!!!(무리가
          아니었다?!)
          <br />
          굳병건이의 포켓몬 마스터 도전기
        </StyledTitle>
        <StyledExplain>{ExplainGames.pokemon}</StyledExplain>
        <StyledVideo>
          <YoutubeComponent id="lSt2UnEmGxc" />
          <YoutubeComponent id="aCwk7SgIJ2U" />
          <YoutubeComponent id="WR2Jge59KZA" />
        </StyledVideo>
      </StyledMain>
    </>
  );
}
