import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, reset } from "./simpleSlice"



const Simple = () => {
    const dispatch = useDispatch()
    const count = useSelector(state => state.count.value)
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
        <button onClick={() => dispatch(reset())}>reset</button>
    </div>
  )
}

export default Simple
