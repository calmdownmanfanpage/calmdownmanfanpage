import styled from "styled-components";
import { useContext } from "react";
import { ChatContext } from "../../context/ChatContext";
import { AuthContext } from "../../context/AuthContext";

function PotentialChats() {
  const { user } = useContext(AuthContext);
  const { potentialChats, createChat, onlineUsers } = useContext(ChatContext);

  return (
    <StyledPotentialChatBox>
      {potentialChats &&
        potentialChats.map((u, index) => {
          return (
            <StyledPotentialChatCard
              key={index}
              onClick={() => createChat(user._id, u._id)}
            >
              {u.name}
              <span
                className={
                  onlineUsers?.some(
                    (onlineUser) => onlineUser?.userId === u?._id,
                  )
                    ? "alert"
                    : ""
                }
              ></span>
            </StyledPotentialChatCard>
          );
        })}
    </StyledPotentialChatBox>
  );
}

const StyledPotentialChatBox = styled.section`
  position: absolute;
  left: 5rem;
  top: 2rem;
  width: 10%;
  height: 48rem;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StyledPotentialChatCard = styled.article`
  background-color: #fff;
  border: 1px solid #d5d9d9;
  border-radius: 8px;
  box-shadow: rgba(213, 217, 217, 0.5) 0 2px 5px 0;
  box-sizing: border-box;
  color: #0f1111;
  cursor: pointer;
  display: inline-block;
  font-family: "Amazon Ember", sans-serif;
  font-size: 13px;
  line-height: 29px;
  padding: 0 10px 0 11px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  width: 100px;
  &:hover {
    background-color: #f7fafa;
  }

  &:focus {
    border-color: #008296;
    box-shadow: rgba(213, 217, 217, 0.5) 0 2px 5px 0;
    outline: 0;
  }

  .alert {
    display: inline-block;
    background-color: red;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    position: absolute;
    top: 5px;
    right: 5px;
  }
`;

export default PotentialChats;
