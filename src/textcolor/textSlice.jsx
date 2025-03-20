import { createSlice } from "@reduxjs/toolkit";

const textSlice = createSlice({
    name: "text",
    initialState: {
        value: "kukku"
    },
    reducers: {
        changeText: (state) => {
            state.value = state.value === "kukku" ? "dani!" : "kukku";
        }
    }
});

export const { changeText } = textSlice.actions;
export default textSlice.reducer;
