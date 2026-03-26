import React, { useCallback, useMemo, useState } from 'react'
import Child from './Child'
import Button from './Button'


const Parent = () => {

    const [text,setText] = useState("")
    const [count,setCount] = useState(0)

    console.log("1 Parent Render");


    const heavyCalculation = () => {
        console.log("Heavy Calculation");
  
        let sum =0 
        for(let i=0; i<=10000000; i++){
            sum = sum+i
        }
        for(let j=0; j<=10000000; j++){
            sum=sum+j
        }
        return sum
    }
    
    const result = useMemo(() => {
        console.log("Use memo 1 []");
        return heavyCalculation()
    },[])

    const user = useMemo(() => {
        console.log(`useMemo 2 ["count:", ${count}]`);
        console.log("Count Change-User Object created again !!");
        
        return {username:"Tinku", age : 21}
    },[count])


    const handleClick = useCallback(() => {
        setCount(count+1)
    },[] )

  return (

    <div>
        <h2>Parent Component</h2>
        <input 
        type="text" 
        value={text} 
        placeholder='Enter your text'
        onChange={(e) => setText(e.target.value)} 
        />

        <h3>Count:{count}</h3>
        <Button fn={handleClick}/>


        {/* Commented to understand useCallback for Button component */}
        {/* <Child count={count} result={result} user = {user} /> */}
        {/* <Child result={result} user = {user} /> */}
        {/* <Child result={result} user = {user} /> */}

    </div>
  )
}

export default Parent