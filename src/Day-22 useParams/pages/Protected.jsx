import React from 'react'
import { Navigate } from 'react-router-dom';

const Protected = ({children}) => {
    const loginStatus = true;
    if(!loginStatus)
    {
        return <Navigate to={"/login"} replace/>
    }

  return children
}

export default Protected