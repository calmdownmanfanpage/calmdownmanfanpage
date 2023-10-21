import styled, { css } from "styled-components";
import { HEADER_HEIGHT } from "../../styles/contants";
import { useState } from "react";
import Page from "./components/Page";
import FrontCover from "./components/FrontCover";
import BackCover from "./components/BackCover";

export default function Making() {
  // 명언들 (임시)
  const Phrase: string[] = [
    `좌우명?\n좌우명 없어요.\n나도 몰라요 어떻게 살지, 뭔 말을 해요?`,
    `많이 울어...\n어른이 되면... 속으로 울어야 돼`,
    `여봐요.\n 누구길래 그리 바쁘게 가십니까?\n·\n너의 20대.`,
    `결혼 해야겠다 싶어서, 그냥, 했어요.\n아, 물론 사랑합니다.`,
    `스포츠 별로 안좋아하는데 야구는 왜 좋아하냐구요?\n·\n턴제잖아요.`,
    `배는 항구에 있을 때 가장 안전하지만\n그것이 배의 존재 이유는 아니잖아요?`,
    `목표를 향해 너무 힘만 줄 필요는 없는 것 같아요.\n목표에 도달하면 또 다른 단계,\n새로운 목표가 생기기 마련이거든요.\n힘을 다 쏟고 나면 아무것도 할 수가 없어요.\n모든 일에는 강약 조절이 중요합니다.`,
    `어느 한 가지에 앞뒤 안가리고 올인하지 말고,\n대충하고 견적 봐서 미치세요.`,
    `인터넷 방송에서 뜬 사람들의 공통점이 뭐냐면\n모두 사람을 끌어오는 매력이 있다는 거예요.\n근데 그 매력이라는게 살아온 삶에서 꾸준히 쌓여 발휘되는 것이고.\n 살면서 매력 발산을 하지 않았던 사람들이\n갑자기 방송해서 자기 매력을 억지로 뽐내려고 해도 나오지가 않아요.`,
    `그래서 제가 항상 하고 싶은 말이 있어요.\n "단언하지 말라!"\n '나는 이건 절대 안해!'\n이걸 할 필요가 없어요.\n왜냐면 그걸 하면 이제 사람들이\n옛날에 단언했던 발언들을 가지고\n'왜 옛날엔 이렇게 말해놓고 지금은 왜 이렇게 해?'\n이렇게 말해요.\n 나는 그냥 생각이 바뀌었을 뿐인데.\n굳이 단언해서 말 할 필요가 없어요.`,
    `케인인님이 비록 3수생이지만 결과적으로는\n남들이 봤을 땐 실패라고 생각했던 그런 부분들이다 경험이 되어서 이런 매력적인 캐릭터가 만들어진게 아닐까요?\n 그냥, 세상에 뻘짓거리는 없는 것 같아요.\n어떻게든 그 사람에게 영향을 주고 받고 하면서 그런 것들이 어떻게 건설적으로 되느냐인데\n 그것을 조합하는 건 그 사람의 역량인 것 같습니다.\n 퍼져있는 구슬들을 잘 꿰어서 이렇게 잘 되셨네요.\n -케인인과의 전화 인터뷰 中 -`,
    `뭐? 뭐라구요? 진짜예요?\n이 게임에 프로게이머가 있다구요?\n푸하하하하하핫! 하하하핳하ㅎ핫!!\n왜? 경마 프로게이머는 왜 없지??!\n -하스스톤 플레이 中-`,
    `어제 히오스 다르고, 오늘 히오스 다르다.\n '오하아몽（吳下阿蒙）'이란 말과 같이 어린시절의 여몽이 아니라는 말이에요.\n어제 히오스 다르고 오늘 히오스 다릅니다.`,
    `좋은 소식이 있으면 또 나쁜 소식이 또 오겠죠.\n왜냐하면 인생사 새옹지마니까요.\n그러면 좋은 소식이 오는 걸 좋아해야 될까요.\n나쁜 소식이 오는 걸 좋아해야 될까요.\n나쁜 소식이 오면 곧 좋은 소식이 들릴테고,\n좋은 소식이 온다고해서 쉽사리 또 좋아할 수가없죠?\n나쁜 소식이 또 오니깐요.\n 인생사 새옹지마（人生事 塞翁之馬）`,
    `담배를 끊을때 이것만 지키시면 금연하기진짜 수월해요.\n지켜야 될 첫 번째.\n‘담배를 절대 피우면 안돼요’\n담배를 절대 안피우면은 이 규칙만 지키면은\n금연하기 굉장히 수월해요.\n 금연에 실패했을 때 공통된 행적들이\n'혹시 담배를 피워서 실패한게 아닐까?'\n이렇게 거슬러 올라가다보니깐\n'혹시 담배를 안 피우면 금연에 성공하는게 아닐까'\n이런 생각이 드는거죠.`,
    `우리 눈치 보지 말라고요?\n개..개지랄 하잖아요..네?\n님들하고 다르게하면 개지랄 하잖아요..\n입에 거품물고 개지랄을 하는데 눈치를 제가보..보겠..봐야겠어요 안봐야겠어요?\n볼 수 밖에 없잖아요 그쵸?\n그 5/5도발 왜하냐고 개..아주 그냥 눈 뒤집어 까가지고\n5/5도발 왜..왜하냐고? 2/1도발에다가 하면은 어?저..누구야?\n그..뭐뭐 그 7/7 그 그 누구야 그..기계 대포 그 교환..어? 하기 까다로울텐데\n왜 그걸 55도발해가지고 어? 그냥 교환시켜주냐고 막 입에 게거품 물고 그냥\n 도네이션 : 우리가... 미안해...\n ...미안해? 스읍... 알겠습니다.`,
    `못해도 돼! 제가... 만화 그릴 때 초창기에 좀 이런느낌이었어요.\n자꾸 사람들이 잘한다 잘한다 하니까 잘하는 것만 보여주려고,\n잘하는 것만 하니까..재미가 없어. 그리는 게.\n그러면서 결국 어떻게 되냐면,\n 잘하는 것만 하면 못하게 돼.\n 아이러니하게.... 그래서 저 퇴물 됐잖아요.`,
    `이말년 작가님이요?\n저예요 저. 3류 만화가 이말년이 저예요...\n -침착맨 중대 발표 中-`,
    `히오스도 세글자\n백설양도 세글자\n아니.. 이런 운명이??\n이건 히오스를 안할수가 없잖아요.\n제가 왜 히오스를 하는지 알아요?\n침.착.맨  세 글자라서 하는거에요.`,
    `시청자들 한땀한땀 다 대가리를 깨놔야 되는데`,
    `어? 왜 우는거야?\n난 왜케 꼴배기 싫지 저거?\n울지 마세요.\n울면 죽여버립니다.`,
    `당신들은 그냥 집단심리라는 광기에 취한 미친 놈들이에요`,
    `도도새가 운영해도 니들 보단 잘하겠다.`,
    `나 사실 재혼이야.\n처음에 게임하고 결혼했어.`,
  ];

  // 총 컨텐츠 개수 (짝수로 맞추기)
  const ParseContentLimit = () => {
    if (Phrase.length % 2 === 0) {
      // 앞표지 2장 추가
      return Phrase.length + 2;
    }
    // 앞표지 2장 + 짝수 맞추기 1장 추가
    return Phrase.length + 3;
  };
  const contentLimit: number = ParseContentLimit();
  const [contentId, setContentId] = useState(0);

  // 페이지 넘기는 애니메이션용
  const [isLeftFliped, setLeftFlip] = useState(false);
  const [isRightFliped, setRightFlip] = useState(false);
  const [LeftPause, setLeftPause] = useState(false);
  const [RightPause, setRightPause] = useState(false);

  // 클릭시 페이지를 넘기고 내용을 업데이트함
  const LeftPageClick = () => {
    if (contentId === 0) return;

    setLeftFlip(true);
    setRightPause(true);
    setTimeout(() => {
      setLeftFlip(false);
      setRightPause(false);
      setContentId(contentId - 2);
    }, 1000);
  };

  // 클릭시 페이지를 넘기고 내용을 업데이트함
  const RightPageClick = () => {
    if (contentId === contentLimit) return;

    setRightFlip(true);
    setLeftPause(true);
    setTimeout(() => {
      setRightFlip(false);
      setLeftPause(false);
      setContentId(contentId + 2);
    }, 1000);
  };

  return (
    <>
      <StyledMain>
        <StyledDiv>
          <BackgroundCover>
            {contentId <= 2 ? <></> : <StyledBackLeft></StyledBackLeft>}
            {contentId >= contentLimit - 2 ? (
              <></>
            ) : (
              <StyledBackRight></StyledBackRight>
            )}
          </BackgroundCover>
          {contentId === 0 ? (
            <></> // 첫장 왼쪽페이지 안보이게
          ) : (
            <StyledSectionLeft
              onClick={LeftPageClick}
              isLeftFliped={isLeftFliped}
              LeftPause={LeftPause}
              id="leftPage"
            >
              {!isLeftFliped && !isRightFliped ? (
                contentId === contentLimit ? (
                  <BackCover></BackCover> // 뒷표지
                ) : (
                  <Page>{Phrase[contentId - 2]}</Page>
                ) // 내용
              ) : (
                <></>
              )}
            </StyledSectionLeft>
          )}
          {contentId === contentLimit ? (
            <></> // 마지막장 오른쪽페이지 안보이게
          ) : (
            <StyledSectionRight
              onClick={RightPageClick}
              isRightFliped={isRightFliped}
              RightPause={RightPause}
              id="rightPage"
            >
              {!isLeftFliped && !isRightFliped ? (
                contentId === 0 ? (
                  <FrontCover></FrontCover> // 앞표지
                ) : (
                  <Page>{Phrase[contentId - 1]}</Page>
                ) // 내용
              ) : (
                <></>
              )}
            </StyledSectionRight>
          )}
        </StyledDiv>
      </StyledMain>
    </>
  );
}

