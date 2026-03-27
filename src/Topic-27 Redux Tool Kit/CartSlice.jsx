import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name:"cart",
    initialState: {
                    items: []
                },
    reducers: {
        addItem: (state,action)=> {
                state.items.push({...action.payload, quantity:1})
    },
        removeItem: (state,action) => {
            state.items = state.items.filter(item => item._id !== action.payload);
        },
        increaseItem: (state,action) => {
            console.log(action)
            const isItemExisted = state.items.find(item => item?._id === action?.payload)
            
            if(isItemExisted)
            {
                    isItemExisted.quantity = isItemExisted.quantity + 1 ;               
            }
        },
        decreaseItem: (state,action) => {
             const existingItem = state.items.find(item => item._id === action?.payload);
            if (existingItem) {
                if (existingItem.quantity === 1)
                {
                    state.items = state.items.filter(item => item._id !== action.payload);
                } else {
                    existingItem.quantity -= 1;
                }
            }
        },
        clearCart: (state,action) => {
            state.items = []
        }
    }
})


// actions are named export
export const {addItem,removeItem,clearCart,increaseItem,decreaseItem} = CartSlice.actions; 


// reducer function export
export default CartSlice.reducer;