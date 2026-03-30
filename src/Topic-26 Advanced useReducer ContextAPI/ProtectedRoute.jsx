import React from 'react'
import {Navigate,Outlet} from "react-router-dom"
import useAuthStore from '../Topic-28 Zustand/authStore';

const ProtectedRoute = () => {

    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return isAuthenticated? <Outlet/> : <Navigate to={"/login"} replace={true}/>
}

export default ProtectedRoute