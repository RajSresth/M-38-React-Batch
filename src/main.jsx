import { Children, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from "./App.jsx";
import Home from "./Topic-21 React Router Part-1/Home.jsx";
import Posts from "./Topic-21 React Router Part-1/Posts.jsx";
import Todos from "./Topic-21 React Router Part-1/Todos.jsx";
import Albums from "./Topic-21 React Router Part-1/Albums.jsx";
import Services from "./Topic-21 React Router Part-1/Services.jsx";
import Error from "./Topic-21 React Router Part-1/Error.jsx";

import User from "./Topic-21 React Router Part-1/User.jsx";
import Seller from "./Topic-21 React Router Part-1/Seller.jsx";
import NotFound from "./Topic-21 React Router Part-1/NotFound.jsx";

/**
 * Router Configuration Setup
 */

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "posts",
        element: <Posts />,
        loader: async () => {
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts",
          );
          return await response.json();
        },
      },
      {
        path: "todos",
        element: <Todos />,
        loader: async () => {
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos",
          );
          return await response.json();
        },
      },
      {
        path: "albums",
        element: <Albums />,
        loader: async () => {
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/albums",
          );
          return await response.json();
        },
      },
      {
        path: "services",
        element: <Services />,
        children: [
          {
            index: true,
            element: <h1>Welcome to services page</h1>,
          },
          {
            path: "seller",
            element: <Seller />,
          },
          {
            path: "user",
            element: <User />,
          },
          {
            path: "*",
            element: <NotFound />,
          },
        ],
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />,
);
