import { configureStore } from "@reduxjs/toolkit";
import countReducer from '../simple/simpleSlice'

export default configureStore({
    reducer:{
        count: countReducer
    }
})