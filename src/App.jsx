


import { BrowserRouter, Route } from "react-router-dom";
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

import {CartProvider} from "./Topic-26 Advanced useReducer ContextAPI/CartContext"


// Redux tool kit
import { Provider } from "react-redux";
import {store} from "./Topic-27 Redux Tool Kit/Store"

const App = () => {

  return (<AuthProvider>
                <Provider store={store}>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Body/>}>
                                {/* public routes */}
                                <Route index element={<Home/>} />
                                <Route path="about" element={<About/>} />
                                <Route path="career" element={<Career/>} />

                                {/* Private routes user=_______ */}
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
                </Provider>
        </AuthProvider>)             
            
};

export default App;


