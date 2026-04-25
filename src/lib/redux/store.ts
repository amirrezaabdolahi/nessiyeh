import { authReducer } from "@/features/dashboard/slices/authSlice"
import { customerSliceReducer } from "@/features/dashboard/slices/customerFormSlice"
import { debtsSliceReducer } from "@/features/dashboard/slices/debtsFormSlice"
import { paymentSliceReducer } from "@/features/dashboard/slices/paymentFormSlice"
import { productFormReducers } from "@/features/dashboard/slices/productFormSlice"
import { configureStore } from "@reduxjs/toolkit"



export const store = configureStore({
    reducer: {
        auth: authReducer,
        debtsForm: debtsSliceReducer,
        paymentsForm: paymentSliceReducer,
        customersForm: customerSliceReducer,
        productsForm: productFormReducers,

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch