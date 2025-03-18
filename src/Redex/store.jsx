import {configureStore} from '@reduxjs/toolkit'
import colorReducer from './colour/colourSlice'
import countReducer from './count/countSlice'
export default configureStore({
    reducer:{
        color : colorReducer,
        count : countReducer
    }
})
