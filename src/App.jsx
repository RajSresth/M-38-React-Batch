
import React from 'react'
import Counter from './Topic-25 useReducer Hook/Counter'
import { CounterProvider } from './Topic-25 useReducer Hook/CounterContext'
import Parent from './Topic-25 useReducer Hook/Parent'
import Child from './Topic-25 useReducer Hook/Child'

const App = () => {
  return (
    <CounterProvider>
      <Counter/>
      <Parent/>
      <Child/>
    </CounterProvider>
  )
}

export default App



/*
import { BrowserRouter, createBrowserRouter, Route } from "react-router-dom";
import {Routes} from "react-router-dom";
import { AuthProvider } from "./Topic-24 Browser Router and ContextAPI/AuthContext";

import Body from "./Topic-24 Browser Router and ContextAPI/Body";
import Home from "./Topic-22 useParams/pages/Home"
import About from "./Topic-22 useParams/pages/About"
import Career from "./Topic-22 useParams/pages/Career"
import NotFound from "./Topic-21 React Router Part-1/NotFound"
import Login from "./Topic-22 useParams/pages/Login";


const App = () => {

  return (<AuthProvider>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Body/>}>
                <Route index element={<Home/>} />
                <Route path="about" element={<About/>} />
                <Route path="career" element={<Career/>} />
                <Route path="*" element={<NotFound/>} />
            </Route>
            <Route path="login" element={<Login/>}/>
        </Routes>
    </BrowserRouter>
  </AuthProvider>)             
            
};

export default App;

*/

