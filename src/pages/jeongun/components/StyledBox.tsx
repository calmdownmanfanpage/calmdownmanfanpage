import styled from "styled-components";

const StyledMain = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: column;
  background: #e3e0f3;
  align-items: center;
  border-radius: 5px;
  margin: 10px 0 10px 0;
`;

const StyledTitle = styled.h1`
  font-family: arial, sans-sefif;
  font-size: 2.5rem;
  font-weight: 400;
  text-align: center;
  line-height: 1.5;
`;

const StyledExplain = styled.div`
  width: 50%;
  font-size: 1.3rem;
  text-align: center;
  line-height: 1.5;
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
