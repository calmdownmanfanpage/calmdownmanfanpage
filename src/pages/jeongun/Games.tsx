import "./gamesStyle.css";
import Hearthstone from "./Hearthstone.tsx";
import GTA5 from "./GTA5.tsx";
import LOL from "./LOL.tsx";
import HOS from "./HOS.tsx";
import Pokemon from "./Pokemon.tsx";
import styled from "styled-components";

export default function Games() {
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
  background: black;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
