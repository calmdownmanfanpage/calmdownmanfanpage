import styled, { css } from "styled-components";
import { HEADER_HEIGHT } from "../../styles/contants";
import { useState, useEffect } from "react";
import Page from "./components/Page";
import FrontCover from "./components/FrontCover";
import BackCover from "./components/BackCover";
import phraseJson from "./phrase.json";

export default function PhrasePage() {
  // 총 컨텐츠 개수 (짝수로 맞추기)
  const phraseLen = phraseJson.data.length;
  const parseContentLimit = () => {
    if (phraseLen % 2 === 0) {
      // 앞표지 2장 추가
      return phraseLen + 2;
    }
    // 앞표지 2장 + 짝수 맞추기 1장 추가
    return phraseLen + 3;
  };
  const contentLimit: number = parseContentLimit();
  const [contentId, setContentId] = useState(0);

  // 페이지 넘기는 애니메이션용
  const [isLeftFliped, setLeftFlip] = useState(false);
  const [isRightFliped, setRightFlip] = useState(false);
  const [eventPause, setEventPause] = useState(false);

  // 클릭시 페이지를 넘기고 내용을 업데이트함
  const leftPageClick = () => {
    if (contentId === 0) return;

    setLeftFlip(true);
    setEventPause(true);
    setTimeout(() => {
      setLeftFlip(false);
      setEventPause(false);
      setContentId(contentId - 2);
    }, 1000);
  };

  // 클릭시 페이지를 넘기고 내용을 업데이트함
  const rightPageClick = () => {
    if (contentId === contentLimit) return;

    setRightFlip(true);
    setEventPause(true);
    setTimeout(() => {
      setRightFlip(false);
      setEventPause(false);
      setContentId(contentId + 2);
    }, 1000);
  };

  
  return (
    <>
      <StyledMain>
        <StyledDiv>
          {/* 페이지 넘어가면서 뒷장도 보이도록 하는 장식 */}
          <StyledBackgroundCover>
            {contentId <= 2 ? <></> : <StyledBackLeft></StyledBackLeft>}
            {contentId >= contentLimit - 2 ? (
              <></>
            ) : (
              <StyledBackRight></StyledBackRight>
            )}
          </StyledBackgroundCover>

          {/* 페이지 애니메이션 기능 */}

          {/* 왼쪽 페이지 */}
          {contentId === 0 ? (
            <></> // 첫장 왼쪽페이지 안보이게
          ) : (
            <StyledSectionLeft
              $isLeftFliped={isLeftFliped}
              $eventPause={eventPause}
              id="leftPage"
            >
              <StyledFlipBtnLeft onClick={leftPageClick}></StyledFlipBtnLeft>
              {!isLeftFliped && !isRightFliped ? (
                contentId === contentLimit ? (
                  <BackCover></BackCover> // 뒷표지
                ) : (
                  <Page>{contentId - 2}</Page>
                ) // 내용
              ) : (
                <></>
              )}
            </StyledSectionLeft>
          )}

          {/* 오른쪽 페이지 */}
          {contentId === contentLimit ? (
            <></> // 마지막장 오른쪽페이지 안보이게
          ) : (
            <StyledSectionRight
              $isRightFliped={isRightFliped}
              $eventPause={eventPause}
              id="rightPage"
            >
              <StyledFlipBtnRight onClick={rightPageClick}></StyledFlipBtnRight>
              {!isLeftFliped && !isRightFliped ? (
                contentId === 0 ? (
                  <FrontCover></FrontCover> // 앞표지
                ) : (
                  <Page>{contentId - 1}</Page>
                ) // 내용
              ) : (
                <></>
              )}
            </StyledSectionRight>
          )}
        </StyledDiv>
      </StyledMain>
    </>
  );
}

// pageSection
const StyledMain = styled.main`
  width: 100vw;
  height: calc(100vh - ${HEADER_HEIGHT}px);
  background: #e1e1e1;

  overflow: hidden;
  position: relative;
  perspective: 1000px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledDiv = styled.div`
  width: 80vw;
  height: 80vh;
  display: flex;
  z-index: -2;
  perspective: 2500px;
`;

const StyledBackgroundCover = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  z-index: -1;
`;

const StyledBack = styled.div`
  width: 50%;
  height: 100%;
  background: white;
  border: 1px solid black;
  z-index: -1;
  position: absolute;
`;

const StyledBackLeft = styled(StyledBack)`
  border-radius: 10px 0 0 10px;
  box-shadow: -10px 0px 30px gray inset;
`;

const StyledBackRight = styled(StyledBack)`
  margin-left: 50%;
  border-radius: 0 10px 10px 0;
  box-shadow: 10px 0px 30px gray inset;
`;

const StyledSection = styled.section`
  width: 50%;
  height: 100%;
  display: flex;
  text-align: center;
  background: white;
  border: 1px solid black;
  overflow: hidden;
  position: absolute;
  transform-origin: right center;
  transition-timing-function: ease-out;
`;

const StyledSectionLeft = styled(StyledSection)<{
  $isLeftFliped: boolean;
  $eventPause: boolean;
}>`
  border-radius: 10px 0 0 10px;
  box-shadow: -10px 0px 30px gray inset;
  transform-origin: right center;

  ${({ $isLeftFliped }) => {
    return (
      $isLeftFliped &&
      css`
        transition-duration: 1s;
        transform: rotateY(180deg);
        z-index: 100;
      `
    );
  }}

  ${({ $eventPause }) => {
    return (
      $eventPause &&
      css`
        pointer-events: none;
      `
    );
  }}
`;

const StyledSectionRight = styled(StyledSection)<{
  $isRightFliped: boolean;
  $eventPause: boolean;
}>`
  float: right;
  margin-left: 50%;
  border-radius: 0 10px 10px 0;
  box-shadow: 10px 0px 30px gray inset;
  transform-origin: left center;

  ${({ $isRightFliped }) => {
    return (
      $isRightFliped &&
      css`
        transition-duration: 1s;
        transform: rotateY(-180deg);
        z-index: 100;
      `
    );
  }}

  ${({ $eventPause }) => {
    return (
      $eventPause &&
      css`
        pointer-events: none;
      `
    );
  }}
`;

// 페이지 넘기는 버튼
const StyledFlipBtn = styled.div`
  height: 100%;
  width: 10%;
  z-index: 1;
  &:hover {
    background: rgba(0, 157, 255, 0.1);
  }
  &::after {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(0, 157, 255, 1);
  }
`;
const StyledFlipBtnLeft = styled(StyledFlipBtn)`
  &:hover::after {
    content: "⬅️";
  }
`;
const StyledFlipBtnRight = styled(StyledFlipBtn)`
  margin-left: 90%;

  &:hover::after {
    content: "➡️";
  }
`;
