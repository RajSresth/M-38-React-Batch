import React, { useEffect, useState } from 'react'


const Demo1 = () => {
    const [count,setCount] = useState(0)

    useEffect(() => {
    console.log("Demo 1 Use Effect");
      return () => {
        console.log("Demo 1 Cleanup !!");
        
      }  
    })

    console.log("Demo 1 Render");
    
  return (
    <div className='demo1'>
        <h2>Demo 1 Component</h2>
        <h2>Count:{count}</h2>
        <button className='btn' onClick={() => setCount(count+1)}>Add</button>
    </div>

  )
}

export default Demo1