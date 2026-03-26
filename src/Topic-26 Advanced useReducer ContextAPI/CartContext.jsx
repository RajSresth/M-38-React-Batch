import {createContext, useReducer,useContext, useEffect} from "react";
import {initialState, cartReducer} from "./CartReducer"

// 1. create a cart store
const CartContext = createContext();


// 2. create a CartProvider Component  
export const CartProvider = ({children}) => {

    const [state, dispatch] = useReducer(cartReducer, initialState)

    
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(state.cart));
    }, [state.cart]);

    return <CartContext.Provider value={{state,dispatch}}>
        {children}
    </CartContext.Provider>
}


// 3. useContext and custom Hook
export const useCart = () => useContext(CartContext);