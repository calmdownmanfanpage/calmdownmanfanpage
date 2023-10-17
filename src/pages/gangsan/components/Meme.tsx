import styled, { css } from "styled-components";
import { HEADER_HEIGHT } from "../../../styles/contants";
import { useState } from "react";

export type MemeType = {
  title: string;
  author: string;
  src: string;
  link: string;
};

export default function Meme(props: { meme: MemeType }) {
  const { meme } = props;

  const [isHover, setIsHover] = useState(false);

  const toggleMouseHover = () => setIsHover(!isHover);

  return (
    <StyledContainer>
      <StyledSquare
        onMouseEnter={toggleMouseHover}
        onMouseLeave={toggleMouseHover}
      >
        <StyledDescription isHover={isHover}>{meme.title}</StyledDescription>
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

  position: relative;

  width: 100%;
  height: calc(100vh - ${HEADER_HEIGHT}px);

  scroll-snap-align: start;
  scroll-snap-stop: always;
`;

const StyledDescription = styled.div<{ isHover: boolean }>`
  position: absolute;
  z-index: 2;
  color: transparent;
  transition: 0.2s all;

  ${({ isHover }) => {
    return (
      isHover &&
      css`
        color: #f0f0f0;
        background: linear-gradient(#121212, 60%, transparent);
        width: 100%;
        padding: 15px;
      `
    );
  }}
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