// pageSection
const StyledMain = styled.main`
  width: 100vw;
  height: calc(100vh - ${HEADER_HEIGHT}px);
  background: #e1e1e1;

  overflow: hidden;
  position: relative;
  perspective: 1000px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledDiv = styled.div`
  width: 80vw;
  height: 80vh;
  display: flex;
  z-index: -2;
  perspective: 2500px;
`;

const BackgroundCover = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  z-index: -1;
`;

const StyledBackLeft = styled.div`
  width: 50%;
  height: 100%;
  background: white;
  border: 1px solid black;
  z-index: -1;
  position: absolute;
  border-radius: 10px 0 0 10px;
  box-shadow: -10px 0px 30px gray inset;
`;

const StyledBackRight = styled.div`
  width: 50%;
  height: 100%;
  background: white;
  border: 1px solid black;
  z-index: -1;
  position: absolute;
  margin-left: 50%;
  border-radius: 0 10px 10px 0;
  box-shadow: 10px 0px 30px gray inset;
`;

const StyledSectionLeft = styled.section<{
  isLeftFliped: boolean;
  LeftPause: boolean;
}>`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  background: white;
  border: 1px solid black;
  border-radius: 10px 0 0 10px;
  box-shadow: -10px 0px 30px gray inset;

  position: absolute;
  top: 0;
  left: 0;
  transform-origin: right center;
  transition-duration: 0s;
  transition-timing-function: ease-out;

  ${({ isLeftFliped }) => {
    return (
      isLeftFliped &&
      css`
        transition-duration: 1s;
        transform: rotateY(180deg);
        z-index: 100;
      `
    );
  }}

  ${({ LeftPause }) => {
    return (
      LeftPause &&
      css`
        pointer-events: none;
      `
    );
  }}
`;

const StyledSectionRight = styled.section<{
  isRightFliped: boolean;
  RightPause: boolean;
}>`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  background: white;
  border: 1px solid black;
  border-radius: 0 10px 10px 0;
  box-shadow: 10px 0px 30px gray inset;
  overflow: hidden;

  margin-left: 50%;
  position: absolute;
  top: 0;
  left: 0;
  transform-origin: left center;
  transition-duration: 0s;
  transition-timing-function: ease-out;

  ${({ isRightFliped }) => {
    return (
      isRightFliped &&
      css`
        transition-duration: 1s;
        transform: rotateY(-180deg);
        z-index: 100;
      `
    );
  }}

  ${({ RightPause }) => {
    return (
      RightPause &&
      css`
        pointer-events: none;
      `
    );
  }}
`;
