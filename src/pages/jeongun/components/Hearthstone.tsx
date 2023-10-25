// import styled from "styled-components";
// import YouTube from "react-youtube";
// import { useState } from "react";
import YoutubeComponent from "./YoutubeComponent";
import ExplainGames from "../ExplainGames.json";
// import React from "react";
import {
  StyledMain,
  StyledTitle,
  StyledExplain,
  StyledVideo,
} from "./StyledBox";

export default function Hearthstone() {
  return (
    <>
      <StyledMain>
        <StyledTitle>침착맨 방송의 근본중의 근본, 하스스톤</StyledTitle>
        <StyledExplain>{ExplainGames.hearthstone}</StyledExplain>
        <StyledVideo>
          <YoutubeComponent id="Gfxe55Fgpps" />
          <YoutubeComponent id="qeAATnTWs4U" />
          <YoutubeComponent id="KGQEnx67lsU" />
        </StyledVideo>
      </StyledMain>
    </>
  );
}
