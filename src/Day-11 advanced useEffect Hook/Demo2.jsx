import React, { useEffect, useState } from 'react'


const Demo2 = () => {
  const [count,setCount] = useState(0)

  useEffect(() => {
      console.log("Demo 2 Use Effect");
        return () => {
          console.log("Demo 2 Cleanup");
          
        }  
      })

  console.log("Demo 2 Render");


    return (
      <div className='demo1'>
          <h2>Demo 2 Component</h2>
          <h2>Count:{count}</h2>
          <button className='btn' onClick={() => setCount(count+1)}>Add</button>
      </div>
  )
}

export default Demo2