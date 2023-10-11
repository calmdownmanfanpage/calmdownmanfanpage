import styled, {css} from 'styled-components';
import { useState } from 'react';


export default function Page() {

    const [contentId, setContentId] = useState(0);

    // 총 컨텐츠 개수 (짝수로 맞추기)
    const contentLimit:number = 10;

    const [isLeftFliped, setLeftFlip]  = useState(false);
    const [isRightFliped, setRightFlip]  = useState(false);
    const [LeftPause, setLeftPause] = useState(false);
    const [RightPause, setRightPause] = useState(false);


// 클릭시 페이지를 넘기고 내용을 업데이트함
const LeftPageClick = () => {

    if(contentId === 0) return;

    setLeftFlip(true);
    setRightPause(true);
    setTimeout(()=>{
        setLeftFlip(false);
        setRightPause(false);
        setContentId(contentId - 2);
    },1000)
}

// 클릭시 페이지를 넘기고 내용을 업데이트함
const RightPageClick = () => {

    if(contentId === contentLimit) return;

    setRightFlip(true);
    setLeftPause(true);
    setTimeout(()=>{
        setRightFlip(false);
        setLeftPause(false);
        setContentId(contentId + 2);
    },1000)
}



    return (
      <>
        <StyledDiv>
            <Cover>
                {contentId <= 2
                    ? <></> 
                    : <StyledBackLeft></StyledBackLeft>
                }
                {contentId >= contentLimit-2
                    ? <></>
                    : <StyledBackRight></StyledBackRight>
                }
            </Cover>
            {contentId ===  0 
                ? <></> // 첫장 왼쪽페이지 안보이게
                : <StyledSectionLeft onClick={LeftPageClick} isLeftFliped={isLeftFliped} LeftPause={LeftPause} id="leftPage">
                    {!isLeftFliped && !isRightFliped
                        ? contentId === contentLimit 
                            ? <div>침착맨 명언집 뒷표지</div> // 뒷표지
                            : <div>{contentId}</div> // 내용
                        
                        : <></>
                    }
                </StyledSectionLeft>
            }
            {contentId === contentLimit 
                ? <></>
                : <StyledSectionRight onClick={RightPageClick} isRightFliped={isRightFliped} RightPause={RightPause} id="rightPage">
                    {!isLeftFliped && !isRightFliped
                        ? contentId === 0
                            ? <div>침착맨 명언집 앞표지</div> // 앞표지
                            : <div>{contentId + 1}</div> // 내용
                        : <></>
                    }
                </StyledSectionRight>
            }
        
        </StyledDiv>
      </>
    );
}



const StyledDiv = styled.div`
    width: 80vw;
    height: 80vh;
    display: flex;
    z-index: -2;
    perspective: 2500px;
`

const Cover = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    z-index: -1;
    &.hidden{
        display: none;
    }
`

const StyledBackLeft = styled.div<{}>`
    width: 50%;
    height: 100%;
    background: white;
    border: 10px solid black;
    z-index: -1;
    position: absolute;
`

const StyledBackRight = styled.div<{}>`
    width: 50%;
    height: 100%;
    background: white;
    border: 10px solid black;
    z-index: -1;
    position: absolute;
    margin-left: 50%;
`


const StyledSectionLeft = styled.section<{ isLeftFliped:boolean, LeftPause:boolean }>`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    background: white;
    border: 10px solid black;
    /* border-right: 5px solid black; */

    position: absolute;
    top: 0;
    left: 0;
    transform-origin: right center;
    transition-duration: 0s;
    transition-timing-function: ease-out;


    ${({isLeftFliped})=>{
        return isLeftFliped && css`
            transition-duration: 1s;
            transform: rotateY(180deg);
            z-index: 100;
        `
    }}

    ${({LeftPause})=>{
        return LeftPause && css`
            pointer-events: none;
        `
    }}
`

const StyledSectionRight = styled.section<{ isRightFliped:boolean, RightPause:boolean }>`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    background: white;
    border: 10px solid black;
    /* border-left: 5px solid black; */

    margin-left: 50%;
    position: absolute; 
    top: 0;
    left: 0;
    transform-origin: left center;
    transition-duration: 0s;
    transition-timing-function: ease-out;

    ${({isRightFliped})=>{
        return isRightFliped && css`
            transition-duration: 1s;
            transform: rotateY(-180deg);
            z-index: 100;
        `
    }}

    ${({isRightPause})=>{
        return isRightPause && css`
            pointer-events: none;
        `
    }}
`
