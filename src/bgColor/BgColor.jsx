
import {useDispatch , useSelector} from 'react-redux'
import { changeBgColor } from './bgColorSlice'

const BgColor = () => {
    const dispatch = useDispatch()
    const color = useSelector(state => state.color.value)
  return (
    <div>
        <div  style={{backgroundColor:color, width:100 , height:100}}>svafasba</div>
        <button onClick={() => dispatch(changeBgColor())}>changeBgColor</button>

      
    </div>
  )
}

export default BgColor
