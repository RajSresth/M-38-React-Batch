import React, { useEffect, useEffectEvent, useRef, useState } from 'react'

// const Counter = () => {
//     const [count,setCount] = useState(0)
//     const ref = useRef(null)
//     ref.current=count

//     useEffect(() => {
//         console.log("use Effect start");
//         const bag = "american tourister"
        
//         const intervalId = setInterval(() => {
//             console.log("set interval");
//             console.log("Count",count);
//             console.log("Count",ref.current);
//             console.log("bag:",bag);
            

//         },1000)
//         console.log("use Effect end");
        
//         return () => {
//             console.log("Cleanup func");
            
//             clearInterval(intervalId)
//         }
//     },[count])
//   return (
//     <div>Counter
//         <h1>Count:{count}</h1>
//         <button onClick={() => setCount(count+1)}>Increment</button>
//     </div>
//   )
// }

// export default Counter




//best way is to use use useEffectEvent
const Counter = () => {
    const [count,setCount] = useState(0)
    const fn = useEffectEvent(() => {
        return count
    })

    useEffect(() => {
        console.log("use Effect start");        
        const intervalId = setInterval(() => {
            // console.log("count:",fn());
            console.log();
            
            
        },1000)
        console.log("use Effect end");
        
        return () => {
            console.log("Cleanup func");  
            clearInterval(intervalId)
        }
    },[])
  return (
    <div>Counter
        <h1>Count:{count}</h1>
        <button onClick={() => setCount(count+1)}>Increment</button>
    </div>
  )
}

export default Counter