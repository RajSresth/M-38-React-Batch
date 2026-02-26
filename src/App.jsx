import {Outlet} from "react-router-dom";
import "./index.css"

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
