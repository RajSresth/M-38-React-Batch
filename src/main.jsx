import { Children, StrictMode } from "react";
import {createRoot} from "react-dom/client";
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";


import App from "./App.jsx";
import Home from "./Topic-21 React Router Part-1/Home.jsx";
import About from "./Topic-21 React Router Part-1/About.jsx";
import Contact from "./Topic-21 React Router Part-1/Contact.jsx";
import NotFound from "./Topic-21 React Router Part-1/NotFound.jsx";
import Services from "./Topic-21 React Router Part-1/Services.jsx";
import User from "./Topic-21 React Router Part-1/User.jsx"
import Seller from "./Topic-21 React Router Part-1/Seller.jsx"
import Error from "./Topic-21 React Router Part-1/Error.jsx";

/**
 * Router Configuration Setup
 */

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        index:true,
        element:<Home/>
      },
      {
        path:"about",
        element: <About/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path:"services",
        element:<Services/>,
        children:[
          {
            index:true,
            element:<h1>Welcome to services page</h1>
          },
          {
            path:"seller",
            element:<Seller/>
          },
           {
            path:"user",
            element:<User/>
          }
        ],
       
      }
    ],
    errorElement:<NotFound/>
  }
  
])





createRoot(document.getElementById("root")).render(
  <RouterProvider  router={appRouter} />
 );
 
  