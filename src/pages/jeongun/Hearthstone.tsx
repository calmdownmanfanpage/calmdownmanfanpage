import styled from "styled-components";
import YouTube from "react-youtube";
// import { useState } from "react";
// import React from "react";

export default function Hearthstone() {
  return (
    <>
      <HsDiv>
        <Title>침착맨 방송의 근본중의 근본, 하스스톤</Title>
        <Explain>
          <br />
          하스스톤은 2015년에 런칭되었던 카드게임으로, 당시 상당히 좋은
          게임성으로 많은 사람들에게 인기를 얻었다. 침착맨은 방송 초창기에
          하스스톤을 주로 했었는데, 애초에 방송을 시작한 계기가 하스스톤을 좀 더
          재밌고 안질리게 하기 위해서였다고… 침착맨이란 이름의 유례도 하스스톤을
          침착하게 하는 남자라는 의미에서 지었다고 한다. 이정도면 충분히 침착맨
          방송의 근본이라고 할 수 있지않을까…? 물론 지금은 게임이 여러모로
          이상해진 상태라 침착맨은 물론 동료 방송인들도 거의 하지 않는 게임이
          되었다... 아래 영상에서 침아조씨의 풋풋한 모습도 볼 수 있다.
        </Explain>
        <Video>
          <YouTube
            videoId="Gfxe55Fgpps" //동영상 주소
            opts={{
              width: "100%",
              height: "270px",
              playerVars: {
                autoplay: 0, //자동 재생 여부
                modestbranding: 1, //컨트롤 바에 유튜브 로고 표시 여부
                loop: 0, //반복 재생
                playlist: "Gfxe55Fgpps", //반복 재생으로 재생할 플레이 리스트
              },
            }}
            onReady={(e) => {
              e.target.mute(); //소리 끔
            }}
          />
          <YouTube
            videoId="qeAATnTWs4U" //동영상 주소
            opts={{
              width: "100%",
              height: "270px",
              playerVars: {
                autoplay: 0, //자동 재생 여부
                modestbranding: 1, //컨트롤 바에 유튜브 로고 표시 여부
                loop: 0, //반복 재생
                playlist: "qeAATnTWs4U", //반복 재생으로 재생할 플레이 리스트
              },
            }}
            onReady={(e) => {
              e.target.mute(); //소리 끔
            }}
          />
          <YouTube
            videoId="KGQEnx67lsU" //동영상 주소
            opts={{
              width: "100%",
              height: "270px",
              playerVars: {
                autoplay: 0, //자동 재생 여부
                modestbranding: 1, //컨트롤 바에 유튜브 로고 표시 여부
                loop: 0, //반복 재생
                playlist: "KGQEnx67lsU", //반복 재생으로 재생할 플레이 리스트
              },
            }}
            onReady={(e) => {
              e.target.mute(); //소리 끔
            }}
          />
        </Video>
      </HsDiv>
    </>
  );
}

const HsDiv = styled.div`
  width: 98%;
  height: auto;
  display: flex;
  flex-direction: column;
  background: red;
  align-items: center;
  border-radius: 10px;
  color: white;
  margin-bottom: 20px;
`;
const Explain = styled.div`
  width: 100%;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 600;
`;

const Video = styled.div`
  display: flex;
`;
