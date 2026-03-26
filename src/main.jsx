import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css"

// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home from "./Day-21 React Router Part-1/Home.jsx";
// import Posts from "./Day-21 React Router Part-1/Posts.jsx";
// import Todos from "./Day-21 React Router Part-1/Todos.jsx";
// import Albums from "./Day-21 React Router Part-1/Albums.jsx";
// import NotFound from "./Day-21 React Router Part-1/NotFound.jsx";
// import Services from "./Day-21 React Router Part-1/Services.jsx";

// import User from "./Day-21 React Router Part-1/User.jsx";
// import Seller from "./Day-21 React Router Part-1/Seller.jsx";
// import Error from "./Day-21 React Router Part-1/Error.jsx";

//! Router configuration setup
// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     // Component:App, //aise bhi likh skte h but ye nhi krenge humlog
//     errorElement: <Error />,
//     // loader: async () => {  // iss api call mai dikkat aaya to errorElement chal jayega.
//     //     const response = await fetch("https:jsonplaceholder.typicode.com/posts")
//     //     return await response.json()
//     // },
//     children: [
//       {
//         // path:"",
//         index: true, //isse deafult set hogya ki "/" path hoga to app k sath sath home bhi khulega hi khulega aur ye index ko child mai hi likha jata h
//         element: <Home />,
//         // Component:Home,   //aise bhi likh skte h
//       },
//       {
//         path: "posts",
//         element: <Posts />,
//         loader: async () => {
//           const response = await fetch(
//             "https://jsonplaceholder.typicode.com/posts",
//           );
//           return await response.json();
//         },
//       },
//       {
//         path: "todos",
//         element: <Todos />,
//         loader: async () => {
//           const response = await fetch(
//             "https://jsonplaceholder.typicode.com/todos",
//           );
//           return await response.json();
//         },
//       },
//       {
//         path: "albums",
//         element: <Albums />,
//         loader: async () => {
//           const response = await fetch(
//             "https://jsonplaceholder.typicode.com/albums",
//           );
//           return await response.json();
//         },
//       },
//       {
//         path: "services",
//         element: <Services />,
//         children: [
//           {
//             index: true,
//             element: <h1>Welcome to Services Page</h1>,
//           },
//           {
//             path: "user",
//             element: <User />,
//           },
//           {
//             path: "seller",
//             element: <Seller />,
//           },
//           {
//             path: "*",
//             element: <NotFound />,
//           },
//         ],
//       },
//       {
//         path: "*",
//         element: <NotFound />,
//       },
//     ],
//   },
// ]);

// createRoot(document.getElementById("root")).render(
//   <RouterProvider router={appRouter} />,
// );

//! use params yaha se
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
// import Home from "./Day-22 useParams/pages/Home";
// import About from "./Day-22 useParams/pages/About.jsx";
// import Career from "./Day-22 useParams/pages/Career.jsx";
// import Error from "./Day-21 React Router Part-1/Error.jsx";
// import Products from "./Day-22 useParams/pages/Products.jsx";
// import NotFound from "./Day-21 React Router Part-1/NotFound.jsx";
// import CategoryPage from "./Day-22 useParams/pages/CategoryPage.jsx";
// import Login from "./Day-22 useParams/pages/Login.jsx"
// import Dashboard from "./Day-22 useParams/pages/Dashboard.jsx"
// import Protected from "./Day-22 useParams/pages/Protected.jsx";
import "./index.css";

//routing config setup
// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <Error />,
//     children: [
//       {
//         index: true,
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "career",
//         element: <Career />,
//       },
//       {
//         path: "products/:id",
//         element: <Products />,
//         loader: async ({ params }) => {
//           console.log("params:", params.id);
//           const response = await fetch(
//             `https://api.theindianhome.in/api/product/list`,
//           );
//           const { products } = await response.json();
//           const singleProduct = products.find(
//             (element) => element._id === params.id,
//           );
//           return singleProduct;
//         },
//       },
//       {
//         path: "*",
//         element: <NotFound />,
//       },
//       {
//         path: "category/:id",
//         element: <CategoryPage />,
//       },
//     ],
//   },
//   {
//     path: "login",
//     element: <Login/>,
//   },
//   {
//     path: "dashboard",
//     element: (
//       <Protected>
//         <Dashboard />
//       </Protected>
//     ),
//   },
// ]);

// createRoot(document.getElementById("root")).render(
//   <RouterProvider router={appRouter} />,
// );


//props drilling yaha se
createRoot(document.getElementById("root")).render(
  <App/>,
);