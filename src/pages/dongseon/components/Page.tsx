import styled from "styled-components";
// import phraseJson from "../phrase.json";
import { useEffect, useState } from "react";
import axios from 'axios';

export default function Page(props:any) {


  const pageId = props.pageId;
  const [phraseData, setPhraseData] = useState<{
    contentId:number, 
    phrase:string,
    likes:number, 
    shared:number
  }>({
    contentId:0,
    phrase:"",
    likes:0,
    shared:0,
  });

  useEffect(()=>{
    (async () => {
      const res = await axios.get(`http://localhost:3000/dongseon?pageId=${pageId+1}`);
      console.log(res.data);
      setPhraseData(res.data);
    })();
  },[])

  const likeBtnClick = async () => {
    setPhraseData({...phraseData, likes:phraseData.likes+1});
    await axios.post('http://localhost:3000/dongseon/likes',{
      pageId: phraseData.contentId, 
      likes: phraseData.likes,
    });
  };

  const shareBtnClick = () => {
    setPhraseData({...phraseData, shared:phraseData.shared+1});

    // Kakao API
    window.Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "침착맨 명언집",
        description: phraseData.phrase,

        // 배포된 URL만 가능
        imageUrl:
          "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbv2xr0%2FbtqWWs0bA7q%2FJIV43Kh4gbKPxCF08H7i90%2Fimg.png",
        link: {
          // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
          mobileWebUrl: "http://localhost:5173",
          webUrl: "http://localhost:5173",
        },
      },
      social: {
        likeCount: phraseData.likes,
        sharedCount: phraseData.shared,
      },
      buttons: [
        {
          title: "웹으로 보기",
          link: {
            // 명언집 링크
            mobileWebUrl: "http://localhost:5173/dongseon/:pageId="+(pageId+2),
            webUrl: "http://localhost:5173/dongseon/:pageId="+(pageId+2),
          },
        },
      ],
    });
  };

  const likesData =  phraseData.likes.toLocaleString();
  const sharedData = phraseData.shared.toLocaleString();

  return (
    <>
      <StyledPage>
        <StyledPhrase>{phraseData.phrase}</StyledPhrase>
        <StyledInfoCover>
          <StyledInfoGrid>
            <StyledLikeBtn onClick={likeBtnClick}>❤️</StyledLikeBtn>
            <StyledShareBtn onClick={shareBtnClick}>카카오톡 공유</StyledShareBtn>
            <StyledInfo>{likesData} likes</StyledInfo>
            <StyledInfo>{sharedData} shared</StyledInfo>
          </StyledInfoGrid>
        </StyledInfoCover>
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
`;

const StyledInfoCover = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledInfoGrid = styled.div`
  display: grid;
  grid-template-columns: 100px 100px;
  grid-template-rows: 40px 30px;
  grid-gap: 10px;
`;

const StyledBtn = styled.button`
  box-shadow: 0 0 2px gray;
  border-radius: 5px;
  background: white;
  &:hover {
    background: lightgray;
  }
`;

const StyledLikeBtn = styled(StyledBtn)``;
const StyledShareBtn = styled(StyledBtn)`
  font-size: 12px;
`;

const StyledInfo = styled.div`
  font-size: 10px;
`;