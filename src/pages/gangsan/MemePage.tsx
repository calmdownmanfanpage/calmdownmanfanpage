import AsyncContainer from "../../components/AsyncContainer";
import useMemes from "../../hooks/useMemes";
import styled from "styled-components";
import { HEADER_HEIGHT, HEADER_MAX_WIDTH } from "../../styles/contants";
import Meme from "./components/Meme";

export default function MemePage() {
  const { memes, isLoading, hasError, errorMessage, setTarget, retry } =
    useMemes();

  return (
    <>
      <StyledContainer>
        <StyledWrapper>
          {memes?.map((meme, i) => (
            <Meme meme={meme} key={meme.title + i} />
          ))}
        </StyledWrapper>
        <AsyncContainer
          isLoading={isLoading}
          hasError={hasError}
          errorMessage={errorMessage}
          retry={retry}
        />
        <div ref={setTarget}></div>
      </StyledContainer>
    </>
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
