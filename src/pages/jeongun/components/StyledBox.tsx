import styled from "styled-components";

const StyledMain = styled.div`
  width: 95%;
  height: auto;
  display: flex;
  flex-direction: column;
  background: #f0f1f3;
  align-items: center;
  border-radius: 3px;
  margin: 7px 0 7px 0;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const StyledTitle = styled.h1`
  font-family: "Do Hyeon", sans-serif;
  font-size: 2.5rem;
  font-weight: 400;
  text-align: center;
  line-height: 1.5;
`;

const StyledExplain = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  width: 50%;
  font-size: 1.5rem;
  text-align: center;
  line-height: 1.5;
  white-space: pre-wrap;
  text-align: left;
`;
const StyledVideo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin: 15px 0 15px 0;
`;

const StyledSide = styled.div`
  width: 20%;
`;

export { StyledMain, StyledTitle, StyledExplain, StyledVideo, StyledSide };
