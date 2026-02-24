import React from 'react'
import {Link, Outlet} from "react-router-dom"

const Services = () => {
  return (
    <div className="service">
        <div className="top-bar">
            <Link to="user">User</Link>
            <Link to="seller">Seller</Link>
        </div>
        <Outlet/>
    </div>
  )
}

export default Services