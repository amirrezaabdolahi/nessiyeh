import { authReducer } from "@/features/dashboard/slices/authSlice"
import { configureStore } from "@reduxjs/toolkit"



export const store = configureStore({
    reducer: {
        auth : authReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch