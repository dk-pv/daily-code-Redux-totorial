import {configureStore} from '@reduxjs/toolkit'
import colorReducer from './colour/colourSlice'
export default configureStore({
    reducer:{
        color : colorReducer
    }
})