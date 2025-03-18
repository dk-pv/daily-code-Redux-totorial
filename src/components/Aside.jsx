import {useSelector,useDispatch} from 'react-redux'
import randomColor from 'randomcolor'
import {change_color} from '../Redex/colour/colourSlice'

function Aside() {
  const  color = useSelector(state => state.color.value)
  const dispatch = useDispatch()
  const changeColor =() =>{
    dispatch(change_color({
      color:randomColor()
    }))
  }
  return (
    <div className="aside">
      <h2 style={{color}}> Aside</h2>
      <button style={{color}} onClick={changeColor}>Change Color</button>
    </div>
  );
}

export default Aside;
