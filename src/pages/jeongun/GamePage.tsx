import Hearthstone from "./components/Hearthstone.tsx";
import GTA5 from "./components/GTA5.tsx";
import LOL from "./components/LOL.tsx";
import HOS from "./components/HOS.tsx";
import Pokemon from "./components/Pokemon.tsx";
import styled from "styled-components";

export default function GamePage() {
  return (
    <>
      <StyledHeader>
        <StyledHeaderTitle>
          침착맨, 누구보다 게임에 진심인 남자
        </StyledHeaderTitle>
        <StyledHeaderSubTitle>
          놓치면 인생 절반 손해보는 침착맨의 게임영상
        </StyledHeaderSubTitle>
      </StyledHeader>
      <StyledBody>
        <Hearthstone />
        <GTA5 />
        <LOL />
        <HOS />
        <Pokemon />
      </StyledBody>
    </>
  );
}

const StyledBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledHeader = styled.header`
  width: 95%;
  background: #d0d1d9;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 10px solid #bbbcc6;
  border-radius: 3px;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;
const StyledHeaderTitle = styled.h1`
  font-family: "Black Han Sans", sans-serif;
  font-size: 3rem;
  font-weight: 500;
`;
const StyledHeaderSubTitle = styled.p`
  font-family: "Do Hyeon", sans-serif;
  font-size: 1.5rem;
  color: #565f6e;
`;

// #555555
// #1f2023
// #010101
// #845EC2 보라
// #B39CD0 연보라
// #FBEAFF 연연보라
