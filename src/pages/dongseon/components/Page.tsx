import styled from 'styled-components';
import { useState } from 'react';


export default function Page() {

    const [contentId, setContentId] = useState(0);
// 클릭시 페이지를 넘기고 내용을 업데이트함
const LeftPageClick = () => {
    const leftPageEle:any = document.querySelector("#leftPage");
    const rightPageEle:any = document.querySelector("#rightPage");

    // 클래스 추가로 페이지 넘기는 애니메이션
    leftPageEle.classList.add('fliped', 'top');
    rightPageEle.classList.add('pauseClick');
    setTimeout(()=>{
        // 페이지를 원래 위치로 되돌림
        leftPageEle.classList.remove('fliped', 'top');
        rightPageEle.classList.remove('pauseClick');

        // 좌/우 페이지 내용 업데이트
        setContentId(contentId - 2);
    },1000)
}

// 클릭시 페이지를 넘기고 내용을 업데이트함
const RightPageClick = () => {
    const rightPageEle:any = document.querySelector("#rightPage");
    const leftPageEle:any = document.querySelector("#leftPage");

    // 클래스 추가로 페이지 넘기는 애니메이션
    rightPageEle.classList.add('fliped', 'top');
    leftPageEle.classList.add('pauseClick');
    setTimeout(()=>{
        // 페이지를 원래 위치로 되돌림
        rightPageEle.classList.remove('fliped', 'top');
        leftPageEle.classList.remove('pauseClick');

        // 좌/우 페이지 내용 업데이트
        setContentId(contentId + 2);
    },1000)
}



    return (
      <>
        <StyledDiv>
            <Cover>
                <StyledBorder></StyledBorder>
                <StyledBorder></StyledBorder>
            </Cover>
        <StyledSectionLeft onClick={LeftPageClick} id="leftPage">
            {contentId}
        </StyledSectionLeft>
        <StyledSectionRight onClick={RightPageClick} id="rightPage">
            {contentId+1}
        </StyledSectionRight>
        </StyledDiv>
      </>
    );
}



const StyledDiv = styled.div`
    width: 80vw;
    height: 80vh;
    display: flex;
    background: white;
    /* border: 10px solid black; */
    position: absolute;
    z-index: -2;
`

const Cover = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    z-index: -1;
`

const StyledBorder = styled.div`
    width: 50%;
    height: 100%;
    border: 10px solid black;
    z-index: -1;
`



const StyledSectionLeft = styled.section`
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

    /* position: absolute; */
    top: 0;
    left: 0;
    transform-origin: right center;
    transition-duration: 0s;
    transition-timing-function: ease-out;

    &.fliped{
        transition-duration: 1s;
        transform: rotateY(180deg);
    }
    &.top{
        z-index: 100;
    }
    &.pauseClick{
        pointer-events: none;
    }
`

const StyledSectionRight = styled.section`
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

    /* margin-left: 50vw;
    position: absolute; */
    top: 0;
    left: 0;
    transform-origin: left center;
    transition-duration: 0s;
    transition-timing-function: ease-out;


    &.fliped{
    transition-duration: 1s;
        transform: rotateY(-180deg);
    }
    &.top{
        z-index: 100;
    }
    &.pauseClick{
        pointer-events: none;
    }
`
