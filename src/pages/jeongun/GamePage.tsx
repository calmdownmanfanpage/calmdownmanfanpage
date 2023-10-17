import Hearthstone from "./components/Hearthstone.tsx";
import GTA5 from "./components/GTA5.tsx";
import LOL from "./components/LOL.tsx";
import HOS from "./components/HOS.tsx";
import Pokemon from "./components/Pokemon.tsx";
import styled from "styled-components";

export default function GamePage() {
  return (
    <>
      <GameBody>
        <Hearthstone />
        <GTA5 />
        <LOL />
        <HOS />
        <Pokemon />
      </GameBody>
    </>
  );
}

const GameBody = styled.body`
  width: 100%;
  background: #010101;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
