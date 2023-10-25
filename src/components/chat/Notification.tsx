import { useContext, useState } from "react";
import styled, { css } from "styled-components";
import { ChatContext } from "../../context/ChatContext";
import { AuthContext } from "../../context/AuthContext";
import unreadNotificationsFunc from "../../utils/unreadNotifications";
import moment from "moment";

function Notification() {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useContext(AuthContext);
  const {
    notifications,
    userChats,
    allUsers,
    markAllNotificationsAsRead,
    markNotificationAsRead,
  } = useContext(ChatContext);

  const unreadNotifications = unreadNotificationsFunc(notifications); //안읽은 메시지들
  const modifiedNotifications = notifications.map((noti) => {
    const sender = allUsers.find((user) => user._id === noti.senderId); //메시지 보낸사람 찾기

    return {
      ...noti,
      senderName: sender?.name,
    };
  });

  return (
    <StyledNotificationBox>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        className="bi bi-envelope-fill"
        viewBox="0 0 16 16"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
      </svg>
      {unreadNotifications?.length > 0 && (
        <span className="count">{unreadNotifications?.length}</span>
      )}
      {isOpen && (
        <div>
          <strong onClick={() => markAllNotificationsAsRead(notifications)}>
            {modifiedNotifications?.length > 0
              ? `메시지 모두 읽기`
              : `읽을 메시지가 없습니다.`}
          </strong>
          <ul>
            {modifiedNotifications?.length > 0 &&
              modifiedNotifications.map((n, index) => (
                <li
                  key={index}
                  className={n.isRead ? "read" : "unRead"}
                  onClick={() =>
                    markNotificationAsRead(n, userChats, user, notifications)
                  }
                >
                  <span>{`${n.senderName}님이 메시지를 보냈습니다.`}</span>
                  <span>{moment(n.date).calendar()}</span>
                </li>
              ))}
          </ul>
        </div>
      )}
    </StyledNotificationBox>
  );
}

export default Notification;

const StyledNotificationBox = styled.div`
  position: relative;
  svg {
    cursor: pointer;
  }
  .count {
    display: block;
    font-size: 10px;
    width: 14px;
    height: 14px;
    background-color: #14ed78;
    color: #fff;
    border-radius: 50%;
    text-align: center;
    line-height: 13px;
    position: absolute;
    top: -5px;
    right: -8px;
    cursor: pointer;
  }
  div {
    position: absolute;
    width: 15rem;
    font-size: 14px;
    background-color: #fff;
    border: none;
    z-index: 10;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    left: 0;
    text-align: center;
    border-radius: 7px;
    strong {
      display: inline-block;
      font-weight: bold;
      padding: 7px;
      cursor: pointer;
    }
    ul {
      text-align: left;
      margin-top: 4px;
      li {
        padding: 7px;
        font-size: 12px;
        background-color: #ececec;
        margin-bottom: 4px;
        transition: background-color 0.2s linear;
        &.read {
          opacity: 0.4;
          /* background-color: #fff; */
        }
        &:hover {
          background-color: #ccc;
          transition: background-color 0.2s linear;
        }
        span {
          display: block;
          &:first-child {
            margin-bottom: 5px;
          }
          &:last-child {
            font-size: 10px;
          }
        }
      }
    }
  }
`;
