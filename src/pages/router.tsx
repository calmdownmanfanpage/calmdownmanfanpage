import { createBrowserRouter } from "react-router-dom";
import MainPage from "./main/MainPage";
import Layout from "../components/Layout";
import PhrasePage from "./dongseon/PhrasePage";
import MemePage from "./gangsan/MemePage";
import { Chat, Login, Register } from "../pages/dahyeon/index";
import Games from "./jeongun/Games";

export const path = {
  root: "/",
  dongseon: "/dongseon",
  games: "/games",
  dahyeon: "/dahyeon",
  meme: "/meme",
  login: "/login",
  register: "/register",
};

export const router = createBrowserRouter([
  {
    path: path.root,
    element: <Layout />,
    children: [
      {
        path: path.root,
        element: <MainPage />,
      },
      {
        path: path.meme,
        element: <MemePage />,
      },
      {
        path: path.dahyeon,
        element: <Chat />,
      },
      {
        path: path.games,
        element: <Games />,
      },
      {
        path: path.dongseon,
        element: <PhrasePage />,
      },
      {
        path: path.dongseon+"/:id",
        element: <PhrasePage />,
      },
      {
        path: path.login,
        element: <Login />,
      },
      {
        path: path.register,
        element: <Register />,
      },
    ],
  },
]);
