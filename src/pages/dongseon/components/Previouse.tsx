import styled from 'styled-components';
export default function Previous(){
    return <>
        <StyledDiv></StyledDiv>
    </>
}

const StyledDiv = styled.div`
    width: 100vw;
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
    background: gray;
`