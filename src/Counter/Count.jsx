import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, reset } from "./counterSlice"


const Count =() =>{

    const dispatch = useDispatch()

    const counter = useSelector(state => state.count.value)
    

    return(
        <div>
            <h1>Counter:{counter}</h1>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(reset())}>reset</button>
        </div>
    )
}

export default Count