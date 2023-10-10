import styled from 'styled-components';
import Content from './Content';

export default function Page() {
    return (
      <>
        <StyledSection onClick={(e)=>{
            PageClick(e);
        }}>
            <Content/>
        </StyledSection>
      </>
    );
}

function PageClick(e){
    const thisEle = e.target;
    thisEle.innerHTML = "";

    if(!thisEle.classList.contains('fliped')){
        thisEle.classList.add('fliped');
    }else{
        thisEle.classList.remove('fliped');
    }
}


const StyledSection = styled.section`
    width: 50vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    box-shadow: 0 10px 5px lightgray;
    text-align: center;

    position: absolute;
    top: 0;
    left: 0;
    margin-left: 50%;

    transform-origin: left center;
    transition-duration: 1s;
    transition-timing-function: ease-in;
    background: white;

    &.fliped{
        transform: rotateY(-180deg);
    }
`
