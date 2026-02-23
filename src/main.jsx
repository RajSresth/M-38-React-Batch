import { Children, StrictMode } from "react";
import {createRoot} from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


import App from "./App.jsx";
import Home from "./Topic-21 React Router Part-1/Home.jsx";
import About from "./Topic-21 React Router Part-1/About.jsx";
import Contact from "./Topic-21 React Router Part-1/Contact.jsx";
import NotFound from "./Topic-21 React Router Part-1/NotFound.jsx";

/**
 * Router Configuration Setup
 */

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"about",
        element: <About/>
      },
      {
        path:"contact",
        element:<Contact/>
      }
    ],
    errorElement:<NotFound/>
  }
  
])





createRoot(document.getElementById("root")).render(
  <RouterProvider  router={appRouter} />
 );
 
  