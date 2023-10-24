import { createContext, useState, useCallback, useEffect } from "react";
import { baseUrl, postRequest, getRequest } from "../utils/services";
import { io } from "socket.io-client";

const ChatContext = createContext(null);

//user : 현재 로그인한 유저
const ChatContextProvider = ({ children, user }) => {
  const [userChats, setUserChats] = useState(); //로그인한 유저의 채팅 리스트
  const [isUserChatsLoading, setIsUserChatsLoading] = useState(false);
  const [userChatError, setUserChatError] = useState();
  const [potentialChats, setPotentialChats] = useState([]); //아직 채팅안한 리스트
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState();
  const [isMessagesLoading, setIsMessagesLoading] = useState(false);
  const [messagesError, setMessagesError] = useState(); //가져온 메시지 에러
  const [sendTextMessageError, setSendTextMessageError] = useState(); //보내는 메시지 에러
  const [newMessage, setNewMessage] = useState();
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);

  console.log("socekt: ", socket);

  //initial socket
  useEffect(() => {
    const newSocket = io("http://localhost:3000");
    setSocket(newSocket);

    //cleanup function
    return () => {
      newSocket.disconnect();
    };
  }, [user]);

  // 온라인 유저 추가
  useEffect(() => {
    if (socket === null) return;
    socket.emit("addNewUser", user?._id);
    //listen from server
    socket.on("getOnlineUsers", (res) => {
      setOnlineUsers(res);
    });
  }, [socket]);

  //메시지 보내기
  useEffect(() => {
    if (socket === null) return;
    const recipientId = currentChat?.members.find((id) => id !== user?._id); //채팅 상대방 유저 찾기

    socket.emit("sendMessage", { ...newMessage, recipientId });
  }, [newMessage]);

  //메시지 받기
  useEffect(() => {
    if (socket === null) return;

    socket.on("getMessage", (res) => {
      if (currentChat?._id !== res.chatId) return;

      setMessages((prev) => [...prev, res]);
    });
  }, [socket, currentChat]);

  //로그인한 유저를 제외한 모든 유저정보를 불러와
  //그 중 채팅기록이 없는 상대 유저정보들 세팅
  useEffect(() => {
    const getUsers = async () => {
      const response = await getRequest(`${baseUrl}/users`);
      if (response.error) {
        return console.log("getUsers error : ", error);
      }

      const pChats = response.filter((u) => {
        let isChatCreated = false;

        if (user?._id === u._id) return false;

        if (userChats) {
          isChatCreated = userChats?.some((chat) => {
            // return chat.members[0] === u._id || chat.members[1] === u._id;
            return chat.members[1] === u._id;
          });
        }

        return !isChatCreated;
      });

      setPotentialChats(pChats);
    };

    getUsers();
  }, [userChats]);

  //로그인 유저의 채팅 리스트 정보 가져오기
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

  //로그인한 유저의 메시지 기록 모두 가져오기
  useEffect(() => {
    const getMessages = async () => {
      if (currentChat?._id) {
        setIsMessagesLoading(true);
        setMessagesError(null);

        const resposne = await getRequest(
          `${baseUrl}/messages/${currentChat?._id}`,
        );

        setIsMessagesLoading(false);

        if (resposne.error) {
          return setMessagesError(resposne);
        }

        setMessages(resposne);
      }
    };

    getMessages();
  }, [currentChat]);

  //채팅 메시지 등록(보내기)
  const sendTextMessage = useCallback(
    async (textMessage, sender, currentChatId, setTextMessage) => {
      if (!textMessage) return console.log("메시지를 입력해주세요.");

      const response = await postRequest(
        `${baseUrl}/messages`,
        JSON.stringify({
          chatId: currentChatId, //채팅방 아이디
          senderId: sender._id, //메시지 보내는 유저 아이디
          text: textMessage, //채팅 메시지
        }),
      );

      if (response.error) {
        return setSendTextMessageError(response);
      }

      setNewMessage(response);
      setMessages((prev) => [...prev, response]);
      setTextMessage("");
    },
    [],
  );

  //생성된 채팅방에서 하나의 채팅방 클릭시 오른쪽 채팅기록 보여주기위해
  //currentChat세팅
  const updateCurrentChat = useCallback(async (chat) => {
    setCurrentChat(chat);
  }, []);

  //왼쪽 리스트(대화 기록이 없는 유저들)에서 유저 클릭 시 채팅방 생성(세팅)
  const createChat = useCallback(async (firstId, secondId) => {
    const response = await postRequest(
      `${baseUrl}/chats`,
      JSON.stringify({
        firstId, //로그인 유저
        secondId, //상대방 유저
      }),
    );
    if (response.error)
      return console.log("채팅 생성에 오류가 발생했습니다.", response);

    setUserChats((prev) => [...prev, response]);
  }, []);

  return (
    <ChatContext.Provider
      displayName="Context Display Name"
      value={{
        userChats,
        isUserChatsLoading,
        userChatError,
        potentialChats,
        createChat,
        currentChat,
        updateCurrentChat,
        messages,
        isMessagesLoading,
        messagesError,
        sendTextMessage,
        onlineUsers,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export { ChatContext, ChatContextProvider };
