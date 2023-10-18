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
  width: 100%;
  background: #aca7cb;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 10px solid #e3e0f3;
`;
const StyledHeaderTitle = styled.h1`
  font-size: 3rem;
  font-weight: 500;
`;
const StyledHeaderSubTitle = styled.p`
  font-size: 1.5rem;
  color: #1f2023;
`;

// #555555
// #1f2023
// #010101
// #845EC2 보라
// #B39CD0 연보라
// #FBEAFF 연연보라
