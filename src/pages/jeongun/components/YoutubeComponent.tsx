// import { useState } from "react";
// import YouTube from "react-youtube";

export default function YoutubeComponent(props: { id: string }) {
  const { id } = props;

  return (
    <>
      <iframe
        id="ytplayer"
        width="400rem"
        height="250rem"
        src={`https://www.youtube.com/embed/${id}`}
      />
    </>
  );
}
// <YouTube
//   videoId={id} //동영상 주소
//   opts={{
//     width: "100%",
//     height: "270px",
//     playerVars: {
//       autoplay: 0, //자동 재생 여부
//       modestbranding: 1, //컨트롤 바에 유튜브 로고 표시 여부
//       loop: 0, //반복 재생
//       playlist: { id }, //반복 재생으로 재생할 플레이 리스트
//     },
//   }}
//   onReady={(e) => {
//     e.target.mute(); //소리 끔
//   }}
// ></YouTube>
