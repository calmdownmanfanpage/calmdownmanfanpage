import styled from "styled-components";
import Meme, { MemeType } from "./Meme";
import { HEADER_HEIGHT } from "../../../styles/contants";

export default function MemeContainer(props: { memes: Array<MemeType> }) {
  const { memes } = props;

  return (
    <>
      <StyledContainer>
        {memes.map((meme) => (
          <Meme meme={meme} />
        ))}
      </StyledContainer>
    </>
  );
}

const StyledContainer = styled.div`
  width: 100%;
  height: calc(100vh - ${HEADER_HEIGHT}px);
  scroll-snap-type: y mandatory;
  overflow: auto;
`;
