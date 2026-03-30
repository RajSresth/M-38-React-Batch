import {useState} from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

const Parent = () => {

    const [count, setCount] = useState(0);

  return (
    <div>
        
        <h1>Parent Component</h1>
        <h2>Parent Count: {count}</h2>

        <Child1 count={count} setCount={setCount}/>
        <Child2 count={count} setCount={setCount}/>
    </div>
  )
}

export default Parent