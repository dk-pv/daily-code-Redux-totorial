import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"; // Import the reducer

export const userStore = configureStore({
  reducer: {
    users: userReducer, // Add userSlice reducer
  },
});
