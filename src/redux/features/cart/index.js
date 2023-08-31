import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import carItems from '../../../cartItems';

const initialState = {
    cartItems: carItems,
    amount: 1,
    total: 0,
    isLoading: true,
}

const cartSlice = createSlice({
    name: 'cart', 
    initialState,
    reducers:{
        clearCart: state=>{
            return{
              cartItems:[]  
            }
        },
        removeItem: (state, action)=>{
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter((item)=>
                item.id !== itemId
            );
        }, 
        increase: (state, { payload }) => {
            const cartItem = state.cartItems.find((item) => item.id === payload.id);
            cartItem.amount = cartItem.amount + 1;
        },
        decrease: (state, { payload }) => {
            const cartItem = state.cartItems.find((item) => item.id === payload.id);
            cartItem.amount = cartItem.amount - 1;
        },
        calculateTotals: (state) => {
            let amount = 0;
            let total = 0;

            state.cartItems.forEach((item) => {
              amount += item.amount;
              total += item.amount * item.price;
            });
            
            state.amount = amount;
            state.total = total;
        },
    }
});

export default cartSlice.reducer;
export const {clearCart, removeItem, increase, decrease, calculateTotals} = cartSlice.actions;