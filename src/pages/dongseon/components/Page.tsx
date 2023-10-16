import styled from "styled-components";
import data from "../phrase.json";
import { useState } from "react";

export default function Page({children}:any) {
  const [likesState, setLikesState] = useState(data.likes[children]);
  const [sharedState, setSharedState] = useState(data.shared[children]);

  const likeBtnClick = ()=>{
    setLikesState(likesState + 1);
  }
  const shareBtnClick = ()=>{
    setSharedState(sharedState + 1);
  }

  const likesData = likesState.toLocaleString();
  const sharedData = sharedState.toLocaleString();

  return (
    <>
      <StyledPage>
        <StyledPhrase>{data.phrase[children]}</StyledPhrase>
        <StyledInfoCover1>
          <StyledInfoCover2>
            <StyledLikeBtn onClick={likeBtnClick}>🩷</StyledLikeBtn>
            <StyledShareBtn onClick={shareBtnClick}>공유</StyledShareBtn>
            <StyledLikeInfo>{likesData} likes</StyledLikeInfo>
            <StyledSharedInfo>{sharedData} shared</StyledSharedInfo>
          </StyledInfoCover2>
        </StyledInfoCover1>
      </StyledPage>
    </>
  );
}

const StyledPage = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const StyledPhrase = styled.div`
  width: 100%;
  height: 100%;
  padding: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: pre-wrap;
  line-height: 2;
  position: absolute;
`

const StyledInfoCover1 = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`
const StyledInfoCover2 = styled.div`
  display: grid;
  grid-template-columns: 100px 100px;
  grid-template-rows: 40px 30px;
  grid-gap: 10px;

`

const StyledBtn = styled.button`
  border: 1px solid black;
  border-radius: 5px;
  background: white;
`

const StyledLikeBtn = styled(StyledBtn)`
`
const StyledShareBtn = styled(StyledBtn)`
`

const StyledInfo = styled.div`
  font-size: 10px;
`
const StyledLikeInfo = styled(StyledInfo)`
`
const StyledSharedInfo = styled(StyledInfo)`
`