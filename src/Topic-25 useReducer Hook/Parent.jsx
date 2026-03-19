import React, { useContext } from 'react'
import { CounterContext } from './CounterContext'

const Parent = () => {

    const {state,dispatch} = useContext(CounterContext)
  return (
    <div>
        <h3>Count in Parent</h3>
        <h3>Count:{state.count}</h3>
    </div>
  )
}

export default Parent