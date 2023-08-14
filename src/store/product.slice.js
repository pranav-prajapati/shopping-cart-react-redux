import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../services/Products.service";
import { status } from "../utils/constants";

const initialState = {
  products: [],
  status: status.IDLE
};

export const getProductsAsync = createAsyncThunk("get/products", async () => {
  return getProducts();
});

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.
    addCase(getProductsAsync.fulfilled,(state,action)=>{
        state.products=action.payload
        state.status=status.SUCCESS
    }).
    addCase(getProductsAsync.pending,(state)=>{
        state.status=status.LOADING
    }).
    addCase(getProductsAsync.rejected,(state)=>{
        state.status=status.FAILED
    })
  }
});

export default productSlice.reducer;
