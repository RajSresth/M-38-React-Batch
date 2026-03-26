import { createContext, useReducer } from "react"
import { initialState, reducer } from "./CountReducer"

//1. store
export const CounterContext = createContext()

//2. provider component
export const CounterProvider = ({children}) => {

    const [state,dispatch] = useReducer(reducer, initialState);

    return <CounterContext.Provider value={{state,dispatch}}>
        {children}
    </CounterContext.Provider>
}