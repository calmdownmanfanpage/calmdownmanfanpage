import styled, { css } from "styled-components";
import { NavBar } from "../components";
import { HEADER_HEIGHT } from "../../styles/contants";

function ChatPage() {
  return (
    <>
      <NavBar />
      <StyledContainer>
        <StyledWrap>
          <span>채팅창입니다</span>
        </StyledWrap>
      </StyledContainer>
    </>
  );
}

const StyledContainer = styled.div`
  width: 100%;
  height: calc(100vh - ${HEADER_HEIGHT}px - 50px);
  background-color: #e1e1e1;
`;

const StyledWrap = styled.div`
  border: 1px solid red;
  max-width: 60%;
  margin: auto;
  height: 100%;
  background-color: #ececec;
`;

export default ChatPage;
