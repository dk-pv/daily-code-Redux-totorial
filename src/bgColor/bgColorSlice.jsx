import { createSlice } from "@reduxjs/toolkit";

const bgColorSlice = createSlice({
  name: "color",
  initialState: {
    value: "black",
  },
  reducers: {
    changeBgColor: (state) => {
      state.value = state.value === 'black' ? 'red' : 'black'
    },
  },
});
export const {changeBgColor} = bgColorSlice.actions
export default bgColorSlice.reducer
