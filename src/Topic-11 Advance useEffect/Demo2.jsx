import {useState,useEffect} from 'react'

const Demo2 = () => {
  const [count, setCount] = useState(0);

    useEffect(() => {
    console.log("Demo2 useEffect");
  
    return () => {
      console.log("Demo2 cleanup");
    }
  })

  console.log("Demo2 Render")

  return (
    <div className='demo2'>
        <h1>Demo-2 Component</h1>
        <h2>Count: {count}</h2>   
        <button className="btn" onClick={()=>{setCount(count + 1)}}>Add</button>
    </div>
        
  )
}

export default Demo2