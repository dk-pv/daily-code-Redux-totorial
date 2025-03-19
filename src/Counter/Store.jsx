import { configureStore } from "@reduxjs/toolkit";
import countReducer from "../Counter/counterSlice"

const Store = configureStore({
    reducer : {


        count : countReducer
    }
})

export default Store