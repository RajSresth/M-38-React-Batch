import React from 'react'
import Header from "../Topic-22 useParams/pages/Header.jsx"
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div>
        <Header/>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default Body