import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="error" >
        <h1>Page Not Found</h1>
         Back to <Link to="/">Home Page</Link>
    </div>
  )
}

export default NotFound