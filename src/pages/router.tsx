import { createBrowserRouter } from "react-router-dom";
import MainPage from "./main/MainPage";
import Layout from "../components/Layout";
import Making from "./dongseon/PhrasePage";

export const path = {
  root: "/",
  dongseon: "/dongseon",
  jeongoon: "/jeongoon",
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
        path: path.dongseon,
        element: <Making />,
      },
    ],
  },
]);
