import { createBrowserRouter } from "react-router-dom";
import MainPage from "./main/MainPage";
import Layout from "../components/Layout";
import MemePage from "./gangsan/MemePage";
import { Chat, Login, Register } from "../pages/dahyeon/index";
import Games from "./jeongun/Games";
import Making from "./dongseon/Making";

export const path = {
  root: "/",
  dongseon: "/dongseon",
  games: "/games",
  dahyeon: "/dahyeon",
  meme: "/meme",
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
        children: [
          {
            path: "login",
            element: <Login />,
          },
          {
            path: "register",
            element: <Register />,
          },
        ],
      },
      {
        path: path.games,
        element: <Games />,
      },
      { path: path.dongseon, element: <Making /> },
    ],
  },
]);
