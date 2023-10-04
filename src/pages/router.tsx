import { createBrowserRouter } from "react-router-dom";
import ExamplePage from "./example/ExamplePage";
import MainPage from "./main/MainPage";
import Layout from "../components/Layout";

export const path = {
  root: "/",
  example: "/example",
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
        path: path.example,
        element: <ExamplePage />,
      },
    ],
  },
]);
