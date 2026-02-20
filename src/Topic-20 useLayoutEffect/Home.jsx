import {useEffect, useLayoutEffect} from 'react';
import "./style.css"

const Home = () => {

    useLayoutEffect(() => {
        document.getElementById("header").style.background = "rgb(95, 235, 221)";     
    }, [])
    


  return (
    <header id="header">
        <h2>Logo</h2>
        <nav>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Career</a>
            <a href="">Services</a>
        </nav>
    </header>
  )
}

export default Home