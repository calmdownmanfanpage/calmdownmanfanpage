import styled, { css } from "styled-components";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";
import { useFetchRecipientUser } from "../../hooks/useFetchRecipient";
import moment from "moment";
import "moment/dist/locale/ko";
import InputEmoji from "react-input-emoji";

function ChatBox() {
  const { user } = useContext(AuthContext);
  const {
    currentChat,
    messages,
    isMessagesLoading,
    messagesError,
    sendTextMessage,
  } = useContext(ChatContext);

  const { recipientUser } = useFetchRecipientUser(currentChat, user);
  const [textMessage, setTextMessage] = useState(""); //채팅 글

  if (!recipientUser)
    return <StyledAlert>대화가 선택되지 않았습니다.</StyledAlert>;

  if (isMessagesLoading)
    return <StyledAlert>채팅 방을 로딩 중입니다.</StyledAlert>;
  return (
    <StyledChatBox>
      <strong>{recipientUser?.name}</strong>
      <div className="messageWrap">
        {messages &&
          messages.map((message, index) => (
            <StyledMessageBox
              key={index}
              state={message?.senderId === user?._id ? "send" : "receive"}
            >
              <p>{message?.text}</p>
              <span>
                {/* {moment(message.createAt).format("YYYY-MM-DD a hh:mm dddd")} */}
                {moment(message.createdAt).calendar()}
              </span>
            </StyledMessageBox>
          ))}
      </div>
      <StyledTextPadBox>
        <InputEmoji
          value={textMessage}
          onChange={setTextMessage}
          borderColor="rgba(72,112,223,0.2)"
        />
        <button
          className="send"
          onClick={() =>
            sendTextMessage(textMessage, user, currentChat._id, setTextMessage)
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-send-fill"
            viewBox="0 0 16 16"
          >
            <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
          </svg>
        </button>
      </StyledTextPadBox>
    </StyledChatBox>
  );
}

export default ChatBox;

const StyledAlert = styled.p`
  width: 100%;
  text-align: center;
  font-weight: bold;
  padding-top: 3rem;
`;

const StyledChatBox = styled.section`
  width: 100%;
  height: 48rem;
  border-radius: 7px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  position: relative;

  .messageWrap {
    padding: 1rem 1.75rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 41rem;
    overflow: auto;
    scrollbar-color: #d4aa70 #e4e4e4;
    scrollbar-width: thin;
  }
  .messageWrap::-webkit-scrollbar {
    width: 10px;
  }

  .messageWrap::-webkit-scrollbar-track {
    background-color: #e4e4e4;
    border-radius: 100px;
  }

  .messageWrap::-webkit-scrollbar-thumb {
    border-left: 0;
    border-right: 0;
    background-color: gray;
  }

  strong {
    display: block;
    border-radius: 7px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    padding: 1rem;
    font-weight: bold;
    background-color: gray;
    color: #fff;
    text-align: center;
    position: sticky;
  }
`;

const StyledMessageBox = styled.div`
  display: block;
  max-width: 20rem;
  width: fit-content;
  border-radius: 7px;
  font-size: 14px;
  padding: 0.675rem;
  background-color: #ccc;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  ${({ state }) => {
    return state === "send"
      ? `margin-left:auto; background-color:#fff;`
      : `margin-right:auto`;
  }};
  span {
    display: block;
    font-size: 12px;
    margin-top: 9px;
    color: #535353;
  }
`;

const StyledTextPadBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  position: absolute;
  bottom: 10px;
  left: 0;
  align-items: center;
  .send {
    width: 2.3rem;
    height: 2.3rem;
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: #14ed78;
  }
`;
