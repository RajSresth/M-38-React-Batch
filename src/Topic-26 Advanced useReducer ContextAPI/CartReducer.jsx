

// initialState
export const initialState = {
    cart: [
]
}

// reducer function
export const cartReducer = (state,action)=> {

    switch (action.type) {
        case "ADD_ITEM":
            
               const isItemExist = state.cart.find(element => element.id === action.payload._id)

               if(isItemExist)
               {
                   state.cart.map(element => element._id === )
               }
           
            break;
    
        case "REMOVE_ITEM":
            
            break;

        case "INCREASE_QTY":
            
            break;

        case "DECREASE_QTY":
            
            break;
        
        case "CLEAR_ALL":
            break;

        default:
            break;
    }
}