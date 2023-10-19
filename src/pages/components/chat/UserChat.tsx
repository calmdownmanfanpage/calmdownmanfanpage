import styled, { css } from "styled-components";
import { useFetchRecipientUser } from "../../../hooks/useFetchRecipient";

function UserChat({ chat, user }) {
  const { recipientUser } = useFetchRecipientUser(chat, user);

  return (
    <StyledChatCard>
      <header>
        <h2>{recipientUser?.name}</h2>
        <span>2023-10-19 </span>
      </header>
      <div className="message">
        <p>야야 요즘 너 잘지내고 있냐? 얼마전에 생일이던데 ㅋㅋㅋ 축하한다 </p>
        <span>2</span>
      </div>
      <span className="alert"></span>
    </StyledChatCard>
  );
}

const StyledChatCard = styled.article`
  background-color: #fff;
  border-radius: 7px;
  padding: 12px 7px;
  font-size: 14px;
  position: relative;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  cursor: pointer;
  transition: transform 0.1s linear;
  &:hover {
    transform: scale(1.02);
    transition: transform 0.1s linear;
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
