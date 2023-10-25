import styled, { css } from "styled-components";
import { useContext } from "react";
import { useFetchRecipientUser } from "../../hooks/useFetchRecipient";
import { ChatContext } from "../../context/ChatContext";
import unreadNotificationsFunc from "../../utils/unreadNotifications";
import useFetchLatestMessage from "../../hooks/useFetchLatesMessage";
import moment from "moment";

function UserChat({ chat, user }) {
  const {
    updateCurrentChat,
    onlineUsers,
    notifications,
    markThisUserNotificationAsRead,
  } = useContext(ChatContext);
  const { recipientUser } = useFetchRecipientUser(chat, user);
  const { latestMessage } = useFetchLatestMessage(chat);
  const unreadNotifications = unreadNotificationsFunc(notifications);
  const thisUserNotifications = unreadNotifications?.filter(
    (noti) => noti.senderId === recipientUser?._id,
  );
  const isOnline = onlineUsers?.some(
    (onlineUser) => onlineUser?.userId === recipientUser?._id,
  );

  return (
    <StyledChatCard
      onClick={() => {
        updateCurrentChat(chat);
        if (thisUserNotifications?.length !== 0) {
          markThisUserNotificationAsRead(thisUserNotifications, notifications);
        }
      }}
    >
      <header>
        <h2>{recipientUser?.name}</h2>
        <span>{moment(latestMessage?.createdAt).calendar()} </span>
      </header>
      <div className="message">
        <p>{latestMessage?.text} </p>
        {thisUserNotifications?.length > 0 && (
          <span>{thisUserNotifications?.length}</span>
        )}
      </div>
      <span className={isOnline ? "alert" : ""}></span>
    </StyledChatCard>
  );
}

const StyledChatCard = styled.article`
  background-color: #fff;
  border-radius: 7px;
  padding: 12px;
  font-size: 14px;
  position: relative;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  cursor: pointer;
  transition: transform 0.1s linear;
  &:hover {
    /* transform: scale(1.02); */
    background-color: #f7fafa;

    transition: transform 0.1s linear;
  }
  &:focus {
    border-color: #008296;
    box-shadow: rgba(213, 217, 217, 0.5) 0 2px 5px 0;
    outline: 0;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 7px;
    h2 {
      font-weight: bold;
    }
    span {
      font-size: 10px;
    }
  }
  .message {
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      width: 90%;
      font-size: 12px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    span {
      display: inline-block;
      border: 1px solid #14ed78;
      background-color: #14ed78;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      color: white;
      font-size: 11px;
      text-align: center;
    }
  }
  .alert {
    display: inline-block;
    border: 1px solid red;
    background-color: red;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    position: absolute;
    top: 5px;
    right: 5px;
  }
`;

export default UserChat;
