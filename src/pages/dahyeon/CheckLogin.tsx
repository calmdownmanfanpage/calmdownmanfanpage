import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ChatPage } from ".";
import { ChatContextProvider } from "../../context/ChatContext";

function CheckLogin({ page }) {
  const { user } = useContext(AuthContext);
  return user ? (
    <ChatContextProvider user={user}>
      <ChatPage />
    </ChatContextProvider>
  ) : (
    page
  );
}

export { CheckLogin };
