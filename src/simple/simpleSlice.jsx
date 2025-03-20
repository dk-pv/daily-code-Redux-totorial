import { createSlice } from "@reduxjs/toolkit";
const simpleSlice = createSlice({
    name: "count",
    initialState:{
        value:0
    },
    reducers: {
        increment : (state) =>{
            state.value = state.value + 1
        },
        decrement : (state) =>{
            state.value = state.value - 1
        },
        reset : (state)  =>{
            state.value = state.value = 0
        }

    }
})
export const {increment , decrement ,reset} = simpleSlice.actions
export default simpleSlice.reducer