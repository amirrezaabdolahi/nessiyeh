import { createSlice } from "@reduxjs/toolkit";

const initialState = {

}



const productFormSlice = createSlice({
    name: 'productForm',
    initialState,
    reducers: {

    }
})



export const productFormReducers = productFormSlice.reducer
export const productFormActions = productFormSlice.actions