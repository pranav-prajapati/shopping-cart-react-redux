import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart.slice";
import productSlice from "./product.slice";

const store=configureStore({
    reducer : {
        cart : cartSlice,
        products: productSlice
    }
})

export default store;