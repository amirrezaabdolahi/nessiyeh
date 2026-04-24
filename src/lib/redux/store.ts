import { authReducer } from "@/features/dashboard/slices/authSlice"
import { debtsSliceReducer } from "@/features/dashboard/slices/debtsFormSlice"
import { paymentSliceReducer } from "@/features/dashboard/slices/paymentFormSlice"
import { configureStore } from "@reduxjs/toolkit"



export const store = configureStore({
    reducer: {
        auth : authReducer,
        debtsForm : debtsSliceReducer,
        paymentsForm : paymentSliceReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch