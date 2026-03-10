import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css"

import App from "./App.jsx";
import Home from "./Topic-22 useParams/pages/Home.jsx";
import About from "./Topic-22 useParams/pages/About.jsx";
import Career from "./Topic-22 useParams/pages/Career.jsx";
import Products from "./Topic-22 useParams/pages/Products.jsx";
import Error from "./Topic-21 React Router Part-1/Error.jsx"
import NotFound from "./Topic-21 React Router Part-1/NotFound.jsx"
import CategoryPage from "./Topic-22 useParams/pages/CategoryPage.jsx";
import Login from "./Topic-22 useParams/pages/Login.jsx"
import Dashboard from "./Topic-22 useParams/pages/Dashboard.jsx";
import Protected from "./Topic-22 useParams/pages/Protected.jsx";
// Routing Configuration Setup

const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        errorElement:<Error/>,
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
                path:"products/:id",
                element:<Products/>,
                loader: async ({params}) => {
                    console.log("params:",params.id);
                    const response = await fetch(`https://api.theindianhome.in/api/product/list`);
                    const {products} = await response.json(); 
                    const singleProduct = products.find(element=> element._id === params.id)
                    return singleProduct;
               }
            },
            {
                path:"*",
                element:<NotFound/>
            },
            {
                path:"category/:id",
                element:<CategoryPage/>
            },
               
        ]
    },
    {
        path:"login",
        element:<Login/>
    },
    {
        path:"dashboard",
        element: <Protected>
            <Dashboard/>
        </Protected>
    } 
])
            
       
     



createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
