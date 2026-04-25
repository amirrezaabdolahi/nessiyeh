import { CustomerModalType } from "@/types/modalsTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";



const initialState: CustomerModalType = {
    fullname: '',
    phone: '',
    code: '',
    description: ''
}


const customerFormSlice = createSlice({
    name: 'customerForm',
    initialState,
    reducers: {
        updateForm: <K extends keyof CustomerModalType>(state: CustomerModalType, action: PayloadAction<{ field: K, value: CustomerModalType[K] }>) => {
            state[action.payload.field] = action.payload.value
        },
        resetForm: () => initialState
    }
})




export const customerSliceReducer = customerFormSlice.reducer
export const customerSliceActions = customerFormSlice.actions