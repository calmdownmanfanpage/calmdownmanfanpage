import styled from "styled-components";
import Meme, { MemeType } from "./Meme";
import { HEADER_HEIGHT, HEADER_MAX_WIDTH } from "../../../styles/contants";

export default function MemeContainer(props: { memes: Array<MemeType> }) {
  const { memes } = props;
  return (
    <StyledContainer>
      <StyledWrapper>
        {memes.map((meme) => (
          <Meme meme={meme} />
        ))}
      </StyledWrapper>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100vw;
  height: calc(100vh - ${HEADER_HEIGHT}px);

  overflow: auto;
  scroll-snap-type: y mandatory;

  /**  hide scroll bar */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and 엣지 */
  scrollbar-width: none; /* 파이어폭스 */
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: ${HEADER_MAX_WIDTH}px;
  width: 100%;
`;
