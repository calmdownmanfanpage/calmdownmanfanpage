import styled from 'styled-components';
import Content from './Content';

export default function Page() {
    return (
      <>
        <StyledSection onClick={(e)=>{
            PageClick(e);
        }} id="rightPage">
            <Content/>
            right
        </StyledSection>
      </>
    );
}

// 클릭시 페이지를 넘기고 내용을 업데이트함
function PageClick(e){
    const thisEle = e.target;
    const leftPageEle = document.querySelector("#leftPage");

    // 클래스 추가로 페이지 넘기는 애니메이션
    thisEle.classList.add('fliped', 'top');
    leftPageEle.classList.add('pauseClick');
    setTimeout(()=>{
        // 페이지를 원래 위치로 되돌림
        thisEle.classList.remove('fliped', 'top');
        leftPageEle.classList.remove('pauseClick');

        // 좌/우 페이지 내용 업데이트
        thisEle.innerHTML = "";
        leftPageEle.innerHTML = "";
    },1000)
}



const StyledSection = styled.section`
    width: 50vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    /* box-shadow: 0 10px 5px lightgray; */
    text-align: center;
    background: white;
    border: 10px solid black;

    margin-left: 50vw;
    position: absolute;
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
