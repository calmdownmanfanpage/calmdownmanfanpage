import styled, { css } from "styled-components";
import { useContext } from "react";
import { NavBar } from "../components";
import { HEADER_HEIGHT } from "../../styles/contants";
import { ChatContext } from "../../context/ChatContext";
import { AuthContext } from "../../context/AuthContext";
import UserChat from "../components/chat/UserChat";

function ChatPage() {
  const { user } = useContext(AuthContext);
  const { userChats, isUserChatsLoading, userChatsError } =
    useContext(ChatContext);

  return (
    <>
      <NavBar />
      <StyledContainer>
        <StyledWrap>
          {userChats?.length > 1 ? null : (
            <StyledChatList>
              {isUserChatsLoading && <p>채팅 로딩중....</p>}{" "}
              {userChats?.map((chat, index) => {
                return <UserChat key={index} chat={chat} user={user} />;
              })}
            </StyledChatList>
          )}
          <StyledChatBox>채팅 화면</StyledChatBox>
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
  // border: 1px solid red;
  max-width: 60%;
  margin: auto;
  height: 100%;
  display: flex;
  gap: 3rem;
  padding-top: 2rem;
`;

const StyledChatList = styled.section`
  width: 25%;
`;
const StyledChatBox = styled.section`
  border: 1px solid red;
  width: 75%;
`;

export default ChatPage;
