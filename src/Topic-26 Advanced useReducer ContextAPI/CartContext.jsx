import {createContext, useReducer} from "react";

// 1. create a cart store
export const CartContext = createContext();


// 2. create a CartProvider Component  
export const CartProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState)


    return <CartContext.Provider value={{state,dispatch}}>
        {children}
    </CartContext.Provider>
}





