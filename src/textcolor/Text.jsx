import { useDispatch, useSelector } from "react-redux"
import { changeText } from "./textSlice"


const Text = () => {
    const dispatch =useDispatch()
    const name = useSelector(state => state.name.value)
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={() => dispatch(changeText())}>change</button>
    </div>
  )
}

export default Text
