import { useEffect, useState } from "react";
import { baseUrl, getRequest } from "../utils/services";

//채팅 상대 유저 상세정보 가져오기
export const useFetchRecipientUser = (chat, user) => {
  const [recipientUser, setRecipientUser] = useState(null); //채팅 상대방 유저 정보
  const [error, setError] = useState(null);

  //채팅방에서 로그인 유저를 제외한 나머지 상대방 유저 찾기
  const recipientId = chat?.members.find((id) => id !== user?._id);

  useEffect(() => {
    const getUser = async () => {
      if (!recipientId) return null;

      const response = await getRequest(`${baseUrl}/users/find/${recipientId}`);

      if (response.error) {
        return setError(response);
      }

      setRecipientUser(response);
    };

    getUser();
  }, [recipientId]);

  return { recipientUser };
};
