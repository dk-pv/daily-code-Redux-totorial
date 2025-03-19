import { createSlice } from "@reduxjs/toolkit";

const nameSlice = createSlice({
    name : "name",
    initialState : {
        value: "Danish"
    },
    reducers:{
        changeName : (state) =>{
            state.value = "kukku"
        }
    }
})
export const {changeName} = nameSlice.actions
export default nameSlice.reducer