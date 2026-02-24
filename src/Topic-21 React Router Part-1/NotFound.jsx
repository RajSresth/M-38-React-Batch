import React from 'react'
import { Link, useRouteError } from 'react-router-dom'


const NotFound = () => {
  const err = useRouteError();
  return (
    <div className="error" >
        <div className="container">
          <h1>🥺 Oops something Went Wrong..!!</h1>
          <h2>{err.status} - {err.statusText}</h2>
          <h2>{err.message}</h2>
          <p>Back to <Link to="/">Home Page</Link></p>
        </div>
    </div>
  )
}

export default NotFound