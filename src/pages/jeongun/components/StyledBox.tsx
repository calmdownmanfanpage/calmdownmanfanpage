import styled from "styled-components";

const StyledMain = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: column;
  background: #1f2023;
  align-items: center;
  border-radius: 10px;
  color: white;
  margin: 20px 0 20px 0;
`;

const StyledTitle = styled.h1`
  font-family: arial, sans-sefif;
  font-size: 3rem;
  font-weight: 400;
`;

const StyledExplain = styled.div`
  width: 50%;
  font-size: 1.5rem;
`;
const StyledVideo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export { StyledMain, StyledTitle, StyledExplain, StyledVideo };
