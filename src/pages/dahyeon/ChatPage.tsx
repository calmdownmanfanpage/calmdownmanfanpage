import styled, { css } from "styled-components";
import { useContext } from "react";
import { NavBar } from "../../components";
import { HEADER_HEIGHT } from "../../styles/contants";
import { ChatContext } from "../../context/ChatContext";
import { AuthContext } from "../../context/AuthContext";
import { UserChat, PotentialChats, ChatBox } from "../../components/chat";

function ChatPage() {
  const { user } = useContext(AuthContext);
  const { userChats, isUserChatsLoading } = useContext(ChatContext);

  return (
    <>
      <NavBar />
      <StyledContainer>
        <PotentialChats />
        <StyledWrap>
          {userChats?.length >= 1 && (
            <StyledChatList>
              {isUserChatsLoading && <p>채팅 로딩중....</p>}
              {userChats?.map((chat, index) => {
                return <UserChat key={index} chat={chat} user={user} />;
              })}
            </StyledChatList>
          )}
          <ChatBox />
        </StyledWrap>
      </StyledContainer>
    </>
  );
}

const StyledContainer = styled.div`
  width: 100%;
  height: calc(100vh - ${HEADER_HEIGHT}px - 50px);
  background-color: #e1e1e1;
  position: relative;
`;

const StyledWrap = styled.div`
  max-width: 60%;
  margin: auto;
  height: 100%;
  display: flex;
  gap: 3rem;
  padding-top: 2rem;
  @media screen and (max-width: 1000px) {
    max-width: 95%;
  }
`;

const StyledChatList = styled.section`
  width: 25%;
  height: 48rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  overflow: auto;
`;

export default ChatPage;
