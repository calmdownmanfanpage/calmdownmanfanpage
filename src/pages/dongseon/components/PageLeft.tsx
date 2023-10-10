import styled from 'styled-components';
import Content from './Content';
import React, {useState} from 'react';


export default function Page() {
    const [content, setContent] = useState();
    const component = <Content/>

    return (
      <>
        <StyledSection onClick={PageClick} id="leftPage">
            {content && <div>{component}</div>}
        </StyledSection>
      </>
    );
}

// 클릭시 페이지를 넘기고 내용을 업데이트함
const PageClick = e => {
    const thisEle = e.target;
    const rightPageEle = document.querySelector("#rightPage");

    // 클래스 추가로 페이지 넘기는 애니메이션
    thisEle.classList.add('fliped', 'top');
    rightPageEle.classList.add('pauseClick');
    setTimeout(()=>{
        // 페이지를 원래 위치로 되돌림
        thisEle.classList.remove('fliped', 'top');
        rightPageEle.classList.remove('pauseClick');

        // 좌/우 페이지 내용 업데이트
        thisEle.innerHTML = "HELLO";
        rightPageEle.innerHTML = "";
        setContent(true);
    },1000)
}


const StyledSection = styled.section`
    width: 50vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    text-align: center;
    background: white;
    border: 10px solid black;

    position: absolute;
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
