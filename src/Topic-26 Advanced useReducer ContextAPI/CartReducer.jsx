

// initialState
export const initialState = {
    cart: JSON.parse(localStorage.getItem("cart")) || []
}

// reducer function
export const cartReducer = (state,action)=> {

    switch (action.type) {
        case "ADD_ITEM":
            
               const isItemExist = state.cart.find(element => element?._id === action?.payload?._id); // undefined

               if(isItemExist)
               {
                  const updatedCart = state.cart.map(element =>{
                       return element?._id === action?.payload?._id ? {...element, qty: qty+1} : element
                   }  )
                   return {
                    ...state,
                    cart:updatedCart
                   }
               }
               else
            {
                 return {
                    ...state,
                    cart: [
                        ...state.cart,
                        {...action.payload, qty:1}
                    ]
                 }
            }
        break;

        case "REMOVE_ITEM":
            const filteredCart= state.cart.filter(element => element?._id !== action.payload)
            return {
                ...state,
                cart:filteredCart
            }
            break;

        case "INCREASE_QTY":
            const updatedCart = state.cart.map(element =>{
                       
                       return element?._id === action?.payload ? {...element, qty: element.qty + 1} : element
                   }  )
            console.log("updateCart:",updatedCart)
            return {
                    ...state,
                    cart:updatedCart
                   }
            break;

        case "DECREASE_QTY":
            const decreaseCart = state.cart.map(element =>{
                    
                       return element?._id === action?.payload ? {...element, qty: element.qty - 1} : element
                   }  ).filter(i => i.qty > 0)
        
            return {
                    ...state,
                    cart:decreaseCart
                   }
            break;
          
        
        case "CLEAR_ALL":
            return {cart:[]}
            break;

        default:
            break;
    }
}