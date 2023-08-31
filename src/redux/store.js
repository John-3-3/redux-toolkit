import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../redux/features/cart';
import modalReducer from '../redux/features/modal'

export const store = configureStore({
    reducer:{
        cart: cartReducer,
        modal: modalReducer,
    },
});