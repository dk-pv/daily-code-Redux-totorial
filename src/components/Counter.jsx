import {useSelector , useDispatch} from 'react-redux'
import {increment_count , decrement_count} from '../Redex/count/countSlice'

function Counter() {
  const color = useSelector( state => state.color.value)

  const count = useSelector(state => state.count.value)

  const dispatch = useDispatch()

  const increment = () =>{
    dispatch(increment_count())
  }
  const decrement = () =>{
    dispatch(decrement_count())
  }
  return (
    <div className="counter">
      <h2 style={{color}}>Counter</h2>
      <h3 style={{color}}>The count is = {count}</h3>
      <button style={{color}} onClick={increment}>Increase</button>
      <button style={{color}} onClick={decrement}>Decrease</button>
    </div>
  );
}

export default Counter;