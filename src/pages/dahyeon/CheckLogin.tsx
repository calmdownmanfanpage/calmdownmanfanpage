import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ChatPage } from ".";

function CheckLogin(page) {
  const { user } = useContext(AuthContext);
  return user ? <ChatPage /> : page;
}

export { CheckLogin };
