

import {lazy, Suspense} from "react"
import { BrowserRouter, Route } from "react-router-dom";
import {Routes} from "react-router-dom";

// Normal Imports
import Body from "./Topic-24 Browser Router and ContextAPI/Body";
import ProtectedRoute from "./Topic-26 Advanced useReducer ContextAPI/ProtectedRoute";
import Shimmer from "./Topic-22 useParams/pages/Shimmer";
// Redux tool kit
import { Provider } from "react-redux";
import {store} from "./Topic-27 Redux Tool Kit/Store"

// Dynamic imports and lazy loading
const Home = lazy(() => import("./Topic-22 useParams/pages/Home"))
const About = lazy(() => import("./Topic-22 useParams/pages/About"))
const Career = lazy(() => import("./Topic-22 useParams/pages/Career"))
const NotFound = lazy(()=> import( "./Topic-21 React Router Part-1/NotFound"));
const Login =  lazy(()=> import("./Topic-22 useParams/pages/Login"));
const Cart = lazy(() => import("./Topic-26 Advanced useReducer ContextAPI/Cart"));
const Profile = lazy(() => import("./Topic-26 Advanced useReducer ContextAPI/Profile"));
const Order   = lazy(() => import("./Topic-26 Advanced useReducer ContextAPI/Order"));





const App = () => {

  return (
            <Provider store={store}>
                <BrowserRouter>

                 <Suspense fallback={<Shimmer/>}>
                    <Routes>
                        <Route path="/" element={<Body/>}>
                            {/* public routes */}
                            <Route index element={<Home/>} />
                            <Route path="about" element={
                                <Suspense fallback={<Shimmer/>} >
                                    <About/>
                                </Suspense>
                                } />
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
                </Suspense>
                </BrowserRouter>
            </Provider>
        )             
            
};

export default App;


