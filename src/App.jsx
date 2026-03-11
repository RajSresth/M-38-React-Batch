import React, { useState } from 'react'
import GrandParent from './Topic-23 Props Drilling/GrandParent'
import {UserContext} from "./Topic-23 Props Drilling/UserContext.jsx"
import Parent from './Topic-23 Props Drilling/Parent.jsx'
import Child from './Topic-23 Props Drilling/Child.jsx'



const App = () => {
  const [username, setUsername] = useState("Chandan Kumar")

  return (<>
    <UserContext.Provider value={{username, setUsername}}>
        <GrandParent />
        <Parent/>
    </UserContext.Provider>   
        <Child/>
    </>)
}


export default App





/**
import {Outlet} from "react-router-dom";
import Header from "./Topic-22 useParams/pages/Header";
import Home from "./Topic-22 useParams/pages/Home";

const App = () => {
  return (
    <div id="app-component">
      <Header/>
      <main>
        <Outlet/>
      </main>
    </div>
  );
};

export default App;
 */