import React from 'react'
import {useRouteError} from "react-router-dom";

const Error = () => {
    console.log(useRouteError())
  return (
    <div>
        <h1>Oops something went wrong!!</h1>
    </div>
  )
}

export default Error