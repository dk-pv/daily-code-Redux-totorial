import {useSelector} from 'react-redux'
function Counter() {
  const color = useSelector( state => state.color.value)
  return (
    <div className="counter">
      <h2 style={{color}}>Counter</h2>
      <h3 style={{color}}>The count is - 0</h3>
      <button style={{color}}>Increase</button>
      <button style={{color}}>Decrease</button>
    </div>
  );
}

export default Counter;