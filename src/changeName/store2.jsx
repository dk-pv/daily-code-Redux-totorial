import { configureStore } from "@reduxjs/toolkit";
import nameReducer from '../changeName/nameSlice'
const store2 =  configureStore({
    reducer : {
        name :  nameReducer
    }
})
export default store2