import styled from 'styled-components';
import coverImg from '../img/back.jpg'

export default function FrontCover(){
    return<>
        <StyledFrontCover>
            <StyledCoverTitle>END</StyledCoverTitle>
            <StyledCoverImg src={coverImg}></StyledCoverImg>
        </StyledFrontCover>
    </>
}

const StyledFrontCover = styled.div`
    width: 100%;
    height: 100%;
    background: black;
    overflow: hidden;
    box-shadow: -10px 0px 30px gray inset;
    position: absolute;
`

const StyledCoverTitle = styled.div`
    width: 100%;
    height: 60%;
    display: flex;
    align-items: center;
    justify-content: center;

    color: white;
    font-size: 2em;

    letter-spacing: 10px;
    line-height: 50px;
`

const StyledCoverImg = styled.img`
    width: 100%;
    height: 40%;
    object-fit: cover;
    pointer-events: none;
`
