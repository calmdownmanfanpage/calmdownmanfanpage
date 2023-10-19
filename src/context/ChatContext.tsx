import { createContext, useState, useCallback, useEffect } from "react";
import { baseUrl, postRequest, getRequest } from "../utils/services";

const ChatContext = createContext(null);

const ChatContextProvider = ({ children, user }) => {
  const [userChats, setUserChats] = useState(null);
  const [isUserChatsLoading, setIsUserChatsLoading] = useState(false);
  const [userChatError, setUserChatError] = useState(null);

  //로그인 유저의 채팅 정보 가져오기
  useEffect(() => {
    const getUserChats = async () => {
      if (user?._id) {
        setIsUserChatsLoading(true);
        setUserChatError(null);

        const response = await getRequest(`${baseUrl}/chats/${user?._id}`);

        setIsUserChatsLoading(false);

        if (response.error) {
          return setUserChatError(response);
        }

        setUserChats(response);
      }
    };

    getUserChats();
  }, [user]);

  return (
    <ChatContext.Provider
      value={{
        userChats,
        isUserChatsLoading,
        userChatError,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export { ChatContext, ChatContextProvider };
