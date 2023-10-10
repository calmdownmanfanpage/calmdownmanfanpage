import styled from "styled-components";
import { HEADER_HEIGHT } from "../../../styles/contants";

export type MemeType = {
  title: string;
  src: string;
  link: string;
};

export default function Meme(props: { meme: MemeType }) {
  const { meme } = props;
  return (
    <StyledContainer>
      <StyledTitle>{meme.title}</StyledTitle>
      <StyledImage src={meme.src} />
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  position: relative;
  height: calc(100vh - ${HEADER_HEIGHT}px);
  scroll-snap-align: start;
  scroll-snap-stop: always;
`;

const StyledTitle = styled.h3`
  position: absolute;
  width: 100%;
`;

const StyledImage = styled.img``;
