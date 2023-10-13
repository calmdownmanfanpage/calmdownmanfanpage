import { createBrowserRouter } from "react-router-dom";
import MainPage from "./main/MainPage";
import Layout from "../components/Layout";
import { Chat, Login, Register } from "../pages/dahyeon/index";
import Games from "./jeongun/Games";

export const path = {
  root: "/",
  dongseon: "/dongseon",
  games: "/games",
  teahyeong: "/teahyeong",
  soyeon: "/soyeon",
  dahyeon: "/dahyeon",
  gangsan: "/gangsan",
  choonghyeon: "/choonghyeon",
  minseong: "/minseong",
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
        path: path.dahyeon,
        element: <Chat />,
        children:[
          {
            path: "login",
            element: <Login />
          },
          {
            path: "register",
            element: <Register />
          }
        ],
      },
      {
        path: path.games,
        element: <Games />,
      },
    ],
  },
]);
