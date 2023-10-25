import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContextProvider } from "../context/ChatContext";

export default function Layout() {
  const { user } = useContext(AuthContext);
  return (
    <ChatContextProvider user={user}>
      <Header />
      <Outlet />
    </ChatContextProvider>
  );
}
