import React from 'react'
import { Link} from 'react-router-dom'


const NotFound = () => {
 
  return (
    <div className="error" >
        <div className="container">
          <h1><span style={{color:"red"}}>404</span> Page Not Found..!!</h1>
          <p>Back to <Link to="/">Home Page</Link></p>
        </div>
    </div>
  )
}
         

export default NotFound