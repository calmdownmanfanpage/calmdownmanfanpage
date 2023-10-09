import { createBrowserRouter } from "react-router-dom";
import MainPage from "./main/MainPage";
import Layout from "../components/Layout";
import MemePage from "./gangsan/MemePage";

export const path = {
  root: "/",
  dongseon: "/dongseon",
  jeongoon: "/jeongoon",
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
    ],
  },
]);
