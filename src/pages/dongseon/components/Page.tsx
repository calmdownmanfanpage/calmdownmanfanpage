import styled from 'styled-components';
import Content from './Content';

export default function Page({children}) {
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
    if(!thisEle.classList.contains('fliped')){
        thisEle.classList.add('fliped');
        console.log(thisEle.firstChild);
        thisEle.firstChild.classList.add('hidden');
    }else{
        thisEle.classList.remove('fliped');
        thisEle.firstChild.classList.remove('hidden');
    }
}


function renderContext(){

}

const StyledSection = styled.section`
    width: 50%;
    height: 100%;
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
