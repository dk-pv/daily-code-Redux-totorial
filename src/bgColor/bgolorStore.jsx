import { configureStore } from "@reduxjs/toolkit";
import colorReducer  from '../bgColor/bgColorSlice'

export default configureStore({
    reducer:{
        color:colorReducer
    }
})