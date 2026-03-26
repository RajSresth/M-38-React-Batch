import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name:"cart",
    initialState: {
                    item: []
                },
    reducers: {
        addItem: (state,action)=> {},
        removeItem: (state,action) => {},
        clearCart: (state,action) => {}
    }
})


// actions are named export
export const {addItem,removeItem,clearCart} = CartSlice.actions; 


// reducer function export
export default CartSlice.reducer;