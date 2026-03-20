


import { BrowserRouter, createBrowserRouter, Route } from "react-router-dom";
import {Routes} from "react-router-dom";
import { AuthProvider } from "./Topic-24 Browser Router and ContextAPI/AuthContext";

import Body from "./Topic-24 Browser Router and ContextAPI/Body";
import Home from "./Topic-22 useParams/pages/Home"
import About from "./Topic-22 useParams/pages/About"
import Career from "./Topic-22 useParams/pages/Career"
import NotFound from "./Topic-21 React Router Part-1/NotFound"
import Login from "./Topic-22 useParams/pages/Login";

import ProtectedRoute from "./Topic-26 Advanced useReducer ContextAPI/ProtectedRoute";
import Cart from "./Topic-26 Advanced useReducer ContextAPI/Cart";
import Profile from "./Topic-26 Advanced useReducer ContextAPI/Profile";
import Order from "./Topic-26 Advanced useReducer ContextAPI/Order";


const App = () => {

  return (<AuthProvider>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Body/>}>
                <Route index element={<Home/>} />
                <Route path="about" element={<About/>} />
                <Route path="career" element={<Career/>} />
                <Route  element={<ProtectedRoute/> }>
                    <Route path="cart" element={<Cart/>}/>
                    <Route path="profile" element={<Profile/>} />
                    <Route path="order" element={<Order/>} />
                </Route>   
              
                <Route path="*" element={<NotFound/>} />
            </Route>
            <Route path="login" element={<Login/>}/>
        </Routes>
    </BrowserRouter>
  </AuthProvider>)             
            
};

export default App;


