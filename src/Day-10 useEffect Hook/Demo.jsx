import React, { useState } from 'react'
import { useEffect } from 'react'


const Demo = () => {
    
    const [response,setResponse] = useState([])
    console.log("Demo Render");
    
    useEffect(() => {
      console.log("useEffect call..!!");
      
        getUsers()
    },[])

    //API CALL
    const getUsers = async () => {
        const resp = await fetch("https://api.github.com/users")
        const data = await resp.json()
        console.log(data);
        
        setResponse(data)
    }
    
    //Conditional Rendering
    if(response.length === 0)
    {
      return <div>Default Demo UI</div>
    }

  return (
    <div>Original Demo UI</div>
  )
}

export default Demo