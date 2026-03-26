import React from 'react'
import {useAuth} from "../Topic-24 Browser Router and ContextAPI/AuthContext";
import {Navigate,Outlet} from "react-router-dom"

const ProtectedRoute = () => {

    const {user} = useAuth()

  return user? <Outlet/> : <Navigate to={"/login"} replace={true}/>
}

export default ProtectedRoute