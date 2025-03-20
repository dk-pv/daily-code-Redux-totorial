import { configureStore } from "@reduxjs/toolkit";
import nameReducer from "../textcolor/textSlice"

export default configureStore({
    reducer :{
        name : nameReducer
    }
})