import { useContext, useEffect, useState } from "react";
import { ChatContext } from "../context/ChatContext";
import { baseUrl, getRequest } from "../utils/services";

const useFetchLatestMessage = (chat) => {
  const { newMessage, notifications } = useContext(ChatContext);
  const [latestMessage, setLatestMessage] = useState();

  useEffect(() => {
    const getMessage = async () => {
      const response = await getRequest(`${baseUrl}/messages/${chat?._id}`);

      if (response.error) return console.log("error : ", response.error);

      const lastMessage = response[response?.length - 1];
      setLatestMessage(lastMessage);
    };
    getMessage();
  }, [newMessage, notifications]);

  return { latestMessage };
};

export default useFetchLatestMessage;
