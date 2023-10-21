import styled from "styled-components";

export default function Page({ children }) {
  return (
    <>
      <StyledPage>
        <StyledPhrase>{children}</StyledPhrase>
        <StyledInfo>
          <StyledBtn>🩷 x 100</StyledBtn>
          <StyledBtn>공유하기</StyledBtn>
        </StyledInfo>
      </StyledPage>
    </>
  );
}

const StyledPage = styled.div`
  width: 100%;
  height: 100%;
`;

const StyledPhrase = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: pre-wrap;
  line-height: 2;
  position: absolute;
`;

const StyledInfo = styled.div`
  position: absolute;
  width: 100%;
  height: 10%;
  bottom: 0;
  display: flex;
  justify-content: center;
  line-height: 2;
`;

const StyledBtn = styled.button`
  height: 40px;
  margin: 10px;
  border: 1px solid black;
  border-radius: 5px;
  background: white;
`;
