import React from 'react'
import Header from "../Day-22 useParams/pages/Header.jsx"
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className="body-component">
        <Header/>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default Body