import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


import App from "./App.jsx";
import Home from "./Topic-22 useParams/pages/Home.jsx";
import About from "./Topic-22 useParams/pages/About.jsx";
import Career from "./Topic-22 useParams/pages/Career.jsx";
import User from "./Topic-22 useParams/pages/User.jsx";
// Routing Configuration Setup

const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children: [
            {
                index:true,
                element:<Home/>
            },
            {
                path:"about",
                element:<About/>
            },
            {
                path:"career",
                element:<Career/>
            },
            {
                path:"user/:id",
                element:<User/>
            }      
        ]
    }
])



createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
