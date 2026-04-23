import { authReducer } from "@/features/dashboard/slices/authSlice"
import { debtsSliceReducer } from "@/features/dashboard/slices/debtsFormSlice"
import { configureStore } from "@reduxjs/toolkit"



export const store = configureStore({
    reducer: {
        auth : authReducer,
        debtsForm : debtsSliceReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch