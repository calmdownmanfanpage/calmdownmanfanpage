import styled from "styled-components";
import { HEADER_HEIGHT } from "../../../styles/contants";

export type MemeType = {
  title: string;
  author: string;
  src: string;
  link: string;
};

export default function Meme(props: { meme: MemeType }) {
  const { meme } = props;
  return (
    <StyledContainer>
      <StyledSquare>
        <StyledSquareWrapper>
          <StyledImage src={meme.src} />
        </StyledSquareWrapper>
      </StyledSquare>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  height: calc(100vh - ${HEADER_HEIGHT}px);
  scroll-snap-align: start;
  scroll-snap-stop: always;
`;

const StyledSquare = styled.div`
  max-width: 642px;
  max-height: calc(100vh - ${HEADER_HEIGHT}px);

  position: relative;
  width: 70%;
  &::after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }

  background-color: #121212;
`;

const StyledSquareWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const StyledImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;
