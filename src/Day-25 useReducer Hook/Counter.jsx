import React, { useState , useReducer, useContext} from 'react'
import { initialState, reducer } from './CountReducer'
import { CounterContext } from './CounterContext'

const Counter = () => {
    // const [count,setCount] = useState(0)

    // const [state, dispatch] = useReducer(reducer,initialstate)

    const {state,dispatch} = useContext(CounterContext)
    
    
  return (
    <div>
        <h2>Count: {state.count}</h2>

        <button onClick={() => dispatch({type:"INCREMENT", payload:10})}>Increment</button>

        <button onClick={() => dispatch({type:"DECREMENT"})}>Decrement</button>

        <button onClick={() => dispatch({type: "RESET"})}>Reset</button>
    </div>
  )
}

export default Counter





