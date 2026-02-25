
import { Link, useRouteError } from 'react-router-dom'


const NotFound = () => {
  const error = useRouteError();
  console.log("err:",error);
  return (
    <div className="error" >
        <div className="container">
          <h1>🥺 Oops something Went Wrong ..!!</h1>
          <h2>{error.status}-{error.statusText}</h2>
          <h2>{error.message}</h2>
          <p>Back to <Link to="/">Home Page</Link></p>
        </div>
    </div>
  )
}

export default NotFound