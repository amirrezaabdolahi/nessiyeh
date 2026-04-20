import { DebtType } from "@/types/modalsTypes";
import { createSlice } from "@reduxjs/toolkit";



interface modalSliceProps {
    debtsModal : DebtType | null
}

const initialState : modalSliceProps = {
    debtsModal : null
}



const modalSlice = createSlice({
    name : "modals",
    initialState,
    reducers : {

    }
})

