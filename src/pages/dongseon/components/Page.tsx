import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from 'axios';
import FrontImg from '../img/front.jpg';

export default function Page(props:any) {
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
  const pageId = props.pageId;
  const parsedLikes =  phraseData.likes.toLocaleString();
  const parsedShared = phraseData.shared.toLocaleString();

  // 페이지 정보 불러오기
  useEffect(()=>{
    (async ()=>{
      const res = await axios.get(`http://localhost:3000/phrase?pageId=${pageId+1}`);
      setPhraseData(res.data);
    })()
  },[]);

  // 데이터가 변경되면 서버DB 업데이트
  useEffect(()=>{
    (async() =>{
      await axios.put('http://localhost:3000/phrase/update',{
        data:phraseData
      });
    })();
  }, [phraseData]);

  const likeBtnClick = () => {
    setPhraseData({...phraseData, likes:phraseData.likes+1});
  };

  const shareBtnClick = () => {
    setPhraseData({...phraseData, shared:phraseData.shared+1});

    let shareId = 0;
    if(pageId % 2 === 0){
      shareId = pageId+2;
    }else{
      shareId = pageId+1;
    }

    // Kakao API
    window.Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "침착맨 명언집",
        description: phraseData.phrase,

        // 배포된 URL만 가능 (배포하고 수정하기)
        imageUrl:
          "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbv2xr0%2FbtqWWs0bA7q%2FJIV43Kh4gbKPxCF08H7i90%2Fimg.png",
          // ㄴ> FrontImg
        link: {
          // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함 (배포하고 수정하기)
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
            mobileWebUrl: "http://localhost:5173/dongseon/:pageId="+(shareId),
            webUrl: "http://localhost:5173/dongseon/:pageId="+(shareId),
          },
        },
      ],
    });
  };

  return (
    <>
      <StyledPage>
        <StyledPhrase>{phraseData.phrase}</StyledPhrase>
        <StyledInfoCover>
          <StyledInfoGrid>
            <StyledBtn onClick={likeBtnClick}>❤️</StyledBtn>
            <StyledBtn onClick={shareBtnClick}>카카오톡 공유</StyledBtn>
            <StyledInfo>{parsedLikes} likes</StyledInfo>
            <StyledInfo>{parsedShared} shared</StyledInfo>
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
  font-size: 12px;
  @media screen and (max-width: 1000px){
  font-size: 10px;
  }
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
  font-size: 12px;
  &:hover {
    background: lightgray;
  }
`;

const StyledInfo = styled.div`
  font-size: 10px;
`;